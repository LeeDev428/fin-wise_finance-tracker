import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module2Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    { id: 1, situation: "Your allowance increases from ₱300 to ₱450, but the price of your favorite meal increases from ₱60 to ₱90 (also 50%).", answer: "😐" },
    { id: 2, situation: "Your weekly allowance increases by 10%, but prices at the school canteen increase by 20%.", answer: "☹️" },
    { id: 3, situation: "Your allowance stays the same, but the price of your daily jeepney fare drops from ₱12 to ₱10.", answer: "🙂" },
    { id: 4, situation: "You get a ₱100 bonus, but snacks increase from ₱20 to ₱25.", answer: "🙂" },
    { id: 5, situation: "Your income goes from ₱500 to ₱600, and prices go from ₱100 to ₱110.", answer: "🙂" },
    { id: 6, situation: "Your allowance stays at ₱200, but the cost of school supplies increases by 30%.", answer: "☹️" },
    { id: 7, situation: "You receive ₱100 more, but the price of your favorite milk tea increases by ₱120.", answer: "☹️" },
    { id: 8, situation: "Both your allowance and prices increase by 20%.", answer: "😐" },
    { id: 9, situation: "Your allowance decreases slightly, but the price of your daily lunch decreases even more.", answer: "🙂" },
    { id: 10, situation: "Your part-time earnings increase from ₱1,000 to ₱1,200, while prices remain the same.", answer: "🙂" },
    { id: 11, situation: "Your allowance stays the same, but a promo makes your usual snacks cheaper for the month.", answer: "🙂" },
    { id: 12, situation: "Your parents double your allowance, but the cost of everything in the canteen also doubles.", answer: "😐" },
  ];

  const emojis = [
    { emoji: "🙂", label: "Richer", value: "🙂" },
    { emoji: "😐", label: "Still the same", value: "😐" },
    { emoji: "☹️", label: "Poorer", value: "☹️" },
  ];

  const handleAnswer = async (emoji) => {
    setSelectedAnswer(emoji);
    
    const newScore = emoji === questions[currentQuestion].answer ? score + 1 : score;
    if (emoji === questions[currentQuestion].answer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        // Submit result to backend
        try {
          const finalScore = emoji === questions[currentQuestion].answer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz1-module2',
            quizNumber: 1,
            moduleName: 'Emoji Reaction',
            category: 'Attitude',
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
            {passed ? 'Excellent!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed 
              ? 'You understand income and price changes well!' 
              : 'Review the concepts and try again.'}
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
        <Text style={styles.headerTitle}>Emoji Reaction</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Situation {currentQuestion + 1} of {questions.length}
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
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Situation {currentQuestion + 1}</Text>
          <Text style={styles.questionText}>{questions[currentQuestion].situation}</Text>
        </View>

        <Text style={styles.instructionText}>How would you feel?</Text>

        <View style={styles.emojiContainer}>
          {emojis.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emojiButton,
                selectedAnswer === item.value && styles.selectedEmoji,
              ]}
              onPress={() => handleAnswer(item.value)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.emojiIcon}>{item.emoji}</Text>
              <Text style={styles.emojiLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
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
                ? '✓ Correct reaction!' 
                : `✗ The correct feeling is ${questions[currentQuestion].answer}`}
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
  questionCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  questionNumber: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 24,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  emojiButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedEmoji: {
    backgroundColor: colors.accent,
    transform: [{ scale: 0.95 }],
  },
  emojiIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  emojiLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
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

export default Module2Quiz;
