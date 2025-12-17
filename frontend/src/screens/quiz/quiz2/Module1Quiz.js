import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
    { id: 1, item: "Pencil and intermediate pad", answer: "Need" },
    { id: 2, item: "Milk tea after school", answer: "Short-Term Want" },
    { id: 3, item: "Saving for a iPhone in 6 months", answer: "Long-Term Goal" },
    { id: 4, item: "Paying for a research material tomorrow", answer: "Need" },
    { id: 5, item: "Buying a new hoodie you saw online", answer: "Short-Term Want" },
    { id: 6, item: "Setting aside money weekly to start a small business", answer: "Long-Term Goal" },
    { id: 7, item: "Buying art materials required for a performance task", answer: "Need" },
    { id: 8, item: "Going to the cinema with friends", answer: "Short-Term Want" },
    { id: 9, item: "Saving for graduation expenses next year", answer: "Long-Term Goal" },
    { id: 10, item: "Buying load for research or school group work", answer: "Need" },
    { id: 11, item: "Upgrading to a more expensive tumbler for style", answer: "Short-Term Want" },
    { id: 12, item: "Saving for a laptop you will use in senior high", answer: "Long-Term Goal" },
    { id: 13, item: "Paying for transportation to school", answer: "Need" },
    { id: 14, item: "Buying accessories for your phone (not required)", answer: "Short-Term Want" },
    { id: 15, item: "Keeping ₱50 daily for a future emergency fund", answer: "Long-Term Goal" },
  ];

  const categories = ["Short-Term Want", "Need", "Long-Term Goal"];

  const handleAnswer = async (category) => {
    setSelectedAnswer(category);
    
    const newScore = category === questions[currentQuestion].answer ? score + 1 : score;
    if (category === questions[currentQuestion].answer) {
      setScore(newScore);
    }

    setTimeout(async () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        try {
          const finalScore = category === questions[currentQuestion].answer ? newScore : score;
          const percentage = ((finalScore / questions.length) * 100).toFixed(0);
          await ApiService.submitQuizResult({
            quizId: 'quiz2-module1',
            quizNumber: 2,
            moduleName: 'Goal Matcher',
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
              ? 'You have a good understanding of financial goals!'
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
        <Text style={styles.headerTitle}>Goal Matcher</Text>
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
        <Text style={styles.questionNumber}>Item {currentQuestion + 1}</Text>
        <Text style={styles.questionText}>{questions[currentQuestion].item}</Text>
        <Text style={styles.instruction}>Tap the correct category:</Text>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedAnswer === category && styles.selectedButton,
                selectedAnswer &&
                  category === questions[currentQuestion].answer &&
                  styles.correctButton,
                selectedAnswer &&
                  selectedAnswer === category &&
                  category !== questions[currentQuestion].answer &&
                  styles.wrongButton,
              ]}
              onPress={() => handleAnswer(category)}
              disabled={selectedAnswer !== null}
            >
              <Text style={[styles.categoryText, selectedAnswer === category && styles.selectedText]}>
                {category === "Short-Term Want" && "🎯 "}
                {category === "Need" && "🛒 "}
                {category === "Long-Term Goal" && "💎 "}
                {category}
              </Text>
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
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  instruction: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
  },
  categoriesContainer: {
    gap: 12,
  },
  categoryButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
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
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  selectedText: {
    color: colors.accent,
    fontWeight: '600',
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

export default Module1Quiz;
