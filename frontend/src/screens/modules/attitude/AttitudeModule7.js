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

const AttitudeModule7 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attitude Module 7</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Money and Media 📱💸</Text>
        <Text style={styles.subtitle}>Don't Trust Everything You See</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Recognize how social media influences spending.</Text>
          <Text style={styles.objective}>2. Identify unrealistic online money expectations.</Text>
          <Text style={styles.objective}>3. Practice media literacy and impulse control.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Scrolling through TikTok or Instagram, you see influencers doing ₱10,000 "shopping hauls." 
            You start to feel left out — but remember, not everything online is real.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Social Media Pressure</Text>
          <Text style={styles.paragraph}>
            Advertisements and influencers create wants you didn't have before — making you spend impulsively.
          </Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>⚠️ Reality Check</Text>
          
          <View style={styles.realityCard}>
            <Text style={styles.realityIcon}>🎭</Text>
            <Text style={styles.realityText}>
              Social media often shows only the "highlights," not the full story.
            </Text>
          </View>

          <View style={styles.realityCard}>
            <Text style={styles.realityIcon}>🎁</Text>
            <Text style={styles.realityText}>
              Many influencers receive free items or sponsorships — not real spending!
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Smart Online Habits</Text>
          
          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>📚</Text>
            <Text style={styles.habitText}>Follow educational financial pages.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>🤔</Text>
            <Text style={styles.habitText}>Think twice before clicking "Add to Cart."</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>❓</Text>
            <Text style={styles.habitText}>Ask: "Do I really need this?"</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitIcon}>💯</Text>
            <Text style={styles.habitText}>
              Remember: Wealth isn't about showing off — it's about being secure.
            </Text>
          </View>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.tipsTitle}>🛡️ Protect Yourself From Social Media Spending:</Text>
          <Text style={styles.tip}>✓ Unfollow accounts that make you feel "not enough"</Text>
          <Text style={styles.tip}>✓ Set time limits on shopping apps</Text>
          <Text style={styles.tip}>✓ Create a wishlist instead of buying immediately</Text>
          <Text style={styles.tip}>✓ Follow creators who promote saving, not spending</Text>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>• Media shapes your money mindset — be aware.</Text>
          <Text style={styles.takeaway}>• Always think critically before spending.</Text>
          <Text style={styles.takeaway}>• Real success isn't always visible online.</Text>
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
  warningBox: {
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#EF5350',
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 12,
  },
  realityCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  realityIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  realityText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  habitCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  habitIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  habitText: {
    flex: 1,
    fontSize: 15,
    color: '#1B5E20',
    lineHeight: 22,
  },
  tipsBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  tipsTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 12,
  },
  tip: {
    fontSize: 15,
    color: '#0D47A1',
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

export default AttitudeModule7;
