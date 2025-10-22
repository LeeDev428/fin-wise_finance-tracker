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

const AttitudeModule4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 4</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Thankfulness and Growth 🙏📈</Text>
        <Text style={styles.subtitle}>Developing a Positive Mindset on Money</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Appreciate what you have while planning for growth.</Text>
          <Text style={styles.objective}>2. Develop a thankful and responsible mindset toward money.</Text>
          <Text style={styles.objective}>3. Build optimism and confidence about your financial future.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Do you sometimes feel like your allowance is never enough? That's common — but gratitude and resourcefulness can change your outlook and motivate you to grow financially.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thankfulness Mindset</Text>
          <Text style={styles.paragraph}>
            Focus on what you have, not what you lack. Gratitude reduces envy and impulsive spending.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scarcity vs. Abundance Mindset</Text>
          
          <View style={styles.mindsetCompareBox}>
            <Text style={styles.scarcityTitle}>❌ Scarcity Mind:</Text>
            <Text style={styles.scarcityDesc}>"I will never have enough money."</Text>
          </View>

          <View style={styles.mindsetCompareBox}>
            <Text style={styles.abundanceTitle}>✅ Abundance Mind:</Text>
            <Text style={styles.abundanceDesc}>"I can use what I have wisely and grow it."</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Strategies to Build Positivity</Text>
          
          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>1</Text>
            <Text style={styles.strategyText}>
              Keep a weekly money gratitude list (e.g., "I'm thankful for my allowance.").
            </Text>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>2</Text>
            <Text style={styles.strategyText}>
              Celebrate small wins: saving ₱50 is still progress!
            </Text>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>3</Text>
            <Text style={styles.strategyText}>
              Replace complaints with learning: read financial tips instead of saying "I'm broke."
            </Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Gratitude changes your mindset from lack to growth.</Text>
          <Text style={styles.takeaway}>• A positive attitude encourages motivation and effort.</Text>
          <Text style={styles.takeaway}>• Every small financial step matters.</Text>
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
  highlightBox: {
    backgroundColor: '#FFF3CD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  mindsetCompareBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  scarcityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 5,
  },
  scarcityDesc: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  abundanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 5,
  },
  abundanceDesc: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  strategyCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  strategyNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginRight: 12,
    backgroundColor: '#FFF',
    width: 32,
    height: 32,
    textAlign: 'center',
    lineHeight: 32,
    borderRadius: 16,
  },
  strategyText: {
    flex: 1,
    fontSize: 15,
    color: '#444',
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

export default AttitudeModule4;
