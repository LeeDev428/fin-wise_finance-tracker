import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module5Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      scenario: 'You feel like buying snacks and a small toy. What do you do?',
      options: [
        { id: 'A', text: 'Spend all ₱200 on snacks and toy' },
        { id: 'B', text: 'Save the ₱200 for your goal' },
        { id: 'C', text: 'Buy only the toy' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 2,
      scenario: 'Your friend invites you to a coffee shop, which costs ₱150. What do you do?',
      options: [
        { id: 'A', text: 'Go with your friend, leaving nothing for your goal' },
        { id: 'B', text: 'Politely decline and save ₱200' },
        { id: 'C', text: 'Go but spend only ₱50' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 3,
      scenario: 'You see a "flash sale" for a phone accessory for ₱180. Your goal is saving for a bag. What do you do?',
      options: [
        { id: 'A', text: 'Buy it immediately' },
        { id: 'B', text: 'Save your ₱200 for the bag' },
        { id: 'C', text: 'Ask your friend to buy it for you' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 4,
      scenario: 'You have ₱200 left and need school supplies worth ₱120. What do you do?',
      options: [
        { id: 'A', text: 'Buy the supplies' },
        { id: 'B', text: 'Spend it all on snacks' },
        { id: 'C', text: 'Save it all and skip the supplies' },
      ],
      correctAnswer: 'A',
    },
    {
      id: 5,
      scenario: 'You want to buy a small game skin for ₱100. You already have a goal to save ₱2,000. What do you do?',
      options: [
        { id: 'A', text: 'Buy the game skin' },
        { id: 'B', text: 'Save the ₱200 for your goal' },
        { id: 'C', text: 'Spend half on the skin and half on savings' },
      ],
      correctAnswer: 'B',
    },
  ];

  const handleAnswer = async (answerId) => {
    setSelectedAnswer(answerId);
    
    const newScore = answerId === questions[currentQuestion].correctAnswer ? score + 1 : score;
    if (answerId === questions[currentQuestion].correctAnswer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        try {
          const finalScore = answerId === questions[currentQuestion].correctAnswer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz3-module5',
            quizNumber: 3,
            moduleName: 'Last ₱200',
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
            {passed ? 'Responsible Budgeter!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You make responsible budgeting decisions!'
              : 'Review budgeting priorities and try again.'}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.retryButton} onPress={restartQuiz}>
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backToModulesButton}
              onPress={() => navigation.navigate('Quiz3Selection')}
            >
              <Text style={styles.backToModulesButtonText}>Back to Modules</Text>
            </TouchableOpacity>
          </View>
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
        <Text style={styles.headerTitle}>Last ₱200</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentQuestion + 1) / questions.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {currentQuestion + 1} / {questions.length}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.moneyBadge}>
          <Text style={styles.moneyText}>You have ₱200 left</Text>
        </View>

        <Text style={styles.questionNumber}>Scenario {currentQuestion + 1}</Text>
        <View style={styles.scenarioCard}>
          <Text style={styles.scenarioText}>
            {questions[currentQuestion].scenario}
          </Text>
        </View>

        <Text style={styles.instruction}>Choose the best decision:</Text>

        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedAnswer === option.id && styles.selectedButton,
                selectedAnswer &&
                  option.id === questions[currentQuestion].correctAnswer &&
                  styles.correctButton,
                selectedAnswer &&
                  selectedAnswer === option.id &&
                  option.id !== questions[currentQuestion].correctAnswer &&
                  styles.wrongButton,
              ]}
              onPress={() => handleAnswer(option.id)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionId}>{option.id}</Text>
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedAnswer && (
          <View
            style={[
              styles.feedbackContainer,
              selectedAnswer === questions[currentQuestion].correctAnswer
                ? styles.correctFeedback
                : styles.incorrectFeedback,
            ]}
          >
            <Text style={styles.feedbackText}>
              {selectedAnswer === questions[currentQuestion].correctAnswer
                ? '✓ Correct! This is the most responsible choice.'
                : `✗ Wrong! The best answer is ${questions[currentQuestion].correctAnswer}`}
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
  progressBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  moneyBadge: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  moneyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  questionNumber: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 12,
  },
  scenarioCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scenarioText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    lineHeight: 24,
  },
  instruction: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: colors.accent,
  },
  correctButton: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  wrongButton: {
    borderColor: '#F44336',
    backgroundColor: '#FFEBEE',
  },
  optionId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 12,
    minWidth: 30,
  },
  optionText: {
    fontSize: 15,
    color: colors.textPrimary,
    flex: 1,
  },
  feedbackContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  correctFeedback: {
    backgroundColor: '#E8F5E9',
  },
  incorrectFeedback: {
    backgroundColor: '#FFEBEE',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textPrimary,
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
    marginBottom: 16,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.accent,
  },
  resultPercentage: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 16,
  },
  resultMessage: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  retryButton: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backToModulesButton: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backToModulesButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Module5Quiz;
