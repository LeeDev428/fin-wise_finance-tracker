import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../constants/colors';

const Quiz1Selection = ({ navigation }) => {
  const modules = [
    { id: 1, title: 'Module 1: Truth or Myth', icon: '✓✗', description: 'Test your knowledge about financial facts', route: 'Module1Quiz' },
    { id: 2, title: 'Module 2: Emoji Reaction', icon: '😊', description: 'React to income and price situations', route: 'Module2Quiz' },
    { id: 3, title: 'Module 3: Steady or Volatile', icon: '📊', description: 'Identify investment risk levels', route: 'Module3Quiz' },
    { id: 4, title: 'Module 4: Pick the Red Flag', icon: '🚩', description: 'Spot risky loans and traps', route: 'Module4Quiz' },
    { id: 5, title: 'Module 5: Find the Best Deal', icon: '💰', description: 'Calculate and compare discounts', route: 'Module5Quiz' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz #1 - Financial Knowledge</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>Choose a Module</Text>
          <Text style={styles.introText}>
            Complete all 5 modules to master financial knowledge!
          </Text>
        </View>

        {modules.map((module) => (
          <TouchableOpacity
            key={module.id}
            style={styles.moduleCard}
            onPress={() => navigation.navigate(module.route)}
          >
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>{module.icon}</Text>
            </View>
            <View style={styles.moduleInfo}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleDescription}>{module.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
          </TouchableOpacity>
        ))}
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
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
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
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  moduleEmoji: {
    fontSize: 28,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  moduleDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
});

export default Quiz1Selection;
