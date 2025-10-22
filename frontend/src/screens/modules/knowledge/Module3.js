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

const Module3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 3</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Inflation 101 – Why Prices Keep Going Up 📈</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand what inflation means</Text>
          <Text style={styles.objective}>2. Learn how inflation affects your money</Text>
          <Text style={styles.objective}>3. Discover ways to protect your savings</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Have you noticed that Piattos used to cost ₱15, but now it's ₱20? 
            That's inflation — prices rising over time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>• What is Inflation?</Text>
          <Text style={styles.paragraph}>
            Inflation is when prices of goods and services go up, which means your money buys "less" than before.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <Text style={styles.paragraph}>
            If you earn 6% interest in your savings but prices rise 10%, your "real" money value decreases.
          </Text>
          <Text style={styles.formula}>Interest rate – Inflation rate = 6% - 10% = -4%</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>• Why It Matters:</Text>
          <Text style={styles.paragraph}>
            Inflation reduces the value of your money. ₱100 today might not buy the same things next year.
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.sectionTitle}>• How to Beat Inflation:</Text>
          <Text style={styles.tip}>- Save in a bank that offers interest.</Text>
          <Text style={styles.tip}>- Avoid keeping all your money in cash.</Text>
          <Text style={styles.tip}>- Invest in things that grow in value (like small business ideas or long-term savings).</Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Inflation means prices rise over time.</Text>
          <Text style={styles.takeaway}>• Money loses value if you don't make it grow.</Text>
          <Text style={styles.takeaway}>• Save and invest early to keep up with inflation.</Text>
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
    marginBottom: 10,
  },
  formula: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#689F38',
    marginBottom: 10,
    textAlign: 'center',
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

export default Module3;
