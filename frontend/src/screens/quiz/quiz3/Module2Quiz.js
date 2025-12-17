import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
    {
      id: 1,
      situation: 'You buy snacks because there is a "Buy 2 Take 1" sign, even though snacks were not on your list.',
      correctAnswer: 'IMPULSE',
    },
    {
      id: 2,
      situation: 'You see a ₱99 phone case online but decide to wait 24 hours before buying.',
      correctAnswer: 'SMART',
    },
    {
      id: 3,
      situation: 'You purchase a jacket because all your friends bought one, even though you already have jackets at home.',
      correctAnswer: 'IMPULSE',
    },
    {
      id: 4,
      situation: 'You compare prices in two stores before buying school supplies.',
      correctAnswer: 'SMART',
    },
    {
      id: 5,
      situation: 'You buy an item just because there is a countdown timer saying "Last 5 minutes!"',
      correctAnswer: 'IMPULSE',
    },
    {
      id: 6,
      situation: 'You stick to your shopping list even when you see discounted items you don\'t need.',
      correctAnswer: 'SMART',
    },
    {
      id: 7,
      situation: 'You order food online because you feel bored, not hungry.',
      correctAnswer: 'IMPULSE',
    },
    {
      id: 8,
      situation: 'You choose to buy only what you budgeted for and skip extra items.',
      correctAnswer: 'SMART',
    },
    {
      id: 9,
      situation: 'You buy a trendy accessory immediately because it\'s going viral on social media.',
      correctAnswer: 'IMPULSE',
    },
    {
      id: 10,
      situation: 'You think about whether an item is a need or want before buying it.',
      correctAnswer: 'SMART',
    },
  ];

  const handleAnswer = async (answer) => {
    setSelectedAnswer(answer);
    
    const newScore = answer === questions[currentQuestion].correctAnswer ? score + 1 : score;
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        try {
          const finalScore = answer === questions[currentQuestion].correctAnswer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz3-module2',
            quizNumber: 3,
            moduleName: 'Impulse or Smart?',
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
            {passed ? 'Smart Shopper!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You can identify impulse vs smart decisions!'
              : 'Review the concepts and try again.'}
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
        <Text style={styles.headerTitle}>Impulse or Smart?</Text>
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
        <Text style={styles.questionNumber}>Situation {currentQuestion + 1}</Text>
        <View style={styles.situationCard}>
          <Text style={styles.situationText}>
            {questions[currentQuestion].situation}
          </Text>
        </View>

        <Text style={styles.instruction}>Is this impulse or smart spending?</Text>

        <View style={styles.choicesContainer}>
          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.impulseButton,
              selectedAnswer === 'IMPULSE' && styles.selectedButton,
              selectedAnswer &&
                'IMPULSE' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'IMPULSE' &&
                'IMPULSE' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('IMPULSE')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>⚡</Text>
            <Text style={styles.choiceText}>IMPULSE</Text>
            <Text style={styles.choiceSubtext}>Emotional spending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.smartButton,
              selectedAnswer === 'SMART' && styles.selectedButton,
              selectedAnswer &&
                'SMART' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'SMART' &&
                'SMART' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('SMART')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>🧠</Text>
            <Text style={styles.choiceText}>SMART</Text>
            <Text style={styles.choiceSubtext}>Thoughtful decision</Text>
          </TouchableOpacity>
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
                ? '✓ Correct!'
                : `✗ Wrong! This is ${questions[currentQuestion].correctAnswer}`}
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
  questionNumber: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 20,
  },
  situationCard: {
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
  situationText: {
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
  choicesContainer: {
    gap: 16,
  },
  choiceButton: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#E0E0E0',
  },
  impulseButton: {
    backgroundColor: '#FFEBEE',
  },
  smartButton: {
    backgroundColor: '#E8F5E9',
  },
  selectedButton: {
    borderColor: colors.accent,
  },
  correctButton: {
    borderColor: '#4CAF50',
    backgroundColor: '#C8E6C9',
  },
  wrongButton: {
    borderColor: '#F44336',
    backgroundColor: '#FFCDD2',
  },
  choiceEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  choiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  choiceSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
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

export default Module2Quiz;
