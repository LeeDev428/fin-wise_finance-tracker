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

const Module5 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 5</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>The Best Place for Your Money 🏦</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand the difference between savings and investments.</Text>
          <Text style={styles.objective}>2. Identify which assets usually earn more in the long run.</Text>
          <Text style={styles.objective}>3. Learn why higher returns often come with higher risk.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Where should you put your money—savings account or stocks?
          </Text>
          <Text style={styles.paragraphBold}>
            Both are good, but they have different purposes and results.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Savings vs Investments:</Text>
          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>💰 Savings:</Text>
            <Text style={styles.paragraph}>Safe, but grows slowly (low return).</Text>
          </View>
          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>📊 Investments (like stocks):</Text>
            <Text style={styles.paragraph}>Higher risk, but higher potential profit.</Text>
          </View>
          <Text style={styles.paragraph}>
            Over a long period, investments generally earn more—but may fluctuate in value.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <View style={styles.exampleItem}>
            <Text style={styles.paragraph}>
              If you save ₱1,000 in a bank at 2%, you earn ₱20 a year.
            </Text>
          </View>
          <View style={styles.exampleItem}>
            <Text style={styles.paragraph}>
              If you invest ₱1,000 in a stock that grows 10% a year, you earn ₱100—but it could also go down.
            </Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Savings are safe but slow to grow.</Text>
          <Text style={styles.takeaway}>• Investments can earn more but carry more risk.</Text>
          <Text style={styles.takeaway}>• Choose where to put your money based on your goals and timeline.</Text>
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
  comparisonBox: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  comparisonTitle: {
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
  exampleItem: {
    marginBottom: 10,
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

export default Module5;
