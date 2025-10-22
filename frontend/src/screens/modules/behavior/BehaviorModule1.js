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

const BehaviorModule1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Behavior Module 1</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Mind Your Money Moves 💰🧠</Text>
        <Text style={styles.subtitle}>Building Healthy Spending Habits and Smart Financial Decisions</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand what financial behavior means and why it matters.</Text>
          <Text style={styles.objective}>2. Develop healthy spending habits that align with your goals.</Text>
          <Text style={styles.objective}>3. Learn how to track your expenses and make smart financial decisions.</Text>
          <Text style={styles.objective}>4. Set short- and long-term financial goals for your future.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Have you ever wondered where your money goes at the end of the week? One moment you have ₱500, and the next, you're down to loose coins with no idea how it happened.
          </Text>
          <Text style={styles.paragraphBold}>
            This is what happens when we spend without awareness. The good news? You can train yourself to take charge of your money — not the other way around.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Financial Behavior?</Text>
          <Text style={styles.paragraph}>
            Financial behavior is how you use and manage your money — how you spend, save, and make decisions.
          </Text>
          <Text style={styles.paragraph}>
            Your behavior can either bring you closer to your goals or hold you back.
          </Text>
          <Text style={styles.paragraphBold}>
            Developing positive money habits means being mindful of every peso you earn and spend.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Building Healthy Spending Habits</Text>
          <Text style={styles.paragraph}>
            Healthy spending habits mean knowing where your money goes and making choices that support your priorities.
          </Text>
          <Text style={styles.paragraphBold}>Try these simple habits:</Text>
          
          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>📝</Text>
            <Text style={styles.habitText}>Plan before you spend. Ask yourself if it's a need or want.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>⏸️</Text>
            <Text style={styles.habitText}>Avoid impulse buying. Wait a day before purchasing non-essentials.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>💳</Text>
            <Text style={styles.habitText}>Use cash or e-wallet wisely. Keep your spending visible and trackable.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>🎉</Text>
            <Text style={styles.habitText}>Celebrate small savings. Even ₱50 saved matters!</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Tracking Expenses and Budgeting</Text>
          <Text style={styles.paragraph}>
            Tracking means recording where your money goes — whether through a notebook, notes app, or expense tracker.
          </Text>
          <Text style={styles.paragraphBold}>Simple steps to track effectively:</Text>
          
          <View style={styles.stepBox}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepText}>Write down your income (allowance, gifts, or small earnings).</Text>
          </View>

          <View style={styles.stepBox}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Record all your spending, even small ones.</Text>
          </View>

          <View style={styles.stepBox}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>Review weekly — are you overspending or saving well?</Text>
          </View>

          <Text style={styles.paragraphBold}>
            That's budgeting — planning how to use your money smartly.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Setting Financial Goals</Text>
          <Text style={styles.paragraph}>
            Financial goals give direction to your spending and saving habits.
          </Text>
          <Text style={styles.paragraphBold}>Two types:</Text>
          
          <View style={styles.goalCard}>
            <Text style={styles.goalType}>🎯 Short-term goals (1–6 months):</Text>
            <Text style={styles.goalExample}>Buying school materials, paying for a class trip, saving for a gift.</Text>
          </View>

          <View style={styles.goalCard}>
            <Text style={styles.goalType}>🚀 Long-term goals (6 months or more):</Text>
            <Text style={styles.goalExample}>Saving for college, a laptop, or a small business.</Text>
          </View>
        </View>

        <View style={styles.smartBox}>
          <Text style={styles.smartTitle}>💡 SMART Goals Example:</Text>
          <Text style={styles.smartGoal}>
            "I will save ₱2,000 in 4 months by setting aside ₱125 every week."
          </Text>
          <Text style={styles.smartExplanation}>
            This goal is Specific, Measurable, Achievable, Relevant, and Time-bound.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Making Smart Financial Decisions</Text>
          <Text style={styles.paragraph}>
            Smart financial choices come from thinking before acting.
          </Text>
          <Text style={styles.paragraphBold}>Ask yourself before spending:</Text>
          
          <View style={styles.questionBox}>
            <Text style={styles.question}>❓ Do I really need this?</Text>
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>❓ Will it make my life better in the long run?</Text>
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>❓ Can I afford it without hurting my savings?</Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>1. Financial behavior is how you manage your money through daily habits and decisions.</Text>
          <Text style={styles.takeaway}>2. Healthy spending habits help you avoid overspending and reach your goals faster.</Text>
          <Text style={styles.takeaway}>3. Tracking your expenses helps you see where your money truly goes.</Text>
          <Text style={styles.takeaway}>4. Setting SMART goals and making mindful decisions build long-term financial success.</Text>
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
  habitCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  habitIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  habitText: {
    flex: 1,
    fontSize: 15,
    color: '#1B5E20',
    lineHeight: 22,
  },
  stepBox: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
    marginRight: 12,
    width: 30,
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    color: '#0D47A1',
    lineHeight: 22,
  },
  goalCard: {
    backgroundColor: '#F3E5F5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  goalType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 5,
  },
  goalExample: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  smartBox: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  smartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  smartGoal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B5E20',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  smartExplanation: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  questionBox: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#FF9800',
  },
  question: {
    fontSize: 15,
    color: '#E65100',
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
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default BehaviorModule1;
