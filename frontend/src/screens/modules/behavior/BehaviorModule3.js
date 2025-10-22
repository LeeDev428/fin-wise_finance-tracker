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

const BehaviorModule3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Behavior Module 3</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Spend Smart 🛍️💡</Text>
        <Text style={styles.subtitle}>How to Control Impulse Buying</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand what impulse buying is and why it happens.</Text>
          <Text style={styles.objective}>2. Recognize the difference between planned spending and emotional spending.</Text>
          <Text style={styles.objective}>3. Learn practical ways to control your spending habits.</Text>
          <Text style={styles.objective}>4. Develop discipline and self-control when using your money.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Have you ever opened Shopee or TikTok Shop just to "browse," but ended up buying something you didn't plan to? Maybe a cute phone case, a tumbler, or another pair of earbuds?
          </Text>
          <Text style={styles.paragraphBold}>
            That's called impulse buying — spending your money suddenly without thinking if you really need the item. It feels good at the moment but can hurt your budget later. Let's learn how to make smarter choices with our money.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. What Is Impulse Buying?</Text>
          <Text style={styles.paragraph}>
            Impulse buying means purchasing something suddenly because you want it — not because you need it.
          </Text>
          <Text style={styles.paragraphBold}>It's usually caused by:</Text>
          
          <View style={styles.causeCard}>
            <Text style={styles.causeIcon}>😤</Text>
            <View style={styles.causeContent}>
              <Text style={styles.causeTitle}>Emotions</Text>
              <Text style={styles.causeText}>(stress, boredom, excitement)</Text>
            </View>
          </View>

          <View style={styles.causeCard}>
            <Text style={styles.causeIcon}>👥</Text>
            <View style={styles.causeContent}>
              <Text style={styles.causeTitle}>Peer influence</Text>
              <Text style={styles.causeText}>("My classmates have it, I should buy one too")</Text>
            </View>
          </View>

          <View style={styles.causeCard}>
            <Text style={styles.causeIcon}>🔥</Text>
            <View style={styles.causeContent}>
              <Text style={styles.causeTitle}>Online sales or promos</Text>
              <Text style={styles.causeText}>(like "₱1 deals" or "Flash Sale")</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Why We Fall for Impulse Buying</Text>
          <Text style={styles.paragraph}>Impulse buying often happens when:</Text>
          
          <View style={styles.reasonCard}>
            <Text style={styles.reasonBullet}>•</Text>
            <Text style={styles.reasonText}>You shop when you're bored or emotional.</Text>
          </View>

          <View style={styles.reasonCard}>
            <Text style={styles.reasonBullet}>•</Text>
            <Text style={styles.reasonText}>You don't track your spending.</Text>
          </View>

          <View style={styles.reasonCard}>
            <Text style={styles.reasonBullet}>•</Text>
            <Text style={styles.reasonText}>You're influenced by social media ads or friends.</Text>
          </View>

          <View style={styles.reasonCard}>
            <Text style={styles.reasonBullet}>•</Text>
            <Text style={styles.reasonText}>You think small purchases "don't matter."</Text>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              ⚠️ But small expenses add up — ₱100 here and ₱150 there can become ₱1,000 quickly!
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Planned Spending vs. Emotional Spending</Text>
          
          <View style={styles.comparisonContainer}>
            <View style={styles.comparisonColumn}>
              <Text style={styles.comparisonHeader}>✅ Planned Spending</Text>
              
              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonText}>You list what you need before buying.</Text>
              </View>

              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonText}>You compare prices before paying.</Text>
              </View>

              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonText}>You check your budget first.</Text>
              </View>
            </View>

            <View style={styles.comparisonColumn}>
              <Text style={styles.comparisonHeaderBad}>❌ Emotional (Impulse) Spending</Text>
              
              <View style={styles.comparisonItemBad}>
                <Text style={styles.comparisonTextBad}>You buy something on the spot.</Text>
              </View>

              <View style={styles.comparisonItemBad}>
                <Text style={styles.comparisonTextBad}>You buy because "it's cute" or "on sale."</Text>
              </View>

              <View style={styles.comparisonItemBad}>
                <Text style={styles.comparisonTextBad}>You ignore your budget.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. How to Control Impulse Buying</Text>
          <Text style={styles.paragraph}>Here are simple strategies to spend smart:</Text>
          
          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>1</Text>
            <View style={styles.strategyContent}>
              <Text style={styles.strategyTitle}>Make a spending list.</Text>
              <Text style={styles.strategyText}>Write down what you need before shopping.</Text>
            </View>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>2</Text>
            <View style={styles.strategyContent}>
              <Text style={styles.strategyTitle}>Use the 24-hour rule.</Text>
              <Text style={styles.strategyText}>Wait one day before buying something you didn't plan for. If you still want it after 24 hours, then reconsider.</Text>
            </View>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>3</Text>
            <View style={styles.strategyContent}>
              <Text style={styles.strategyTitle}>Set a weekly or monthly budget.</Text>
              <Text style={styles.strategyText}>Use a notebook or budgeting app to track your spending.</Text>
            </View>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>4</Text>
            <View style={styles.strategyContent}>
              <Text style={styles.strategyTitle}>Avoid "just browsing."</Text>
              <Text style={styles.strategyText}>Limit time scrolling through online shops if you're not planning to buy anything.</Text>
            </View>
          </View>

          <View style={styles.strategyCard}>
            <Text style={styles.strategyNumber}>5</Text>
            <View style={styles.strategyContent}>
              <Text style={styles.strategyTitle}>Ask yourself: "Do I need this, or do I just want it?"</Text>
              <Text style={styles.strategyText}>This simple question can help stop unnecessary spending.</Text>
            </View>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>1. Impulse buying happens when we spend based on emotion, not necessity.</Text>
          <Text style={styles.takeaway}>2. Planned spending helps you stay within your budget and reach your goals.</Text>
          <Text style={styles.takeaway}>3. Using strategies like the 24-hour rule and expense tracking prevents wasteful spending.</Text>
          <Text style={styles.takeaway}>4. Spending smartly builds self-discipline and helps you take control of your financial future.</Text>
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
  causeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  causeIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  causeContent: {
    flex: 1,
  },
  causeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 2,
  },
  causeText: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
  reasonCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  reasonBullet: {
    fontSize: 20,
    color: '#FF5722',
    marginRight: 10,
    fontWeight: 'bold',
  },
  reasonText: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  warningBox: {
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#EF5350',
  },
  warningText: {
    fontSize: 15,
    color: '#C62828',
    fontWeight: '600',
    lineHeight: 22,
  },
  comparisonContainer: {
    marginTop: 10,
  },
  comparisonColumn: {
    marginBottom: 15,
  },
  comparisonHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
  },
  comparisonHeaderBad: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 10,
    backgroundColor: '#FFEBEE',
    padding: 10,
    borderRadius: 8,
  },
  comparisonItem: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  comparisonItemBad: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#EF5350',
  },
  comparisonText: {
    fontSize: 14,
    color: '#1B5E20',
    lineHeight: 20,
  },
  comparisonTextBad: {
    fontSize: 14,
    color: '#B71C1C',
    lineHeight: 20,
  },
  strategyCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  strategyNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginRight: 12,
    width: 30,
  },
  strategyContent: {
    flex: 1,
  },
  strategyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 4,
  },
  strategyText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
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
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default BehaviorModule3;
