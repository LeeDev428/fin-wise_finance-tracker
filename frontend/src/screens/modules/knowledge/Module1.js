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

const Module1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 1</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Let Your Money Grow! 💰</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. After this module, you will be able to:</Text>
          <Text style={styles.objective}>2. Explain what compound interest means in simple terms.</Text>
          <Text style={styles.objective}>3. Calculate how your savings can grow over time.</Text>
          <Text style={styles.objective}>4. Recognize why saving early helps your money multiply.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Imagine you placed ₱100 in a savings account that gives 10% interest per year.
            If you don't touch it for 5 years, how much will you have? ₱110? ₱150? ₱200?
          </Text>
          <Text style={styles.paragraphBold}>
            Here's the amazing part: your ₱100 can become ₱161—just by staying in your account!
            That's the magic of compound interest—your money earns money for you.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What is Compound Interest?</Text>
          <Text style={styles.paragraph}>
            Compound interest means your money earns interest not just on what you saved, 
            but also on the interest you already earned.
          </Text>
          <Text style={styles.paragraph}>
            Each year, your total balance becomes a little bigger — and that bigger balance 
            earns more interest the next year.
          </Text>
        </View>

        <View style={styles.formulaBox}>
          <Text style={styles.sectionTitle}>Compound Interest Formula</Text>
          <Text style={styles.formula}>A = P(1 + r/n)^(nt)</Text>
          <Text style={styles.formulaDesc}>A = Amount (future value)</Text>
          <Text style={styles.formulaDesc}>P = Principal amount (the amount you started with)</Text>
          <Text style={styles.formulaDesc}>r = annual interest rate</Text>
          <Text style={styles.formulaDesc}>n = amount of times the interest is compounded per time period</Text>
          <Text style={styles.formulaDesc}>t = the amount of time in years</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <Text style={styles.paragraph}>
            You invest ₱100 at 10% annual interest for 5 years, compounded once per year.
          </Text>
          <Text style={styles.formula}>A = 100(1 + 0.10/1)^(1×5)</Text>
          <Text style={styles.formula}>A = 161.05</Text>
          <Text style={styles.paragraphBold}>
            So, after 5 years, your ₱100 becomes ₱161.05 — you earned ₱61.05 in interest!
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.paragraph}>
            💡 Think of your money as a plant. If you plant it (save it), it grows little by little. 
            But if you water it regularly (add savings and let interest grow), it becomes a tree!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips:</Text>
          <Text style={styles.tip}>• Start saving early—even small amounts matter!</Text>
          <Text style={styles.tip}>• The longer your money stays, the faster it grows.</Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Compound interest helps your money grow faster over time.</Text>
          <Text style={styles.takeaway}>• You earn interest on both your savings and your previous interest.</Text>
          <Text style={styles.takeaway}>• The earlier you save, the more powerful your growth becomes.</Text>
          <Text style={styles.takeaway}>• Saving today builds your financial future!</Text>
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
    marginBottom: 20,
    textAlign: 'center',
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
  formulaBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  formula: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
    textAlign: 'center',
  },
  formulaDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  exampleBox: {
    backgroundColor: '#F1F8E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#689F38',
    marginBottom: 10,
  },
  tipsBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  tip: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    lineHeight: 22,
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

export default Module1;
