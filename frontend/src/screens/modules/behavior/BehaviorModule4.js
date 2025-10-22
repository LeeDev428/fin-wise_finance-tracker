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

const BehaviorModule4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Behavior Module 4</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Track It! 📊✍️</Text>
        <Text style={styles.subtitle}>Knowing Where Your Money Goes</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>• Understand why tracking expenses matters</Text>
          <Text style={styles.objective}>• Learn simple ways to record daily spending</Text>
          <Text style={styles.objective}>• Use tracking to improve saving habits</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Do you sometimes wonder where your baon disappeared? 🤔
          </Text>
          <Text style={styles.paragraph}>
            Tracking helps you see where your money really goes — snacks, fares, or little things that add up.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. What is Expense Tracking?</Text>
          <Text style={styles.paragraph}>
            It means writing down or recording everything you spend daily.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Why It Matters:</Text>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>👀</Text>
            <Text style={styles.benefitText}>
              You'll see your spending patterns and find areas where you can save.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. How to Track Expenses:</Text>
          
          <View style={styles.stepCard}>
            <Text style={styles.stepIcon}>📓</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Use a notebook or notes app.</Text>
              <Text style={styles.stepDescription}>
                Keep it simple and easy to access anytime.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepIcon}>🌙</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Write your daily spending before sleeping.</Text>
              <Text style={styles.stepDescription}>
                Make it a nightly habit to review your day's expenses.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepIcon}>📅</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Review it weekly to adjust your budget.</Text>
              <Text style={styles.stepDescription}>
                See what's working and what needs to change.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>💡 Real Example:</Text>
          <Text style={styles.exampleText}>
            You realize you spend <Text style={styles.highlight}>₱200 a week</Text> just on milk tea! 🧋
          </Text>
          <Text style={styles.exampleText}>
            By cutting it in half, you can save <Text style={styles.highlight}>₱400 a month</Text>
          </Text>
          <Text style={styles.exampleConclusion}>
            That's ₱4,800 in a year — enough for a new bag or phone accessory! 🎒📱
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.tipsTitle}>📝 Tracking Tips:</Text>
          
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>Be honest — write down EVERYTHING</Text>
          </View>

          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>Include the amount AND what you bought</Text>
          </View>

          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>Don't judge yourself — just observe</Text>
          </View>

          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>Look for patterns (Do you overspend on Fridays?)</Text>
          </View>
        </View>

        <View style={styles.trackingToolsBox}>
          <Text style={styles.toolsTitle}>🛠️ Easy Tracking Tools:</Text>
          
          <View style={styles.toolCard}>
            <Text style={styles.toolEmoji}>📱</Text>
            <Text style={styles.toolName}>Phone Notes App</Text>
          </View>

          <View style={styles.toolCard}>
            <Text style={styles.toolEmoji}>📓</Text>
            <Text style={styles.toolName}>Small Notebook</Text>
          </View>

          <View style={styles.toolCard}>
            <Text style={styles.toolEmoji}>📊</Text>
            <Text style={styles.toolName}>Simple Excel or Google Sheets</Text>
          </View>

          <View style={styles.toolCard}>
            <Text style={styles.toolEmoji}>💳</Text>
            <Text style={styles.toolName}>GCash Transaction History</Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Tracking shows you where your money goes.</Text>
          <Text style={styles.takeaway}>• It helps you find ways to save.</Text>
          <Text style={styles.takeaway}>• Small changes in habits lead to big results.</Text>
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
    fontSize: 28,
    marginRight: 15,
  },
  benefitText: {
    flex: 1,
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
  stepIcon: {
    fontSize: 28,
    marginRight: 12,
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
  exampleText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 8,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  exampleConclusion: {
    fontSize: 15,
    color: '#6A1B9A',
    lineHeight: 22,
    fontWeight: '600',
    marginTop: 5,
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
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipBullet: {
    fontSize: 18,
    color: '#4CAF50',
    marginRight: 10,
    fontWeight: 'bold',
  },
  tipText: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  trackingToolsBox: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  toolsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  toolCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  toolEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  toolName: {
    fontSize: 15,
    color: '#1B5E20',
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

export default BehaviorModule4;
