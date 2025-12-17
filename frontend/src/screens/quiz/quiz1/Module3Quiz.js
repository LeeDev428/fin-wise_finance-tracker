import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module3Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const translateX = React.useRef(new Animated.Value(0)).current;

  const questions = [
    { id: 1, statement: "A stock keeps going up and down every week.", answer: "VOLATILE" },
    { id: 2, statement: "A time deposit grows a tiny bit every month and never drops.", answer: "STEADY" },
    { id: 3, statement: "Government bonds slowly increase and almost never change suddenly.", answer: "STEADY" },
    { id: 4, statement: "One company's stock suddenly drops a lot after bad news.", answer: "VOLATILE" },
    { id: 5, statement: "This stock jumps up today, falls tomorrow, then jumps again.", answer: "VOLATILE" },
    { id: 6, statement: "Your savings account increases the same small amount every month.", answer: "STEADY" },
    { id: 7, statement: "A trending stock doubles in price, then crashes the next month.", answer: "VOLATILE" },
    { id: 8, statement: "A government bond gives slow, steady growth for years.", answer: "STEADY" },
    { id: 9, statement: "A cryptocurrency goes up 20% in a day, then down 25% the next day.", answer: "VOLATILE" },
    { id: 10, statement: "An index fund grows slowly with small bumps but no big swings.", answer: "STEADY" },
  ];

  const handleSwipe = async (direction) => {
    const answer = direction === 'right' ? 'STEADY' : 'VOLATILE';
    setSelectedAnswer(answer);
    
    const newScore = answer === questions[currentQuestion].answer ? score + 1 : score;
    if (answer === questions[currentQuestion].answer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        translateX.setValue(0);
      } else {
        setShowResult(true);
        // Submit result to backend
        try {
          const finalScore = answer === questions[currentQuestion].answer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz1-module3',
            quizNumber: 1,
            moduleName: 'Steady or Volatile',
            category: 'Behavior',
            score: finalScore,
            totalQuestions: questions.length,
            percentage: parseFloat(percentage),
            passed: percentage >= 70,
            timeTaken: 0,
          });
        } catch (error) {
          console.error('Error submitting quiz result:', error);
        }
      }
    }, 800);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    translateX.setValue(0);
  };

  if (showResult) {
    const percentage = ((score / questions.length) * 100).toFixed(0);
    const passed = percentage >= 70;

    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Quiz Results</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{passed ? '🎉' : '💪'}</Text>
          <Text style={styles.resultTitle}>
            {passed ? 'Well Done!' : 'Keep Learning!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed 
              ? 'You can distinguish steady and volatile investments!' 
              : 'Review investment types and try again.'}
          </Text>

          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.restartButtonText}>Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backHomeButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backHomeButtonText}>Back to Quizzes</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Steady or Volatile</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Statement {currentQuestion + 1} of {questions.length}
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
            ]} 
          />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.swipeIndicators}>
          <View style={styles.swipeLeft}>
            <Text style={styles.swipeArrow}>⬅️</Text>
            <Text style={styles.swipeText}>VOLATILE</Text>
            <Text style={styles.swipeSubtext}>(risky, ups & downs)</Text>
          </View>
          <View style={styles.swipeRight}>
            <Text style={styles.swipeArrow}>➡️</Text>
            <Text style={styles.swipeText}>STEADY</Text>
            <Text style={styles.swipeSubtext}>(safe, stable)</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.questionCard}>
            <Text style={styles.questionNumber}>Statement {currentQuestion + 1}</Text>
            <Text style={styles.questionText}>{questions[currentQuestion].statement}</Text>
            <Text style={styles.swipeHint}>👆 Tap below to choose</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, styles.volatileButton]}
            onPress={() => handleSwipe('left')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceButtonText}>⬅️ VOLATILE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.choiceButton, styles.steadyButton]}
            onPress={() => handleSwipe('right')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceButtonText}>STEADY ➡️</Text>
          </TouchableOpacity>
        </View>

        {selectedAnswer && (
          <View style={[
            styles.feedbackContainer,
            selectedAnswer === questions[currentQuestion].answer 
              ? styles.correctFeedback 
              : styles.incorrectFeedback
          ]}>
            <Text style={styles.feedbackText}>
              {selectedAnswer === questions[currentQuestion].answer 
                ? '✓ Correct!' 
                : `✗ Wrong! It's ${questions[currentQuestion].answer}`}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  placeholder: {
    width: 34,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  swipeIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  swipeLeft: {
    alignItems: 'flex-start',
  },
  swipeRight: {
    alignItems: 'flex-end',
  },
  swipeArrow: {
    fontSize: 24,
  },
  swipeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  swipeSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  cardContainer: {
    marginBottom: 30,
  },
  questionCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    minHeight: 200,
    justifyContent: 'center',
  },
  questionNumber: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 15,
  },
  questionText: {
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 28,
    marginBottom: 20,
  },
  swipeHint: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  choiceButton: {
    flex: 1,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  volatileButton: {
    backgroundColor: '#EF4444',
  },
  steadyButton: {
    backgroundColor: '#10B981',
  },
  choiceButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  feedbackContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  correctFeedback: {
    backgroundColor: '#D1FAE5',
  },
  incorrectFeedback: {
    backgroundColor: '#FEE2E2',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.accent,
    marginBottom: 10,
  },
  resultPercentage: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 20,
  },
  resultMessage: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  restartButton: {
    backgroundColor: colors.accent,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 15,
  },
  restartButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  backHomeButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  backHomeButtonText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Module3Quiz;
