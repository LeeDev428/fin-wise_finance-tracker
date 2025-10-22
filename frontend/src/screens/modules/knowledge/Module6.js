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

const Module6 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 6</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>What's Left After Tax? 💼</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Explain the difference between gross income and net income.</Text>
          <Text style={styles.objective}>2. Identify common deductions such as taxes, SSS, PhilHealth, and Pag-IBIG.</Text>
          <Text style={styles.objective}>3. Appreciate the importance of paying taxes as a responsible citizen.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Imagine you just got your first job after graduation! You earn ₱10,000 for your first month. 
            You're so excited—but when you check your payslip, your take-home pay is only ₱8,800. 
            Where did the ₱1,200 go?
          </Text>
          <Text style={styles.paragraphBold}>
            That's what we call taxes and deductions — a normal part of earning money.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gross vs. Net Income</Text>
          <View style={styles.definitionBox}>
            <Text style={styles.definitionTerm}>Gross Income</Text>
            <Text style={styles.paragraph}>
              The total amount you earn before any deductions.
            </Text>
          </View>
          <View style={styles.definitionBox}>
            <Text style={styles.definitionTerm}>Net Income</Text>
            <Text style={styles.paragraph}>
              The money you actually receive after deductions. Think of gross income as the "whole pizza" 
              and net income as what's left after sharing a few slices for public services like roads, 
              hospitals, and education.
            </Text>
          </View>
        </View>

        <View style={styles.tableBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Gross Income</Text>
            <Text style={styles.tableValue}>₱10,000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Tax (10%)</Text>
            <Text style={styles.tableValue}>₱1,000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>SSS, PhilHealth, Pag-IBIG</Text>
            <Text style={styles.tableValue}>₱200</Text>
          </View>
          <View style={[styles.tableRow, styles.tableTotal]}>
            <Text style={styles.tableLabelBold}>Net Income</Text>
            <Text style={styles.tableValueBold}>₱8,800</Text>
          </View>
          <Text style={styles.paragraph}>So, your take-home pay is ₱8,800.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Taxes Matter</Text>
          <Text style={styles.paragraph}>Taxes help the government provide:</Text>
          <Text style={styles.tip}>• Free education in public schools</Text>
          <Text style={styles.tip}>• Roads, bridges, and street lights</Text>
          <Text style={styles.tip}>• Hospitals and healthcare</Text>
          <Text style={styles.tip}>• Police and fire services</Text>
          <Text style={styles.paragraphBold}>• Paying taxes = helping your country grow.</Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Gross income is your total earnings; net income is what you keep.</Text>
          <Text style={styles.takeaway}>• Taxes fund public services that benefit everyone.</Text>
          <Text style={styles.takeaway}>• Understanding your payslip helps you manage money wisely.</Text>
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
  tableBox: {
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
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#C5E1A5',
  },
  tableTotal: {
    backgroundColor: '#C5E1A5',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 0,
  },
  tableLabel: {
    fontSize: 15,
    color: '#555',
  },
  tableValue: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },
  tableLabelBold: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  tableValueBold: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
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

export default Module6;
