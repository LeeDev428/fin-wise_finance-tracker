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

const Module9 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 9</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Plan Your Money, Plan Your Future 📝</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Create a personal financial plan.</Text>
          <Text style={styles.objective}>2. Identify short-term and long-term financial goals.</Text>
          <Text style={styles.objective}>3. Learn to track and adjust your plan as life changes.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Do you dream of owning a laptop, traveling abroad, or starting a business?
          </Text>
          <Text style={styles.paragraphBold}>
            All dreams need a financial plan—because a goal without a plan is just a wish.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps in Financial Planning</Text>
          
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1️⃣</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Set Goals</Text>
              <Text style={styles.stepDesc}>What do you want? (e.g., laptop, tuition, travel)</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2️⃣</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Make a Budget</Text>
              <Text style={styles.stepDesc}>How much can you save each month?</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3️⃣</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Save & Invest</Text>
              <Text style={styles.stepDesc}>Where will you grow your money?</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>4️⃣</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Protect Your Money</Text>
              <Text style={styles.stepDesc}>Get insurance and avoid scams.</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>5️⃣</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Review Regularly</Text>
              <Text style={styles.stepDesc}>Adjust your plan as you grow.</Text>
            </View>
          </View>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.paragraph}>
            💡 Remember: A financial plan is like a roadmap. It shows you where you are, 
            where you want to go, and how to get there step by step!
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Planning gives your money purpose.</Text>
          <Text style={styles.takeaway}>• Combine saving, investing, and protection.</Text>
          <Text style={styles.takeaway}>• Review and improve your plan as your life changes.</Text>
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
  stepCard: {
    flexDirection: 'row',
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
  stepNumber: {
    fontSize: 28,
    marginRight: 15,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
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

export default Module9;
