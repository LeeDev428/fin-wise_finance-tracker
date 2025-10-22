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

const AttitudeModule1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 1</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Mind Over Money: Understanding Your Money Mindset 🧠</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Recognize your beliefs and attitudes about money.</Text>
          <Text style={styles.objective}>2. Investigate how your mindset impacts your spending and saving behaviors.</Text>
          <Text style={styles.objective}>3. Understand steps to build a healthy and responsible money mindset.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Have you ever said, "Bahala na, gastosin ko na lang ngayon"? That's your money mindset speaking!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is a Money Mindset?</Text>
          <Text style={styles.paragraph}>
            Your money mindset is your personal way of thinking and feeling about money.
          </Text>
          <Text style={styles.paragraph}>
            It influences how you earn, spend, save, and even how you feel about being rich or poor.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Types of Money Mindsets</Text>
          
          <View style={styles.mindsetCard}>
            <Text style={styles.mindsetTitle}>1. The Spender – "I deserve this!"</Text>
            <Text style={styles.mindsetDesc}>Enjoys buying things even if they're not needed.</Text>
            <Text style={styles.mindsetStrength}>✅ Strength: Lives in the moment.</Text>
            <Text style={styles.mindsetWeakness}>⚠️ Weakness: May struggle saving for future needs.</Text>
          </View>

          <View style={styles.mindsetCard}>
            <Text style={styles.mindsetTitle}>2. The Saver – "I should save this for later!"</Text>
            <Text style={styles.mindsetDesc}>Careful with money, plans for emergencies.</Text>
            <Text style={styles.mindsetStrength}>✅ Strength: Has financial security.</Text>
            <Text style={styles.mindsetWeakness}>⚠️ Weakness: May avoid enjoying life or helping others occasionally.</Text>
          </View>

          <View style={styles.mindsetCard}>
            <Text style={styles.mindsetTitle}>3. The Money-Avoider – "Money is too stressful."</Text>
            <Text style={styles.mindsetDesc}>Avoids talking or thinking about money.</Text>
            <Text style={styles.mindsetStrength}>✅ Strength: Avoids greed.</Text>
            <Text style={styles.mindsetWeakness}>⚠️ Weakness: May miss opportunities to learn or grow financially.</Text>
          </View>

          <View style={styles.mindsetCard}>
            <Text style={styles.mindsetTitle}>4. The Planner – "Let's budget this out!"</Text>
            <Text style={styles.mindsetDesc}>Thinks ahead, tracks expenses, and sets financial goals.</Text>
            <Text style={styles.mindsetStrength}>✅ Strength: Has balance between saving and spending.</Text>
            <Text style={styles.mindsetWeakness}>⚠️ Weakness: May overthink small spending decisions.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why It Matters</Text>
          <Text style={styles.paragraph}>Having a positive money mindset means:</Text>
          <Text style={styles.tip}>• Making smarter financial choices.</Text>
          <Text style={styles.tip}>• Feeling more in control of your money.</Text>
          <Text style={styles.tip}>• Avoiding guilt and financial stress.</Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Everyone has a unique money mindset.</Text>
          <Text style={styles.takeaway}>• Positive thinking helps build responsible habits.</Text>
          <Text style={styles.takeaway}>• Awareness is the first step to improvement.</Text>
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
  mindsetCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mindsetTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  mindsetDesc: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    lineHeight: 22,
  },
  mindsetStrength: {
    fontSize: 14,
    color: '#2E7D32',
    marginBottom: 4,
  },
  mindsetWeakness: {
    fontSize: 14,
    color: '#F57C00',
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

export default AttitudeModule1;
