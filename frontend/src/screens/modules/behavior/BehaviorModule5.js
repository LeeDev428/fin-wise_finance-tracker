import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BehaviorModule5 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Behavior Module 5</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Budgeting Basics 💰📝</Text>
        <Text style={styles.subtitle}>Making Every Peso Count</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>• Understand what budgeting means</Text>
          <Text style={styles.objective}>• Learn how to plan your spending</Text>
          <Text style={styles.objective}>• Practice managing your weekly allowance</Text>
          <Text style={styles.objective}>• Avoid overspending</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Have you ever run out of baon before the week ends? 😰
          </Text>
          <Text style={styles.paragraph}>
            That's a sign you might need a better budget plan. Budgeting helps you decide how much to spend and how much to save.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. What is Budgeting?</Text>
          <Text style={styles.paragraph}>
            Budgeting means planning where your money will go — for food, transportation, projects, and savings.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Why It Matters:</Text>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>🎯</Text>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitText}>
                A budget keeps you in control and helps you avoid unnecessary expenses.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. How to Create a Simple Budget:</Text>
          
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>List your weekly allowance and expenses.</Text>
              <Text style={styles.stepDescription}>
                Know exactly how much money you have coming in.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Divide your money into categories.</Text>
              <Text style={styles.stepDescription}>
                Needs, wants, and savings — plan for each one.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Stick to your plan!</Text>
              <Text style={styles.stepDescription}>
                Discipline is key to making your budget work.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>💡 Budget Example:</Text>
          <Text style={styles.exampleIntro}>
            If you get <Text style={styles.highlight}>₱400 a week</Text>, you can budget:
          </Text>

          <View style={styles.budgetBreakdown}>
            <View style={styles.budgetRow}>
              <View style={styles.budgetCategory}>
                <Text style={styles.categoryIcon}>🍱</Text>
                <Text style={styles.categoryName}>Food</Text>
              </View>
              <Text style={styles.budgetAmount}>₱150</Text>
            </View>

            <View style={styles.budgetRow}>
              <View style={styles.budgetCategory}>
                <Text style={styles.categoryIcon}>🚌</Text>
                <Text style={styles.categoryName}>Fare</Text>
              </View>
              <Text style={styles.budgetAmount}>₱100</Text>
            </View>

            <View style={styles.budgetRow}>
              <View style={styles.budgetCategory}>
                <Text style={styles.categoryIcon}>📚</Text>
                <Text style={styles.categoryName}>School Needs</Text>
              </View>
              <Text style={styles.budgetAmount}>₱100</Text>
            </View>

            <View style={styles.budgetRow}>
              <View style={styles.budgetCategory}>
                <Text style={styles.categoryIcon}>🐷</Text>
                <Text style={styles.categoryName}>Savings</Text>
              </View>
              <Text style={styles.budgetAmount}>₱50</Text>
            </View>

            <View style={styles.budgetTotal}>
              <Text style={styles.totalLabel}>TOTAL:</Text>
              <Text style={styles.totalAmount}>₱400</Text>
            </View>
          </View>

          <Text style={styles.exampleNote}>
            💪 That ₱50/week = ₱200/month = ₱2,400/year in savings!
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.tipsTitle}>📌 Budgeting Tips:</Text>
          
          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>✓</Text>
            <Text style={styles.tipText}>Start small — even a simple budget is better than none</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>✓</Text>
            <Text style={styles.tipText}>Be realistic — don't plan ₱0 for fun or treats</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>✓</Text>
            <Text style={styles.tipText}>Adjust as needed — if something isn't working, change it</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>✓</Text>
            <Text style={styles.tipText}>Track daily — review your spending vs your budget</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>✓</Text>
            <Text style={styles.tipText}>Celebrate wins — if you stick to your budget all week, reward yourself (within budget!)</Text>
          </View>
        </View>

        <View style={styles.categoriesBox}>
          <Text style={styles.categoriesTitle}>🗂️ Common Budget Categories:</Text>
          
          <View style={styles.categoryCard}>
            <Text style={styles.catEmoji}>🍽️</Text>
            <Text style={styles.catName}>Needs: Food, Fare, School Supplies</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text style={styles.catEmoji}>🎮</Text>
            <Text style={styles.catName}>Wants: Snacks, Games, Entertainment</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text style={styles.catEmoji}>💰</Text>
            <Text style={styles.catName}>Savings: Emergency fund, Future goals</Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Budgeting helps you manage your money wisely.</Text>
          <Text style={styles.takeaway}>• Stick to your plan to avoid running out of cash.</Text>
          <Text style={styles.takeaway}>• Even small budgets make a big difference.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 10,
  },
  objective: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
    lineHeight: 22,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 10,
  },
  paragraphBold: {
    fontSize: 16,
    color: '#2C3E50',
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  highlightBox: {
    backgroundColor: '#FFF3CD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  benefitCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  benefitIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  benefitContent: {
    flex: 1,
  },
  benefitText: {
    fontSize: 16,
    color: '#1B5E20',
    lineHeight: 24,
    fontWeight: '500',
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
    marginRight: 15,
    width: 35,
    textAlign: 'center',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  exampleBox: {
    backgroundColor: '#F3E5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 10,
  },
  exampleIntro: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  budgetBreakdown: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  budgetCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },
  budgetAmount: {
    fontSize: 16,
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  budgetTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  exampleNote: {
    fontSize: 15,
    color: '#6A1B9A',
    fontWeight: '600',
    lineHeight: 22,
  },
  tipsBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  tipIcon: {
    fontSize: 18,
    color: '#4CAF50',
    marginRight: 10,
    fontWeight: 'bold',
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  categoriesBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 12,
  },
  categoryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  catEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  catName: {
    flex: 1,
    fontSize: 15,
    color: '#0D47A1',
    fontWeight: '500',
  },
  keyTakeawaysBox: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  keyTakeawaysTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  takeaway: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default BehaviorModule5;
