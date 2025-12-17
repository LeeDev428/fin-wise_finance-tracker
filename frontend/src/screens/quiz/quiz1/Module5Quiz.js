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

const Module5Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which is the better deal?",
      options: [
        { label: "A: ₱200 with ₱20 off", value: "A", final: 180 },
        { label: "B: ₱200 with 5% off", value: "B", final: 190 },
      ],
      answer: "A"
    },
    {
      id: 2,
      question: "Which is cheaper after the discount?",
      options: [
        { label: "A: ₱150 with 10% off", value: "A", final: 135 },
        { label: "B: ₱150 with ₱10 off", value: "B", final: 140 },
      ],
      answer: "B"
    },
    {
      id: 3,
      question: "Best deal:",
      options: [
        { label: "A: ₱100 with 10% off", value: "A", final: 90 },
        { label: "B: ₱100 with ₱8 off", value: "B", final: 92 },
      ],
      answer: "A"
    },
    {
      id: 4,
      question: "Which item gives you the lowest price?",
      options: [
        { label: "A: ₱500 with 20% off", value: "A", final: 400 },
        { label: "B: ₱500 with ₱80 off", value: "B", final: 420 },
      ],
      answer: "A"
    },
    {
      id: 5,
      question: "Find the better deal:",
      options: [
        { label: "A: ₱250 with ₱25 off", value: "A", final: 225 },
        { label: "B: ₱250 with 15% off", value: "B", final: 212.5 },
      ],
      answer: "B"
    },
    {
      id: 6,
      question: "Best deal:",
      options: [
        { label: "A: ₱300 with 10% off", value: "A", final: 270 },
        { label: "B: ₱300 with ₱20 off", value: "B", final: 280 },
        { label: "C: ₱300 with ₱25 off", value: "C", final: 275 },
      ],
      answer: "C"
    },
    {
      id: 7,
      question: "Which is the cheapest after discount?",
      options: [
        { label: "A: ₱1200 with 10% off", value: "A", final: 1080 },
        { label: "B: ₱1200 with ₱100 off", value: "B", final: 1100 },
      ],
      answer: "A"
    },
    {
      id: 8,
      question: "Choose the best value:",
      options: [
        { label: "A: ₱850 with 15% off", value: "A", final: 722.5 },
        { label: "B: ₱850 with ₱100 off", value: "B", final: 750 },
        { label: "C: ₱850 with 12% off", value: "C", final: 748 },
      ],
      answer: "A"
    },
    {
      id: 9,
      question: "Cheapest after discount:",
      options: [
        { label: "A: ₱999 with ₱150 off", value: "A", final: 849 },
        { label: "B: ₱999 with 10% off", value: "B", final: 899.1 },
      ],
      answer: "A"
    },
    {
      id: 10,
      question: "Pick the best deal:",
      options: [
        { label: "A: ₱1500 with ₱200 off", value: "A", final: 1300 },
        { label: "B: ₱1500 with 20% off", value: "B", final: 1200 },
        { label: "C: ₱1500 with 15% off", value: "C", final: 1275 },
      ],
      answer: "B"
    },
    {
      id: 11,
      question: "Which price ends up lowest?",
      options: [
        { label: "A: ₱780 with 10% off", value: "A", final: 702 },
        { label: "B: ₱780 with ₱70 off", value: "B", final: 710 },
        { label: "C: ₱780 with 15% off", value: "C", final: 663 },
      ],
      answer: "C"
    },
    {
      id: 12,
      question: "Find the best deal:",
      options: [
        { label: "A: ₱450 with 20% off", value: "A", final: 360 },
        { label: "B: ₱450 with ₱70 off", value: "B", final: 380 },
        { label: "C: ₱450 with 15% off", value: "C", final: 382.5 },
      ],
      answer: "A"
    },
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    
    if (answer === questions[currentQuestion].answer) {
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
            {passed ? 'Amazing!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed 
              ? 'You are a smart shopper! You can find the best deals.' 
              : 'Practice calculating discounts and try again.'}
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
        <Text style={styles.headerTitle}>Find the Best Deal 💰</Text>
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
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option.value && (
                  questions[currentQuestion].answer === option.value 
                    ? styles.correctOption 
                    : styles.incorrectOption
                ),
              ]}
              onPress={() => handleAnswer(option.value)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionText}>{option.label}</Text>
              {selectedAnswer !== null && (
                <Text style={styles.finalPrice}>= ₱{option.final}</Text>
              )}
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
                ? '✓ Correct! That\'s the best deal.' 
                : `✗ Wrong! Option ${questions[currentQuestion].answer} is cheaper.`}
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
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 15,
  },
  optionButton: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  correctOption: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  incorrectOption: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  optionText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  finalPrice: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: 'bold',
    marginTop: 5,
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

export default Module5Quiz;
