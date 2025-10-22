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

const Module8 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 8</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Don't Put All Your Eggs in One Basket 🥚</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Explain what financial risk means.</Text>
          <Text style={styles.objective}>2. Understand why diversification reduces risk.</Text>
          <Text style={styles.objective}>3. Identify safe and risky investment options.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Have you ever heard the saying, "Don't put all your eggs in one basket"? 
            If you drop the basket, you lose all your eggs.
          </Text>
          <Text style={styles.paragraphBold}>
            The same goes for money—if you invest it all in one place and it fails, you lose everything.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Risk?</Text>
          <Text style={styles.paragraph}>
            Risk is the chance that your investment may lose money. No investment is 100% safe, 
            but risk can be managed.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diversification</Text>
          <Text style={styles.paragraph}>
            Diversification means spreading your money across different investments so one loss 
            doesn't ruin everything.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example: You have ₱10,000</Text>
          
          <View style={styles.optionBox}>
            <Text style={styles.optionTitle}>❌ Option A: High Risk!</Text>
            <Text style={styles.paragraph}>
              Put all ₱10,000 in one small business.
            </Text>
          </View>

          <View style={styles.optionBox}>
            <Text style={styles.optionTitle}>✅ Option B: Diversified!</Text>
            <Text style={styles.paragraph}>Split it:</Text>
            <Text style={styles.splitItem}>• ₱4,000 savings account</Text>
            <Text style={styles.splitItem}>• ₱3,000 mutual fund</Text>
            <Text style={styles.splitItem}>• ₱3,000 small business</Text>
            <Text style={styles.paragraphBold}>
              If one fails, others can cover your loss.
            </Text>
          </View>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.paragraph}>
            💡 Think of it like this: If you carry all your money in one pocket and that pocket gets 
            a hole, you lose everything. But if you spread it across different pockets, you're safer!
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Every investment involves risk.</Text>
          <Text style={styles.takeaway}>• Diversify your money to stay safe.</Text>
          <Text style={styles.takeaway}>• Balance your goals: safety, growth, and security.</Text>
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
    marginBottom: 15,
  },
  optionBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#C5E1A5',
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#689F38',
    marginBottom: 8,
  },
  splitItem: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
    marginLeft: 10,
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

export default Module8;
