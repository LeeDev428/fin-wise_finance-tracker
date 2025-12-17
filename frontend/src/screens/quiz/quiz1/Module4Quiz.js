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

const Module4Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      loanA: { text: "₱400/month for 3 years", isRedFlag: false },
      loanB: { text: "₱200/month for 10 years", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 2,
      loanA: { text: "8% interest, clear terms", isRedFlag: false },
      loanB: { text: "\"No interest!\" (but with ₱2,000 \"processing fee\")", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 3,
      loanA: { text: "₱10,000 loan, pay back ₱11,000", isRedFlag: false },
      loanB: { text: "₱10,000 loan, pay back ₱14,000", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 4,
      loanA: { text: "Fixed monthly payment", isRedFlag: false },
      loanB: { text: "\"Payment depends on our rules each month\"", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 5,
      loanA: { text: "1-year loan with higher monthly", isRedFlag: false },
      loanB: { text: "5-year loan with \"only ₱100 per month!\"", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 6,
      loanA: { text: "\"Read the full terms below\"", isRedFlag: false },
      loanB: { text: "\"No need to read terms, sign now!\"", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 7,
      loanA: { text: "6% interest rate", isRedFlag: false },
      loanB: { text: "\"0% interest if you pay extra charges every month\"", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 8,
      loanA: { text: "2-year loan, total cost ₱12,000", isRedFlag: false },
      loanB: { text: "2-year loan, total cost ₱15,500", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 9,
      loanA: { text: "Clear breakdown of fees", isRedFlag: false },
      loanB: { text: "\"₱0 fees!\" but \"maintenance charge applies monthly\"", isRedFlag: true },
      redFlag: "B"
    },
    {
      id: 10,
      loanA: { text: "\"Pay what you owe, no penalties\"", isRedFlag: false },
      loanB: { text: "\"Late fee: ₱500 per day\"", isRedFlag: true },
      redFlag: "B"
    },
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    
    if (answer === questions[currentQuestion].redFlag) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
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
            {passed ? 'Great Job!' : 'Keep Learning!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed 
              ? 'You can spot risky loans! Stay safe from debt traps.' 
              : 'Review loan warning signs and try again.'}
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
        <Text style={styles.headerTitle}>Pick the Red Flag 🚩</Text>
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
        <Text style={styles.instructionText}>
          Which loan is riskier or has a hidden trap?
        </Text>

        <View style={styles.loansContainer}>
          <TouchableOpacity
            style={[
              styles.loanCard,
              selectedAnswer === 'A' && (questions[currentQuestion].redFlag === 'A' ? styles.correctCard : styles.incorrectCard),
              selectedAnswer === 'A' && styles.selectedCard,
            ]}
            onPress={() => handleAnswer('A')}
            disabled={selectedAnswer !== null}
          >
            <View style={styles.loanHeader}>
              <Text style={styles.loanLabel}>Loan A</Text>
              {selectedAnswer === 'A' && questions[currentQuestion].redFlag === 'A' && (
                <Text style={styles.flagEmoji}>🚩</Text>
              )}
            </View>
            <Text style={styles.loanText}>{questions[currentQuestion].loanA.text}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loanCard,
              selectedAnswer === 'B' && (questions[currentQuestion].redFlag === 'B' ? styles.correctCard : styles.incorrectCard),
              selectedAnswer === 'B' && styles.selectedCard,
            ]}
            onPress={() => handleAnswer('B')}
            disabled={selectedAnswer !== null}
          >
            <View style={styles.loanHeader}>
              <Text style={styles.loanLabel}>Loan B</Text>
              {selectedAnswer === 'B' && questions[currentQuestion].redFlag === 'B' && (
                <Text style={styles.flagEmoji}>🚩</Text>
              )}
            </View>
            <Text style={styles.loanText}>{questions[currentQuestion].loanB.text}</Text>
          </TouchableOpacity>
        </View>

        {selectedAnswer && (
          <View style={[
            styles.feedbackContainer,
            selectedAnswer === questions[currentQuestion].redFlag 
              ? styles.correctFeedback 
              : styles.incorrectFeedback
          ]}>
            <Text style={styles.feedbackText}>
              {selectedAnswer === questions[currentQuestion].redFlag 
                ? '✓ Correct! That loan has red flags.' 
                : `✗ Wrong! Loan ${questions[currentQuestion].redFlag} is the risky one.`}
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
  instructionText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 25,
  },
  loansContainer: {
    gap: 20,
  },
  loanCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    borderWidth: 3,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  selectedCard: {
    borderColor: colors.accent,
  },
  correctCard: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  incorrectCard: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  loanLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
  },
  flagEmoji: {
    fontSize: 24,
  },
  loanText: {
    fontSize: 15,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  feedbackContainer: {
    marginTop: 25,
    padding: 18,
    borderRadius: 12,
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
    textAlign: 'center',
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

export default Module4Quiz;
