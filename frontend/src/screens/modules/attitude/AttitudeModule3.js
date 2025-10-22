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

const AttitudeModule3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 3</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Money and Me 💭💵</Text>
        <Text style={styles.subtitle}>Exploring Your Values and Priorities</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Identify your personal values that shape spending and saving.</Text>
          <Text style={styles.objective}>2. Understand how priorities guide your financial decisions.</Text>
          <Text style={styles.objective}>3. Reflect on what truly matters to you about money.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            If you had ₱1,000, how would you use it? Buy shoes? Treat your friends? Save it?
          </Text>
          <Text style={styles.paragraph}>
            Your answer shows what you value most.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Are Financial Values?</Text>
          <Text style={styles.paragraph}>
            Financial values are the beliefs that guide what you think is "worth it."
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Examples:</Text>
          
          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>📚</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Education</Text>
              <Text style={styles.valueDesc}>"I'll invest in books or tuition."</Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>👨‍👩‍👧‍👦</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Family</Text>
              <Text style={styles.valueDesc}>"I'll save to help my parents."</Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>🏠</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Comfort</Text>
              <Text style={styles.valueDesc}>"I want a nice lifestyle."</Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>⭐</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Status</Text>
              <Text style={styles.valueDesc}>"I want to look good or trendy."</Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>🎮</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Fun</Text>
              <Text style={styles.valueDesc}>"I want to enjoy my youth."</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Priorities and Choices</Text>
          <Text style={styles.paragraph}>
            Since money is limited, your spending must match your values.
          </Text>
          <Text style={styles.paragraphBold}>
            When your expenses match your values, you feel satisfied instead of guilty.
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Your values guide how you use money.</Text>
          <Text style={styles.takeaway}>• Spending according to your values reduces regret.</Text>
          <Text style={styles.takeaway}>• Financial satisfaction comes from purpose-driven spending.</Text>
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
  valueCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  valueIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  valueDesc: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
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

export default AttitudeModule3;
