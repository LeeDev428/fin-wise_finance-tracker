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

const AttitudeModule6 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 6</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Delayed Gratification ⏳</Text>
        <Text style={styles.subtitle}>The Power of Waiting</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand delayed gratification.</Text>
          <Text style={styles.objective}>2. Avoid impulsive buying.</Text>
          <Text style={styles.objective}>3. Learn how waiting benefits long-term goals.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Would you rather have ₱500 now or ₱1,000 next month?
          </Text>
          <Text style={styles.paragraph}>
            Choosing to wait is called delayed gratification — a key to financial maturity.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Delayed Gratification?</Text>
          <Text style={styles.paragraph}>
            It's the ability to wait for a better reward later instead of choosing smaller, instant pleasures now.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why It Matters</Text>
          
          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>💪</Text>
            <Text style={styles.benefitText}>Builds self-control and patience.</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>🚫</Text>
            <Text style={styles.benefitText}>Helps avoid debt and regret.</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>📈</Text>
            <Text style={styles.benefitText}>Leads to bigger long-term gains.</Text>
          </View>
        </View>

        <View style={styles.smartTipBox}>
          <Text style={styles.smartTipTitle}>💡 Smart Tip</Text>
          <Text style={styles.paragraph}>
            Before buying something, wait 24 hours and ask yourself if you still want it the next day.
          </Text>
          <Text style={styles.paragraphBold}>
            If yes, it may be worth buying.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleTitle}>Real-Life Example:</Text>
          <Text style={styles.paragraph}>
            Instead of buying a ₱3,000 phone case now, save that money for 6 months. 
            Combined with your other savings, you could buy a new phone worth ₱18,000!
          </Text>
          <Text style={styles.paragraphBold}>
            Small sacrifices today = Big rewards tomorrow! 🎯
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Waiting builds discipline.</Text>
          <Text style={styles.takeaway}>• Sacrifice now, enjoy more later.</Text>
          <Text style={styles.takeaway}>• Patience = financial growth.</Text>
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
  benefitCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  benefitIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 15,
    color: '#1B5E20',
    lineHeight: 22,
  },
  smartTipBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  smartTipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 10,
  },
  exampleBox: {
    backgroundColor: '#F3E5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
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

export default AttitudeModule6;
