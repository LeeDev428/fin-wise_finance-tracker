import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
      scenario: "Your friends are going to a concert. You already spent your weekly budget.",
      correctAnswer: "SAVE",
    },
    {
      id: 2,
      scenario: "You need a notebook for school. You have extra allowance this week.",
      correctAnswer: "SPEND",
    },
    {
      id: 3,
      scenario: "Your crush invites you to a café. You're saving up for a new gadget.",
      correctAnswer: "SAVE",
    },
    {
      id: 4,
      scenario: "Your friend asks you to chip in for a group gift for a classmate's birthday. It's affordable.",
      correctAnswer: "SPEND",
    },
    {
      id: 5,
      scenario: "There's a flash sale on your favorite snacks, but you already have food at home.",
      correctAnswer: "SAVE",
    },
    {
      id: 6,
      scenario: "You broke your pen. You need to buy a new one for your class tomorrow.",
      correctAnswer: "SPEND",
    },
    {
      id: 7,
      scenario: "Everyone is buying matching shirts for a school event, but it's optional.",
      correctAnswer: "SAVE",
    },
    {
      id: 8,
      scenario: "You're invited to lunch with friends. You have extra money and haven't gone out in a while.",
      correctAnswer: "SPEND",
    },
    {
      id: 9,
      scenario: "A new phone game is trending. Your current phone works fine, but you feel FOMO.",
      correctAnswer: "SAVE",
    },
    {
      id: 10,
      scenario: "Your shoes are falling apart and you need new ones for P.E. class.",
      correctAnswer: "SPEND",
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
            quizId: 'quiz2-module4',
            quizNumber: 2,
            moduleName: 'Spend or Save?',
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
            {passed ? 'Smart Decisions!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You know when to spend and save!'
              : 'Review the concepts and try again.'}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.retryButton} onPress={restartQuiz}>
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backToModulesButton}
              onPress={() => navigation.navigate('Quiz2Selection')}
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
        <Text style={styles.headerTitle}>Spend or Save?</Text>
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
        <Text style={styles.questionNumber}>Scenario {currentQuestion + 1}</Text>
        <View style={styles.scenarioCard}>
          <Text style={styles.scenarioText}>
            {questions[currentQuestion].scenario}
          </Text>
        </View>

        <Text style={styles.instruction}>What would you do?</Text>

        <View style={styles.choicesContainer}>
          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.saveButton,
              selectedAnswer === 'SAVE' && styles.selectedButton,
              selectedAnswer &&
                'SAVE' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'SAVE' &&
                'SAVE' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('SAVE')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>💰</Text>
            <Text style={styles.choiceText}>SAVE</Text>
            <Text style={styles.choiceSubtext}>Hold on to my money</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.spendButton,
              selectedAnswer === 'SPEND' && styles.selectedButton,
              selectedAnswer &&
                'SPEND' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'SPEND' &&
                'SPEND' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('SPEND')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>🛍️</Text>
            <Text style={styles.choiceText}>SPEND</Text>
            <Text style={styles.choiceSubtext}>Go for it</Text>
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
                ? '✓ Correct Decision!'
                : `✗ Wrong! You should ${questions[currentQuestion].correctAnswer}`}
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
  saveButton: {
    backgroundColor: '#E8F5E9',
  },
  spendButton: {
    backgroundColor: '#FFF3E0',
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

export default Module4Quiz;
