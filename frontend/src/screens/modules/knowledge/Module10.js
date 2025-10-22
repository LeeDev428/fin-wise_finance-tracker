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

const Module10 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 10</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Be a Smart Consumer! 🛒</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Know your rights and responsibilities as a consumer.</Text>
          <Text style={styles.objective}>2. Identify common scams and fraud.</Text>
          <Text style={styles.objective}>3. Practice smart, safe, and ethical financial behavior.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Have you ever seen "Congratulations! You won ₱10,000! Just send your account number"?
          </Text>
          <Text style={styles.paragraphBold}>
            That's a scam. Being financially smart also means being financially safe.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consumer Rights</Text>
          <Text style={styles.paragraph}>
            The Department of Trade and Industry (DTI) protects consumers. Your basic rights include:
          </Text>
          
          <View style={styles.rightCard}>
            <Text style={styles.rightIcon}>🛡️</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightTitle}>Right to Safety</Text>
              <Text style={styles.rightDesc}>Products must not harm you.</Text>
            </View>
          </View>

          <View style={styles.rightCard}>
            <Text style={styles.rightIcon}>ℹ️</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightTitle}>Right to Information</Text>
              <Text style={styles.rightDesc}>You deserve correct details about products.</Text>
            </View>
          </View>

          <View style={styles.rightCard}>
            <Text style={styles.rightIcon}>✅</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightTitle}>Right to Choose</Text>
              <Text style={styles.rightDesc}>You can select from many options.</Text>
            </View>
          </View>

          <View style={styles.rightCard}>
            <Text style={styles.rightIcon}>📢</Text>
            <View style={styles.rightContent}>
              <Text style={styles.rightTitle}>Right to be Heard</Text>
              <Text style={styles.rightDesc}>You can file complaints.</Text>
            </View>
          </View>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.sectionTitle}>⚠️ Avoiding Scams</Text>
          <Text style={styles.warningItem}>❌ Don't share passwords, PINs, or OTPs.</Text>
          <Text style={styles.warningItem}>✓ Check official company pages and emails.</Text>
          <Text style={styles.warningItem}>❌ Be cautious with "too good to be true" deals.</Text>
          <Text style={styles.warningItem}>✓ Verify links before clicking or paying online.</Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.paragraph}>
            🔒 Remember: Legitimate companies will NEVER ask for your password or OTP via 
            text, email, or call. When in doubt, contact the company directly using their 
            official website or phone number.
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Be an informed and responsible consumer.</Text>
          <Text style={styles.takeaway}>• Protect personal and financial information.</Text>
          <Text style={styles.takeaway}>• Think before you click, buy, or invest.</Text>
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
  rightCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  rightIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  rightContent: {
    flex: 1,
  },
  rightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 3,
  },
  rightDesc: {
    fontSize: 14,
    color: '#555',
  },
  warningBox: {
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#EF5350',
  },
  warningItem: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    lineHeight: 22,
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

export default Module10;
