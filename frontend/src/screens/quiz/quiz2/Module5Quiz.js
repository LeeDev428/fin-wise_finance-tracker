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
      situation: "A text message says you won ₱50,000. Click the link to claim it now!",
      correctAnswer: "SCAM",
    },
    {
      id: 2,
      situation: "An unknown number calls, pretending to be your bank. They ask for your PIN.",
      correctAnswer: "SCAM",
    },
    {
      id: 3,
      situation: "Your school posts an official announcement on their verified Facebook page about enrollment.",
      correctAnswer: "NOT A SCAM",
    },
    {
      id: 4,
      situation: "Someone you don't know offers you easy money if you share your GCash account.",
      correctAnswer: "SCAM",
    },
    {
      id: 5,
      situation: "A well-known brand sends you an order confirmation email after you purchased online.",
      correctAnswer: "NOT A SCAM",
    },
    {
      id: 6,
      situation: "You receive a message: \"Your account will be locked unless you verify your details NOW.\"",
      correctAnswer: "SCAM",
    },
    {
      id: 7,
      situation: "Your friend sends you a link via Messenger. You confirm it's really them before clicking.",
      correctAnswer: "NOT A SCAM",
    },
    {
      id: 8,
      situation: "An online seller asks you to pay through a personal account and promises a discount. No receipt, no seller info.",
      correctAnswer: "SCAM",
    },
    {
      id: 9,
      situation: "A government agency sends you an official letter about a scholarship program you applied for.",
      correctAnswer: "NOT A SCAM",
    },
    {
      id: 10,
      situation: "Someone on social media offers investment opportunities with guaranteed 500% profit in one week.",
      correctAnswer: "SCAM",
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
            quizId: 'quiz2-module5',
            quizNumber: 2,
            moduleName: 'Scam or Not?',
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
            {passed ? 'Scam Detector!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You can spot scams effectively!'
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
        <Text style={styles.headerTitle}>Scam or Not?</Text>
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

        <Text style={styles.instruction}>Is this a scam?</Text>

        <View style={styles.choicesContainer}>
          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.scamButton,
              selectedAnswer === 'SCAM' && styles.selectedButton,
              selectedAnswer &&
                'SCAM' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'SCAM' &&
                'SCAM' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('SCAM')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>🚨</Text>
            <Text style={styles.choiceText}>SCAM</Text>
            <Text style={styles.choiceSubtext}>Don\'t trust it</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.choiceButton,
              styles.notScamButton,
              selectedAnswer === 'NOT A SCAM' && styles.selectedButton,
              selectedAnswer &&
                'NOT A SCAM' === questions[currentQuestion].correctAnswer &&
                styles.correctButton,
              selectedAnswer &&
                selectedAnswer === 'NOT A SCAM' &&
                'NOT A SCAM' !== questions[currentQuestion].correctAnswer &&
                styles.wrongButton,
            ]}
            onPress={() => handleAnswer('NOT A SCAM')}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.choiceEmoji}>✅</Text>
            <Text style={styles.choiceText}>NOT A SCAM</Text>
            <Text style={styles.choiceSubtext}>Looks legit</Text>
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
                : `✗ Wrong! It's actually ${questions[currentQuestion].correctAnswer}`}
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
  scamButton: {
    backgroundColor: '#FFEBEE',
  },
  notScamButton: {
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

export default Module5Quiz;
