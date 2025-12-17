import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module1Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    { id: 1, statement: "Interest makes your money grow over time.", answer: "Truth" },
    { id: 2, statement: "You only earn interest if you withdraw money.", answer: "Myth" },
    { id: 3, statement: "The longer you keep money in the bank, the more interest you can earn.", answer: "Truth" },
    { id: 4, statement: "Saving ₱100 and saving ₱1,000 will earn the same interest.", answer: "Myth" },
    { id: 5, statement: "Money today is more valuable than the same amount in the future.", answer: "Truth" },
    { id: 6, statement: "₱500 today and ₱500 next year have the same value.", answer: "Myth" },
    { id: 7, statement: "You can invest money you receive today, but not money you receive later.", answer: "Truth" },
    { id: 8, statement: "Waiting to receive money always makes it more valuable.", answer: "Myth" },
    { id: 9, statement: "If prices rise faster than your savings grow, your purchasing power decreases.", answer: "Truth" },
    { id: 10, statement: "Inflation makes your money stronger.", answer: "Myth" },
    { id: 11, statement: "A stable price level means purchasing power stays the same.", answer: "Truth" },
    { id: 12, statement: "If your allowance stays the same but prices go up, you can buy more.", answer: "Myth" },
    { id: 13, statement: "If the price of snacks increases by 10% but your savings only grow by 5%, your purchasing power drops.", answer: "Truth" },
    { id: 14, statement: "Inflation affects everyone, even students.", answer: "Truth" },
    { id: 15, statement: "Prices never decrease once they go up.", answer: "Myth" },
  ];

  const handleAnswer = async (answer) => {
    setSelectedAnswer(answer);
    
    // Check if answer is correct
    const newScore = answer === questions[currentQuestion].answer ? score + 1 : score;
    if (answer === questions[currentQuestion].answer) {
      setScore(newScore);
    }

    // Move to next question after a short delay
    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        // Submit result to backend
        try {
          const totalQuestions = questions.length;
          const finalScore = answer === questions[currentQuestion].answer ? newScore : score;
          const percentage = ((finalScore / totalQuestions) * 100).toFixed(0);
          const passed = percentage >= 70;
          
          await ApiService.submitQuizResult({
            quizId: 'quiz1-module1',
            quizNumber: 1,
            moduleName: 'Truth or Myth',
            category: 'Knowledge',
            score: finalScore,
            totalQuestions: totalQuestions,
            percentage: parseFloat(percentage),
            passed: passed,
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
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed 
              ? 'Great job! You understand the concepts well.' 
              : 'Review the module and try again to improve your score.'}
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
        <Text style={styles.headerTitle}>Truth or Myth</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Question {currentQuestion + 1} of {questions.length}
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
          <Text style={styles.questionNumber}>Question {currentQuestion + 1}</Text>
          <Text style={styles.questionText}>{questions[currentQuestion].statement}</Text>
        </View>

        <View style={styles.answersContainer}>
          <TouchableOpacity
            style={[
              styles.answerButton,
              styles.truthButton,
              selectedAnswer === 'Truth' && styles.selectedButton,
            ]}
            onPress={() => handleAnswer('Truth')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.answerButtonText}>✓ TRUTH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.answerButton,
              styles.mythButton,
              selectedAnswer === 'Myth' && styles.selectedButton,
            ]}
            onPress={() => handleAnswer('Myth')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.answerButtonText}>✗ MYTH</Text>
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
  questionCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
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
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 26,
  },
  answersContainer: {
    gap: 15,
  },
  answerButton: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  truthButton: {
    backgroundColor: '#10B981',
  },
  mythButton: {
    backgroundColor: '#EF4444',
  },
  selectedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  answerButtonText: {
    fontSize: 18,
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

export default Module1Quiz;
