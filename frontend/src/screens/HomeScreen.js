import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import colors from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  // Calculate progress percentage (default 100% as shown in design)
  const progressPercentage = user?.progress?.overallPercentage || 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../../assets/finwise-logo.png')}
              style={styles.logoSmall}
              resizeMode="contain"
            />
            <Text style={styles.appName}>FinWise</Text>
          </View>
          
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuVisible(!menuVisible)}
          >
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        {menuVisible && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={logout}>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Home Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.homeTitle}>HOME 🏠</Text>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.greeting}>Hi, {user?.username || 'User'}!</Text>
          <Text style={styles.subtitle}>Ready to grow your money smarts?</Text>

          {/* Progress Circle */}
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <View style={styles.progressInner}>
                <Text style={styles.progressText}>{progressPercentage}%</Text>
              </View>
              {/* Colored segments */}
              <View style={[styles.segment, styles.segmentGreen]} />
              <View style={[styles.segment, styles.segmentYellow]} />
              <View style={[styles.segment, styles.segmentOrange]} />
              <View style={[styles.segment, styles.segmentRed]} />
            </View>
          </View>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresContainer}>
          {/* Learning Modules Card */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('Modules')}
          >
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>📝</Text>
              <Text style={styles.featureIconText}>✏️</Text>
            </View>
            <Text style={styles.featureTitle}>Learning</Text>
            <Text style={styles.featureTitle}>Modules</Text>
          </TouchableOpacity>

          {/* Gamified Quiz Card */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('Quizzes')}
          >
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>🧠</Text>
            </View>
            <Text style={styles.featureTitle}>Gamified</Text>
            <Text style={styles.featureTitle}>Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>notification</Text>
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏆</Text>
          <Text style={styles.navLabel}>reward</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>👤</Text>
          <Text style={styles.navLabelActive}>profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSmall: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  menu: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  homeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  welcomeCard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 8,
    borderColor: colors.progressOrange,
  },
  progressInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  progressText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  segment: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  segmentGreen: {
    backgroundColor: colors.progressGreen,
    top: -5,
    left: 30,
  },
  segmentYellow: {
    backgroundColor: colors.progressYellow,
    top: 30,
    right: -5,
  },
  segmentOrange: {
    backgroundColor: colors.progressOrange,
    bottom: -5,
    right: 30,
  },
  segmentRed: {
    backgroundColor: colors.progressRed,
    bottom: 30,
    left: -5,
  },
  featuresContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  featureCard: {
    backgroundColor: colors.white,
    width: '48%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureEmoji: {
    fontSize: 40,
  },
  featureIconText: {
    fontSize: 20,
    position: 'absolute',
    bottom: 5,
    right: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    position: 'relative',
  },
  navIcon: {
    fontSize: 28,
    opacity: 0.5,
  },
  navIconActive: {
    fontSize: 28,
    opacity: 1,
  },
  navLabel: {
    fontSize: 10,
    color: colors.textLight,
    marginTop: 2,
  },
  navLabelActive: {
    fontSize: 10,
    color: colors.accent,
    marginTop: 2,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: colors.error,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
