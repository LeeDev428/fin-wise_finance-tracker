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
    { id: 1, behavior: "Bought snacks even though you already had food at home.", answer: "F" },
    { id: 2, behavior: "Ordered a video game while feeling bored at home.", answer: "H" },
    { id: 3, behavior: "Bought clothes online during a \"24-hour flash sale.\"", answer: "D" },
    { id: 4, behavior: "Bought a new phone case after seeing classmates' cases.", answer: "C" },
    { id: 5, behavior: "Bought a cake to celebrate finishing a project.", answer: "G" },
    { id: 6, behavior: "Bought an ear buds impulsively after seeing an online ads.", answer: "A" },
    { id: 7, behavior: "Bought a snack because you were stressed from exams.", answer: "J" },
    { id: 8, behavior: "Bought a Hirono because you felt lonely at home.", answer: "E" },
    { id: 9, behavior: "Bought an ice cream after winning a school contest.", answer: "B" },
    { id: 10, behavior: "Bought Sonny Angel because you wanted to feel included in your friend group.", answer: "I" },
  ];

  const triggers = [
    { value: "A", label: "Impulse / Advertising Influence" },
    { value: "B", label: "Reward / Achievement" },
    { value: "C", label: "Peer Pressure" },
    { value: "D", label: "FOMO / Panic" },
    { value: "E", label: "Loneliness" },
    { value: "F", label: "Stress" },
    { value: "G", label: "Happiness / Celebration" },
    { value: "H", label: "Boredom" },
    { value: "I", label: "Social Inclusion" },
    { value: "J", label: "Exam Anxiety" },
  ];

  const handleAnswer = async (trigger) => {
    setSelectedAnswer(trigger);
    
    const newScore = trigger === questions[currentQuestion].answer ? score + 1 : score;
    if (trigger === questions[currentQuestion].answer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        try {
          const finalScore = trigger === questions[currentQuestion].answer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz2-module2',
            quizNumber: 2,
            moduleName: 'Emotional Trigger Match-up',
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
            {passed ? 'Great Job!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You understand emotional triggers well!'
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
        <Text style={styles.headerTitle}>Emotional Trigger Match-up</Text>
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
        <Text style={styles.questionNumber}>Behavior {currentQuestion + 1}</Text>
        <View style={styles.behaviorCard}>
          <Text style={styles.behaviorText}>{questions[currentQuestion].behavior}</Text>
        </View>
        <Text style={styles.instruction}>Match to the emotional trigger:</Text>

        <View style={styles.triggersContainer}>
          {triggers.map((trigger) => (
            <TouchableOpacity
              key={trigger.value}
              style={[
                styles.triggerButton,
                selectedAnswer === trigger.value && styles.selectedButton,
                selectedAnswer &&
                  trigger.value === questions[currentQuestion].answer &&
                  styles.correctButton,
                selectedAnswer &&
                  selectedAnswer === trigger.value &&
                  trigger.value !== questions[currentQuestion].answer &&
                  styles.wrongButton,
              ]}
              onPress={() => handleAnswer(trigger.value)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.triggerValue}>{trigger.value}</Text>
              <Text style={styles.triggerLabel}>{trigger.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedAnswer && (
          <View
            style={[
              styles.feedbackContainer,
              selectedAnswer === questions[currentQuestion].answer
                ? styles.correctFeedback
                : styles.incorrectFeedback,
            ]}
          >
            <Text style={styles.feedbackText}>
              {selectedAnswer === questions[currentQuestion].answer
                ? '✓ Correct!'
                : `✗ Wrong! The answer is ${questions[currentQuestion].answer}`}
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
  behaviorCard: {
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
  behaviorText: {
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
  triggersContainer: {
    gap: 10,
  },
  triggerButton: {
    backgroundColor: '#fff',
    padding: 14,
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
  triggerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 12,
    minWidth: 30,
  },
  triggerLabel: {
    fontSize: 14,
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

export default Module2Quiz;
