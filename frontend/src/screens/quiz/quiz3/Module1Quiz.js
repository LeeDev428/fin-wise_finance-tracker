import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import ApiService from '../../../services/api';

const Module1Quiz = ({ navigation }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [rankings, setRankings] = useState([]);

  const scenarios = [
    {
      id: 1,
      situation: "You spent ₱500 on online shopping and felt stressed.",
      steps: [
        { id: "A", text: "Adjust your savings plan", correctOrder: 2 },
        { id: "B", text: "Check how much money is left", correctOrder: 1 },
        { id: "C", text: "Continue saving instead of giving up", correctOrder: 4 },
        { id: "D", text: "Identify what expense to reduce next time", correctOrder: 3 },
      ],
    },
    {
      id: 2,
      situation: "You missed saving money this week because of extra school expenses.",
      steps: [
        { id: "A", text: "Save a little extra next week", correctOrder: 4 },
        { id: "B", text: "Review why you missed saving", correctOrder: 1 },
        { id: "C", text: "Update your monthly savings goal", correctOrder: 3 },
        { id: "D", text: "Track your expenses", correctOrder: 2 },
      ],
    },
    {
      id: 3,
      situation: "You impulsively bought snacks every day for a week.",
      steps: [
        { id: "A", text: "Cut down snack spending", correctOrder: 4 },
        { id: "B", text: "Accept the mistake and don't panic", correctOrder: 1 },
        { id: "C", text: "Adjust your weekly savings target", correctOrder: 3 },
        { id: "D", text: "Check how much you overspent", correctOrder: 2 },
      ],
    },
    {
      id: 4,
      situation: "Your savings dropped because of an emergency expense.",
      steps: [
        { id: "A", text: "Recalculate how much you need to save", correctOrder: 2 },
        { id: "B", text: "Check your remaining savings", correctOrder: 1 },
        { id: "C", text: "Continue saving with small amounts", correctOrder: 4 },
        { id: "D", text: "Reduce non-essential spending", correctOrder: 3 },
      ],
    },
    {
      id: 5,
      situation: "You feel like quitting because your savings goal feels far.",
      steps: [
        { id: "A", text: "Remind yourself that progress is not perfect", correctOrder: 2 },
        { id: "B", text: "Adjust your goal if needed", correctOrder: 3 },
        { id: "C", text: "Review your current savings", correctOrder: 1 },
        { id: "D", text: "Keep saving consistently", correctOrder: 4 },
      ],
    },
  ];

  const handleRank = (step, rank) => {
    const newRankings = [...rankings];
    const existingIndex = newRankings.findIndex((r) => r.rank === rank);
    
    if (existingIndex >= 0) {
      newRankings[existingIndex] = { stepId: step.id, rank };
    } else {
      newRankings.push({ stepId: step.id, rank });
    }
    
    setRankings(newRankings);
  };

  const handleNext = async () => {
    let scenarioScore = 0;
    const currentSteps = scenarios[currentScenario].steps;
    
    currentSteps.forEach((step) => {
      const userRanking = rankings.find((r) => r.stepId === step.id);
      if (userRanking && userRanking.rank === step.correctOrder) {
        scenarioScore += 1;
      }
    });

    const newScore = score + scenarioScore;
    setScore(newScore);

    if (currentScenario + 1 < scenarios.length) {
      setCurrentScenario(currentScenario + 1);
      setRankings([]);
    } else {
      setShowResult(true);
      try {
        const totalQuestions = scenarios.length * 4;
        const percentage = ((newScore / totalQuestions) * 100).toFixed(0);
        await ApiService.submitQuizResult({
          quizId: 'quiz3-module1',
          quizNumber: 3,
          moduleName: 'The Savings Comeback Game',
          category: 'Behavior',
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

  const getRankForStep = (stepId) => {
    const ranking = rankings.find((r) => r.stepId === stepId);
    return ranking ? ranking.rank : null;
  };

  const isRankingComplete = rankings.length === 4;

  const restartQuiz = () => {
    setCurrentScenario(0);
    setScore(0);
    setShowResult(false);
    setRankings([]);
  };

  if (showResult) {
    const totalQuestions = scenarios.length * 4;
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
            {passed ? 'Great Recovery Skills!' : 'Keep Practicing!'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {totalQuestions}
          </Text>
          <Text style={styles.resultPercentage}>{percentage}%</Text>
          <Text style={styles.resultMessage}>
            {passed
              ? 'You know how to bounce back from spending mistakes!'
              : 'Review the recovery steps and try again.'}
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
        <Text style={styles.headerTitle}>The Savings Comeback Game</Text>
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
          Arrange the steps from 1 (first) to 4 (last):
        </Text>

        <View style={styles.stepsContainer}>
          {scenarios[currentScenario].steps.map((step) => {
            const currentRank = getRankForStep(step.id);
            return (
              <View key={step.id} style={styles.stepRow}>
                <View style={styles.stepTextContainer}>
                  <Text style={styles.stepText}>{step.text}</Text>
                </View>
                <View style={styles.rankButtonsContainer}>
                  {[1, 2, 3, 4].map((rank) => (
                    <TouchableOpacity
                      key={rank}
                      style={[
                        styles.rankButton,
                        currentRank === rank && styles.selectedRankButton,
                      ]}
                      onPress={() => handleRank(step, rank)}
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
  stepsContainer: {
    gap: 12,
  },
  stepRow: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  stepTextContainer: {
    marginBottom: 12,
  },
  stepText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  rankButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rankButton: {
    width: 60,
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

export default Module1Quiz;
