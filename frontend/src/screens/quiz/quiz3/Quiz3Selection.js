import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';

const Quiz3Selection = ({ navigation }) => {
  const modules = [
    {
      id: 1,
      title: 'The Savings Comeback Game',
      icon: '🔄',
      description: 'Arrange steps to recover from spending mistakes',
      screen: 'Quiz3Module1',
    },
    {
      id: 2,
      title: 'Impulse or Smart?',
      icon: '⚡',
      description: 'Identify impulsive vs smart spending decisions',
      screen: 'Quiz3Module2',
    },
    {
      id: 3,
      title: 'Cut One',
      icon: '✂️',
      description: 'Choose the best expense to cut from budget',
      screen: 'Quiz3Module3',
    },
    {
      id: 4,
      title: 'Digital Safety Match',
      icon: '🔐',
      description: 'Match actions to their consequences',
      screen: 'Quiz3Module4',
    },
    {
      id: 5,
      title: 'Last ₱200',
      icon: '💵',
      description: 'Make responsible budgeting decisions',
      screen: 'Quiz3Module5',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz #3: Financial Behavior</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>Choose a Module</Text>
          <Text style={styles.introText}>
            Complete all 5 modules to master financial behavior!
          </Text>
        </View>

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
              <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
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
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  introCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  introTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  introText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  modulesContainer: {
    gap: 15,
    paddingBottom: 30,
  },
  moduleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
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

export default Quiz3Selection;
