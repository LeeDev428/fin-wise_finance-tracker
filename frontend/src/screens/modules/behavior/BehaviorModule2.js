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

const BehaviorModule2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Behavior Module 2</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Click Wisely 📱💳</Text>
        <Text style={styles.subtitle}>Being Smart and Safe with Digital Money</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives:</Text>
          <Text style={styles.objective}>1. Understand how digital money works and identify different online financial tools.</Text>
          <Text style={styles.objective}>2. Explain the advantages and risks of using e-wallets, online banking, and cashless payments.</Text>
          <Text style={styles.objective}>3. Learn safe and responsible practices when managing digital transactions.</Text>
          <Text style={styles.objective}>4. Recognize how technology can help you make smarter financial choices.</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.paragraph}>
            Picture this: You're at a café, and your friend pays for their drink using GCash while you dig through your bag for coins. Today, money doesn't always come in the form of bills and coins — it's gone digital!
          </Text>
          <Text style={styles.paragraph}>
            From paying school fees online to shopping through Shopee or Lazada, managing money is now easier and faster. But convenience also means responsibility. Let's learn how to be smart and safe in using digital money.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. What Is Digital Money?</Text>
          <Text style={styles.paragraph}>
            Digital money refers to money you can send, save, or spend online using apps or bank platforms.
          </Text>
          <Text style={styles.paragraphBold}>Examples: GCash, Maya, ShopeePay, BPI Online, Metrobank Mobile App.</Text>
          
          <Text style={styles.paragraphBold}>Benefits:</Text>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>⚡</Text>
            <Text style={styles.benefitText}>Fast and easy to use</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>💵</Text>
            <Text style={styles.benefitText}>Reduces need for cash</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitIcon}>📊</Text>
            <Text style={styles.benefitText}>Helps track your spending</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Digital Wallets and Online Banking</Text>
          
          <View style={styles.toolBox}>
            <Text style={styles.toolTitle}>💳 Digital Wallets:</Text>
            <Text style={styles.toolDescription}>
              Apps where you can store and spend money virtually.
            </Text>
            <Text style={styles.toolExamples}>Examples: GCash, Maya, ShopeePay.</Text>
            <Text style={styles.toolUse}>
              You can pay bills, send money, or buy products online.
            </Text>
          </View>

          <View style={styles.toolBox}>
            <Text style={styles.toolTitle}>🏦 Online Banking:</Text>
            <Text style={styles.toolDescription}>
              Lets you access your bank account through an app or website.
            </Text>
            <Text style={styles.toolExamples}>Examples: BPI, Metrobank, Landbank Online.</Text>
            <Text style={styles.toolUse}>
              You can check balances, transfer money, or deposit funds anytime.
            </Text>
          </View>

          <View style={styles.differenceBox}>
            <Text style={styles.differenceTitle}>🔍 Key Difference:</Text>
            <Text style={styles.differenceText}>
              • Digital wallets are for everyday small transactions.
            </Text>
            <Text style={styles.differenceText}>
              • Online banking connects directly to your bank savings account.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Advantages of Using Digital Money</Text>
          
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🚀</Text>
            <View style={styles.advantageContent}>
              <Text style={styles.advantageTitle}>Convenience:</Text>
              <Text style={styles.advantageText}>Pay or send money instantly.</Text>
            </View>
          </View>

          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>📈</Text>
            <View style={styles.advantageContent}>
              <Text style={styles.advantageTitle}>Tracking:</Text>
              <Text style={styles.advantageText}>You can easily see where your money goes through transaction history.</Text>
            </View>
          </View>

          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🔒</Text>
            <View style={styles.advantageContent}>
              <Text style={styles.advantageTitle}>Safety:</Text>
              <Text style={styles.advantageText}>Reduces the risk of losing physical cash.</Text>
            </View>
          </View>

          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🎁</Text>
            <View style={styles.advantageContent}>
              <Text style={styles.advantageTitle}>Rewards:</Text>
              <Text style={styles.advantageText}>Many apps offer cashback, discounts, or points when you pay digitally.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Risks of Using Digital Money</Text>
          <Text style={styles.paragraph}>
            Using online apps can be risky if you're not careful.
          </Text>
          <Text style={styles.paragraphBold}>Common risks include:</Text>
          
          <View style={styles.riskCard}>
            <Text style={styles.riskIcon}>🎣</Text>
            <View style={styles.riskContent}>
              <Text style={styles.riskTitle}>Phishing scams:</Text>
              <Text style={styles.riskText}>Fake texts or emails asking for your PIN or OTP.</Text>
            </View>
          </View>

          <View style={styles.riskCard}>
            <Text style={styles.riskIcon}>💸</Text>
            <View style={styles.riskContent}>
              <Text style={styles.riskTitle}>Overspending:</Text>
              <Text style={styles.riskText}>It's easy to tap "Pay" without realizing how much you've spent.</Text>
            </View>
          </View>

          <View style={styles.riskCard}>
            <Text style={styles.riskIcon}>🔓</Text>
            <View style={styles.riskContent}>
              <Text style={styles.riskTitle}>Hacking:</Text>
              <Text style={styles.riskText}>Weak passwords can lead to stolen money.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Safe Digital Habits</Text>
          <Text style={styles.paragraph}>
            To stay protected and responsible online, remember these:
          </Text>
          
          <View style={styles.habitCard}>
            <Text style={styles.habitNumber}>1</Text>
            <Text style={styles.habitText}>Keep your information private. Never share your PIN or OTP with anyone.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitNumber}>2</Text>
            <Text style={styles.habitText}>Enable two-factor authentication (2FA) for added security.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitNumber}>3</Text>
            <Text style={styles.habitText}>Avoid suspicious links. Always check if messages are from official accounts.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitNumber}>4</Text>
            <Text style={styles.habitText}>Set a budget for online spending. Avoid topping up more than you need.</Text>
          </View>

          <View style={styles.habitCard}>
            <Text style={styles.habitNumber}>5</Text>
            <Text style={styles.habitText}>Check your transactions regularly. Report any unknown activity right away.</Text>
          </View>
        </View>

        <View style={styles.keyTakeawaysBox}>
          <Text style={styles.keyTakeawaysTitle}>🔑 Key Takeaways:</Text>
          <Text style={styles.takeaway}>1. Digital money makes paying, saving, and transferring funds easier and faster.</Text>
          <Text style={styles.takeaway}>2. E-wallets and online banking help manage money conveniently but require responsibility.</Text>
          <Text style={styles.takeaway}>3. Scams, overspending, and hacking are real risks — stay alert.</Text>
          <Text style={styles.takeaway}>4. Practicing safe digital habits keeps your finances protected and helps you become a smart, tech-savvy money manager.</Text>
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
    marginBottom: 8,
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
  toolBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  toolTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 8,
  },
  toolDescription: {
    fontSize: 15,
    color: '#0D47A1',
    marginBottom: 5,
    lineHeight: 22,
  },
  toolExamples: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  toolUse: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  differenceBox: {
    backgroundColor: '#FFF3CD',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  differenceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 8,
  },
  differenceText: {
    fontSize: 14,
    color: '#E65100',
    marginBottom: 4,
    lineHeight: 20,
  },
  advantageCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  advantageIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  advantageContent: {
    flex: 1,
  },
  advantageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 3,
  },
  advantageText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  riskCard: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#EF5350',
  },
  riskIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  riskContent: {
    flex: 1,
  },
  riskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 3,
  },
  riskText: {
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
  habitNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginRight: 12,
    width: 30,
  },
  habitText: {
    flex: 1,
    fontSize: 15,
    color: '#1B5E20',
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
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default BehaviorModule2;
