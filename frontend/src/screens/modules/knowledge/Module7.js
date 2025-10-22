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

const Module7 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 7</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Protect What You Earn 🛡️</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Define insurance and its purpose.</Text>
          <Text style={styles.objective}>2. Identify different types of insurance.</Text>
          <Text style={styles.objective}>3. Understand why insurance is part of financial security.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Imagine this: You just bought your dream phone for ₱15,000. After a week, it's stolen. 
            What if there was a way to get a new one without paying the full price again?
          </Text>
          <Text style={styles.paragraphBold}>
            That's where insurance steps in—it helps you protect what you worked hard for.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Insurance?</Text>
          <Text style={styles.paragraph}>
            Insurance is an agreement that protects you from financial loss. You pay a small amount 
            regularly (called a premium). In return, the insurance company helps cover costs if 
            something bad happens.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Types of Insurance</Text>
          
          <View style={styles.insuranceCard}>
            <Text style={styles.insuranceTitle}>💙 Life Insurance</Text>
            <Text style={styles.insuranceDesc}>• Helps your family if something happens to you.</Text>
            <Text style={styles.insuranceDesc}>• Your family receives money to continue living.</Text>
          </View>

          <View style={styles.insuranceCard}>
            <Text style={styles.insuranceTitle}>🏥 Health Insurance</Text>
            <Text style={styles.insuranceDesc}>• Pays for hospital bills.</Text>
            <Text style={styles.insuranceDesc}>• PhilHealth covers part of your surgery cost.</Text>
          </View>

          <View style={styles.insuranceCard}>
            <Text style={styles.insuranceTitle}>🏠 Property Insurance</Text>
            <Text style={styles.insuranceDesc}>• Protects houses, vehicles, or gadgets.</Text>
            <Text style={styles.insuranceDesc}>• Insurance replaces your stolen phone.</Text>
          </View>

          <View style={styles.insuranceCard}>
            <Text style={styles.insuranceTitle}>🎓 Education Insurance</Text>
            <Text style={styles.insuranceDesc}>• Helps fund future schooling.</Text>
            <Text style={styles.insuranceDesc}>• Parents save early for college tuition.</Text>
          </View>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Example:</Text>
          <Text style={styles.paragraph}>
            If you pay ₱1,000 a year for insurance and your ₱10,000 laptop is stolen, 
            the insurance company may cover the full cost or part of it.
          </Text>
          <Text style={styles.paragraphBold}>
            Without insurance, you lose everything.
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Insurance protects you from big financial losses.</Text>
          <Text style={styles.takeaway}>• Paying small premiums can save you from future stress.</Text>
          <Text style={styles.takeaway}>• Being insured means being financially prepared.</Text>
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
  insuranceCard: {
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
  insuranceTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  insuranceDesc: {
    fontSize: 15,
    color: '#555',
    marginBottom: 4,
    lineHeight: 22,
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

export default Module7;
