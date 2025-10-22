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

const AttitudeModule2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 2</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>The Heart vs. Your Wallet 💔💰</Text>
        <Text style={styles.subtitle}>Understanding the Effect of Emotion on Your Spending</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Recognize how emotions affect financial decisions.</Text>
          <Text style={styles.objective}>2. Identify emotional spending triggers.</Text>
          <Text style={styles.objective}>3. Practice self-control in spending habits.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraphBold}>
            Have you ever bought something because you were bored, sad, or stressed? That's called emotional spending — and it can quietly drain your savings!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Is Emotional Spending?</Text>
          <Text style={styles.paragraph}>
            It's when you buy something to improve your mood rather than because you need it.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Triggers:</Text>
          
          <View style={styles.triggerCard}>
            <Text style={styles.triggerEmoji}>😴</Text>
            <View style={styles.triggerContent}>
              <Text style={styles.triggerTitle}>Boredom</Text>
              <Text style={styles.triggerDesc}>"I'll just check online shops…"</Text>
            </View>
          </View>

          <View style={styles.triggerCard}>
            <Text style={styles.triggerEmoji}>😢</Text>
            <View style={styles.triggerContent}>
              <Text style={styles.triggerTitle}>Sadness or Stress</Text>
              <Text style={styles.triggerDesc}>"I deserve a treat."</Text>
            </View>
          </View>

          <View style={styles.triggerCard}>
            <Text style={styles.triggerEmoji}>👥</Text>
            <View style={styles.triggerContent}>
              <Text style={styles.triggerTitle}>Peer Pressure</Text>
              <Text style={styles.triggerDesc}>"My friends all have this."</Text>
            </View>
          </View>

          <View style={styles.triggerCard}>
            <Text style={styles.triggerEmoji}>🎉</Text>
            <View style={styles.triggerContent}>
              <Text style={styles.triggerTitle}>Celebrations</Text>
              <Text style={styles.triggerDesc}>"I'll reward myself!"</Text>
            </View>
          </View>
        </View>

        <View style={styles.smartTipBox}>
          <Text style={styles.smartTipTitle}>💡 Smart Tip</Text>
          <Text style={styles.paragraph}>
            Before buying, pause and ask yourself:
          </Text>
          <Text style={styles.paragraphBold}>
            "Do I need this, or do I just want it right now?"
          </Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Emotions can influence your spending behavior.</Text>
          <Text style={styles.takeaway}>• Awareness helps prevent financial regret.</Text>
          <Text style={styles.takeaway}>• You should control your money, not let your emotions control you.</Text>
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
  triggerCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  triggerEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  triggerContent: {
    flex: 1,
  },
  triggerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  triggerDesc: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
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

export default AttitudeModule2;
