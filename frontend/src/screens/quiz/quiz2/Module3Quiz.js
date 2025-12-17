import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module3Quiz = ({ navigation }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const scenarios = [
    {
      id: 1,
      situation: "You want to go to a concert with friends.",
      items: [
        { id: "A", text: "Check if the ticket fits my current budget.", priority: 1 },
        { id: "B", text: "Find out how much I need to save.", priority: 3 },
        { id: "C", text: "See what I can skip buying this week.", priority: 2 },
        { id: "D", text: "Buy the ticket even if I don't have enough money yet.", priority: 5 },
        { id: "E", text: "Convince myself I 'deserve' it.", priority: 4 },
      ],
    },
    {
      id: 2,
      situation: "Your classmate invites you to a birthday party at a mall.",
      items: [
        { id: "A", text: "Set a spending limit before going.", priority: 1 },
        { id: "B", text: "Separate gift money from personal spending money.", priority: 2 },
        { id: "C", text: "Bring just enough for the gift and snacks.", priority: 3 },
        { id: "D", text: "Ignore my budget and just enjoy the day.", priority: 5 },
        { id: "E", text: "Buy extra stuff because it's a 'special occasion.'", priority: 4 },
      ],
    },
    {
      id: 3,
      situation: "You see your dream shoes on sale for a limited time.",
      items: [
        { id: "A", text: "Check if I really need it or just want it.", priority: 1 },
        { id: "B", text: "Compare the sale price to my savings goal.", priority: 2 },
        { id: "C", text: "Wait 24 hours before deciding.", priority: 3 },
        { id: "D", text: "Buy it now because it might sell out.", priority: 5 },
        { id: "E", text: "Feel FOMO and worry I'll regret not buying.", priority: 4 },
      ],
    },
    {
      id: 4,
      situation: "You want to try a new snack everyone is talking about.",
      items: [
        { id: "A", text: "Check the price and compare it to other snacks.", priority: 1 },
        { id: "B", text: "Decide if I have extra money this week.", priority: 2 },
        { id: "C", text: "Choose only one, not the whole set.", priority: 3 },
        { id: "D", text: "Buy it just to feel included with my friends.", priority: 5 },
        { id: "E", text: "Spend now and worry about money later.", priority: 4 },
      ],
    },
    {
      id: 5,
      situation: "You want to upgrade your phone.",
      items: [
        { id: "A", text: "Assess if my current phone still works fine.", priority: 1 },
        { id: "B", text: "Research cheaper or installment options.", priority: 2 },
        { id: "C", text: "Set a savings timeline for the upgrade.", priority: 3 },
        { id: "D", text: "Buy it now using next month's allowance.", priority: 5 },
        { id: "E", text: "Feel pressured because friends have new phones.", priority: 4 },
      ],
    },
  ];

  const handleRank = (item, rank) => {
    const newRankings = [...rankings];
    const existingIndex = newRankings.findIndex((r) => r.rank === rank);
    
    if (existingIndex >= 0) {
      newRankings[existingIndex] = { itemId: item.id, rank };
    } else {
      newRankings.push({ itemId: item.id, rank });
    }
    
    setRankings(newRankings);
  };

  const handleNext = async () => {
    let scenarioScore = 0;
    const currentItems = scenarios[currentScenario].items;
    
    currentItems.forEach((item) => {
      const userRanking = rankings.find((r) => r.itemId === item.id);
      if (userRanking && userRanking.rank === item.priority) {
        scenarioScore += 1;
      }
    });

    const newScore = score + scenarioScore;
    setScore(newScore);

    if (currentScenario + 1 < scenarios.length) {
      setCurrentScenario(currentScenario + 1);
      setRankings([]);
      setSelectedItem(null);
    } else {
      setShowResult(true);
      try {
        const totalQuestions = scenarios.length * 5;
        const percentage = ((newScore / totalQuestions) * 100).toFixed(0);
        await ApiService.submitQuizResult({
          quizId: 'quiz2-module3',
          quizNumber: 2,
          moduleName: 'Your Priorities Gauge',
          category: 'Attitude',
          score: newScore,
          totalQuestions: totalQuestions,
          percentage: parseFloat(percentage),
          passed: percentage >= 70,
          timeTaken: 0,
        });
      } catch (error) {
        console.error('Error submitting quiz result:', error);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentScenario(0);
    setScore(0);
    setShowResult(false);
    setRankings([]);
    setSelectedItem(null);
  };

  const getRankForItem = (itemId) => {
    const ranking = rankings.find((r) => r.itemId === itemId);
    return ranking ? ranking.rank : null;
  };

  const isRankingComplete = rankings.length === 5;

  if (showResult) {
    const totalQuestions = scenarios.length * 5;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
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
            {passed ? 'Excellent Priorities!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {totalQuestions}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You understand financial priorities well!'
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
        <Text style={styles.headerTitle}>Your Priorities Gauge</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentScenario + 1) / scenarios.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {currentScenario + 1} / {scenarios.length}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.scenarioNumber}>Scenario {currentScenario + 1}</Text>
        <View style={styles.situationCard}>
          <Text style={styles.situationText}>
            {scenarios[currentScenario].situation}
          </Text>
        </View>

        <Text style={styles.instruction}>
          Rank from 1 (highest priority) to 5 (lowest priority):
        </Text>

        <View style={styles.itemsContainer}>
          {scenarios[currentScenario].items.map((item) => {
            const currentRank = getRankForItem(item.id);
            return (
              <View key={item.id} style={styles.itemRow}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemId}>{item.id}</Text>
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
                <View style={styles.rankButtonsContainer}>
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <TouchableOpacity
                      key={rank}
                      style={[
                        styles.rankButton,
                        currentRank === rank && styles.selectedRankButton,
                      ]}
                      onPress={() => handleRank(item, rank)}
                    >
                      <Text
                        style={[
                          styles.rankButtonText,
                          currentRank === rank && styles.selectedRankButtonText,
                        ]}
                      >
                        {rank}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.nextButton, !isRankingComplete && styles.disabledButton]}
          onPress={handleNext}
          disabled={!isRankingComplete}
        >
          <Text style={styles.nextButtonText}>
            {currentScenario + 1 === scenarios.length ? 'Finish' : 'Next Scenario'}
          </Text>
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
  scenarioNumber: {
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
  itemsContainer: {
    gap: 12,
  },
  itemRow: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  itemTextContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  itemId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  rankButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rankButton: {
    width: 50,
    height: 40,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedRankButton: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  rankButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  selectedRankButtonText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  nextButtonText: {
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

export default Module3Quiz;
