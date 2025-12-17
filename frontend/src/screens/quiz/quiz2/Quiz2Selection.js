import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';

const Quiz2Selection = ({ navigation }) => {
  const modules = [
    {
      id: 1,
      title: 'Module 1: Goal Matcher',
      description: 'Categorize items by financial goals',
      icon: '🎯',
      screen: 'Quiz2Module1',
    },
    {
      id: 2,
      title: 'Module 2: Emotional Trigger Match-up',
      description: 'Match buying behaviors to emotions',
      icon: '💭',
      screen: 'Quiz2Module2',
    },
    {
      id: 3,
      title: 'Module 3: Your Priorities Gauge',
      description: 'Rank situations by priority',
      icon: '📊',
      screen: 'Quiz2Module3',
    },
    {
      id: 4,
      title: 'Module 4: Spend or Save?',
      description: 'Decide whether to save or spend',
      icon: '💰',
      screen: 'Quiz2Module4',
    },
    {
      id: 5,
      title: 'Module 5: Scam or Not?',
      description: 'Identify scams and legitimate offers',
      icon: '🚨',
      screen: 'Quiz2Module5',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz #2 - Attitude</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>Financial Attitude Quizzes</Text>
        <Text style={styles.description}>
          Test your understanding of financial attitudes and behaviors
        </Text>

        <View style={styles.modulesContainer}>
          {modules.map((module) => (
            <TouchableOpacity
              key={module.id}
              style={styles.moduleCard}
              onPress={() => navigation.navigate(module.screen)}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.moduleIcon}>{module.icon}</Text>
              </View>
              <View style={styles.moduleInfo}>
                <Text style={styles.moduleTitle}>{module.title}</Text>
                <Text style={styles.moduleDescription}>{module.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color={colors.accent} />
            </TouchableOpacity>
          ))}
        </View>
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 10,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
  },
  modulesContainer: {
    gap: 16,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  moduleIcon: {
    fontSize: 24,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});

export default Quiz2Selection;
