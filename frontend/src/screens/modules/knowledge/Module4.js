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

const Module4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 4</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Earning More but Getting Less? 💸</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand the difference between real and nominal income.</Text>
          <Text style={styles.objective}>2. Explain why earning more doesn't always mean being richer.</Text>
          <Text style={styles.objective}>3. Recognize how inflation affects your purchasing power.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            If your salary doubles but prices also double, are you richer?
          </Text>
          <Text style={styles.paragraphBold}>
            Not really. You earn more money, but everything costs more too!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nominal vs Real Income</Text>
          <View style={styles.definitionBox}>
            <Text style={styles.definitionTerm}>Nominal Income:</Text>
            <Text style={styles.paragraph}>The actual money you receive.</Text>
          </View>
          <View style={styles.definitionBox}>
            <Text style={styles.definitionTerm}>Real Income:</Text>
            <Text style={styles.paragraph}>The amount of goods and services your money can buy.</Text>
          </View>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <Text style={styles.paragraph}>
            If your allowance goes from ₱100 to ₱200, but food prices also double, 
            you can still only buy the same amount.
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.sectionTitle}>💡 Tip:</Text>
          <Text style={styles.paragraph}>
            Track your expenses and see how inflation affects your budget.
          </Text>
          <Text style={styles.paragraph}>
            Being "richer" means maintaining or increasing your real income, 
            not just the amount you earn.
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Real income shows your true purchasing power.</Text>
          <Text style={styles.takeaway}>• Inflation can cancel out higher income.</Text>
          <Text style={styles.takeaway}>• Spend and save wisely to maintain your real value.</Text>
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
  definitionBox: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  definitionTerm: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 5,
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

export default Module4;
