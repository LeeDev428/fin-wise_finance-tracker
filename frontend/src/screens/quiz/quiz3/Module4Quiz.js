import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module4Quiz = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [matches, setMatches] = useState([]);

  const actions = [
    { id: 1, text: 'Sharing your e-wallet PIN with a friend', correctMatch: 'A' },
    { id: 2, text: 'Logging in only through the official bank or e-wallet app', correctMatch: 'B' },
    { id: 3, text: 'Clicking a link from an unknown source promising "free money"', correctMatch: 'E' },
    { id: 4, text: 'Using "Buy Now, Pay Later" for a non-essential item', correctMatch: 'C' },
    { id: 5, text: 'Checking your transaction history every week', correctMatch: 'D' },
    { id: 6, text: 'Responding to a phishing message pretending to be customer service', correctMatch: 'G' },
    { id: 7, text: 'Only buying what fits your digital budget', correctMatch: 'F' },
  ];

  const consequences = [
    { id: 'A', text: 'Account can get hacked / lose money' },
    { id: 'B', text: 'Safer and secure transactions' },
    { id: 'C', text: 'Can overspend or get into debt' },
    { id: 'D', text: 'Helps you stay on track with your budget' },
    { id: 'E', text: 'Can lose money or get scammed' },
    { id: 'F', text: 'Prevents fraud or unauthorized spending' },
    { id: 'G', text: 'Can expose personal info and fall for scams' },
  ];

  const handleMatch = (actionId, consequenceId) => {
    const newMatches = [...matches];
    const existingIndex = newMatches.findIndex((m) => m.actionId === actionId);
    
    if (existingIndex >= 0) {
      newMatches[existingIndex] = { actionId, consequenceId };
    } else {
      newMatches.push({ actionId, consequenceId });
    }
    
    setMatches(newMatches);
  };

  const getMatchForAction = (actionId) => {
    const match = matches.find((m) => m.actionId === actionId);
    return match ? match.consequenceId : null;
  };

  const isMatchingComplete = matches.length === 7;

  const handleSubmit = async () => {
    let correctMatches = 0;
    
    actions.forEach((action) => {
      const userMatch = matches.find((m) => m.actionId === action.id);
      if (userMatch && userMatch.consequenceId === action.correctMatch) {
        correctMatches += 1;
      }
    });

    setScore(correctMatches);
    setShowResult(true);

    try {
      const percentage = ((correctMatches / actions.length) * 100).toFixed(0);
      await ApiService.submitQuizResult({
        quizId: 'quiz3-module4',
        quizNumber: 3,
        moduleName: 'Digital Safety Match',
        category: 'Behavior',
        score: correctMatches,
        totalQuestions: actions.length,
        percentage: parseFloat(percentage),
        passed: percentage >= 70,
        timeTaken: 0,
      });
    } catch (error) {
      console.error('Error submitting quiz result:', error);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setShowResult(false);
    setMatches([]);
  };

  if (showResult) {
    const percentage = ((score / actions.length) * 100).toFixed(0);
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
            {passed ? 'Digital Safety Pro!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {actions.length}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You understand digital financial safety!'
              : 'Review digital safety concepts and try again.'}
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
        <Text style={styles.headerTitle}>Digital Safety Match</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.instruction}>
          Match each action to its consequence:
        </Text>

        <View style={styles.matchingContainer}>
          {actions.map((action) => {
            const selectedMatch = getMatchForAction(action.id);
            return (
              <View key={action.id} style={styles.actionRow}>
                <View style={styles.actionCard}>
                  <Text style={styles.actionNumber}>{action.id}</Text>
                  <Text style={styles.actionText}>{action.text}</Text>
                </View>

                <View style={styles.consequenceButtons}>
                  {consequences.map((consequence) => (
                    <TouchableOpacity
                      key={consequence.id}
                      style={[
                        styles.consequenceButton,
                        selectedMatch === consequence.id && styles.selectedConsequence,
                      ]}
                      onPress={() => handleMatch(action.id, consequence.id)}
                    >
                      <Text
                        style={[
                          styles.consequenceId,
                          selectedMatch === consequence.id && styles.selectedText,
                        ]}
                      >
                        {consequence.id}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>Consequences:</Text>
          {consequences.map((consequence) => (
            <View key={consequence.id} style={styles.legendItem}>
              <Text style={styles.legendId}>{consequence.id}</Text>
              <Text style={styles.legendText}>{consequence.text}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.submitButton, !isMatchingComplete && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!isMatchingComplete}
        >
          <Text style={styles.submitButtonText}>Submit Answers</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  instruction: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  matchingContainer: {
    gap: 16,
    marginBottom: 30,
  },
  actionRow: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionCard: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  actionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 10,
  },
  actionText: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  consequenceButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  consequenceButton: {
    width: 45,
    height: 40,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedConsequence: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  consequenceId: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  selectedText: {
    color: '#fff',
  },
  legendContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  legendId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 8,
    minWidth: 25,
  },
  legendText: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
  },
  submitButton: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  submitButtonText: {
    color: '#fff',
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
