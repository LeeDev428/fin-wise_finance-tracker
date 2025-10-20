import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/finwise-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appTitle}>FinWise</Text>
        </View>

        {/* Main Heading */}
        <View style={styles.heroSection}>
          <Text style={styles.mainHeading}>Empower Your Finances</Text>
          <Text style={styles.subHeading}>– Learn, Play, and Grow!</Text>
          <Text style={styles.description}>
            A fun, interactive app that teaches students how to save, budget, and spend wisely.
          </Text>
        </View>

        {/* Download Button */}
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.downloadButtonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>WHY YOU'LL LOVE IT</Text>

          <View style={styles.featuresGrid}>
            {/* Interactive Lessons */}
            <View style={styles.featureCard}>
              <Ionicons name="book-outline" size={40} color="#D4AF37" />
              <Text style={styles.featureTitle}>Interactive{'\n'}Lessons</Text>
              <Text style={styles.featureDescription}>
                Learn through games{'\n'}& quizzes
              </Text>
            </View>

            {/* Real-Life Scenarios */}
            <View style={styles.featureCard}>
              <Ionicons name="wallet-outline" size={40} color="#D4AF37" />
              <Text style={styles.featureTitle}>Real-Life{'\n'}Scenarios</Text>
              <Text style={styles.featureDescription}>
                Practice financial{'\n'}decisions safely
              </Text>
            </View>

            {/* Progress Tracker */}
            <View style={styles.featureCard}>
              <Ionicons name="trending-up-outline" size={40} color="#D4AF37" />
              <Text style={styles.featureTitle}>Progress{'\n'}Tracker</Text>
              <Text style={styles.featureDescription}>
                See your learning{'\n'}improve
              </Text>
            </View>

            {/* Rewards System */}
            <View style={styles.featureCard}>
              <Ionicons name="trophy-outline" size={40} color="#D4AF37" />
              <Text style={styles.featureTitle}>Rewards{'\n'}System</Text>
              <Text style={styles.featureDescription}>
                Earn badges as you{'\n'}master money skills
              </Text>
            </View>
          </View>
        </View>

        {/* Login Link at Bottom */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#666',
    letterSpacing: 1,
  },
  heroSection: {
    marginBottom: 30,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#C4B454',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C4B454',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  downloadButton: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  downloadButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
  },
  featuresSection: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 25,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D4AF37',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8BC88B',
  },
});

export default LandingScreen;
