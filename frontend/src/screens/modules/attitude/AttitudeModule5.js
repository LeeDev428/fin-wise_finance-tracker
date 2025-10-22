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

const AttitudeModule5 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 5</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Peer Pressure and Peso 👥💵</Text>
        <Text style={styles.subtitle}>Staying True to Your Goals</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Recognize how peer pressure affects financial decisions.</Text>
          <Text style={styles.objective}>2. Learn to make independent money choices.</Text>
          <Text style={styles.objective}>3. Gain confidence in saying "no" to unnecessary spending.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Your friends want to hang out in Jollibee, but you're saving for a phone. What now?
          </Text>
          <Text style={styles.paragraph}>
            Peer pressure can easily derail your goals — but awareness can help.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Peer Pressure Spending?</Text>
          <Text style={styles.paragraph}>
            Spending money just to fit in, even if it goes against your financial plans.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consequences</Text>
          
          <View style={styles.consequenceCard}>
            <Text style={styles.consequenceIcon}>⚠️</Text>
            <Text style={styles.consequenceText}>Overspending</Text>
          </View>

          <View style={styles.consequenceCard}>
            <Text style={styles.consequenceIcon}>😔</Text>
            <Text style={styles.consequenceText}>Guilt and regret</Text>
          </View>

          <View style={styles.consequenceCard}>
            <Text style={styles.consequenceIcon}>🎯</Text>
            <Text style={styles.consequenceText}>Delayed goals</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Smart Responses</Text>
          
          <View style={styles.responseCard}>
            <Text style={styles.responseNumber}>✓</Text>
            <Text style={styles.responseText}>
              Say "Next time!" politely.
            </Text>
          </View>

          <View style={styles.responseCard}>
            <Text style={styles.responseNumber}>✓</Text>
            <Text style={styles.responseText}>
              Suggest budget-friendly alternatives.
            </Text>
          </View>

          <View style={styles.responseCard}>
            <Text style={styles.responseNumber}>✓</Text>
            <Text style={styles.responseText}>
              Communicate your goals — real friends will understand.
            </Text>
          </View>
        </View>

        <View style={styles.motivationBox}>
          <Text style={styles.motivationText}>
            💪 Remember: Your financial goals are more important than temporary peer pressure. 
            Real friends will respect your decisions and support your dreams!
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Peer pressure can affect your money mindset.</Text>
          <Text style={styles.takeaway}>• Self-confidence protects your savings.</Text>
          <Text style={styles.takeaway}>• True friends respect your financial boundaries.</Text>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
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
  consequenceCard: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  consequenceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  consequenceText: {
    fontSize: 15,
    color: '#C62828',
    fontWeight: '500',
  },
  responseCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  responseNumber: {
    fontSize: 20,
    color: '#2E7D32',
    marginRight: 10,
    fontWeight: 'bold',
  },
  responseText: {
    flex: 1,
    fontSize: 15,
    color: '#1B5E20',
    lineHeight: 22,
  },
  motivationBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  motivationText: {
    fontSize: 15,
    color: '#0D47A1',
    lineHeight: 22,
    fontWeight: '500',
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

export default AttitudeModule5;
