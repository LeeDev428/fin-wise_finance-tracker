import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const progressPercentage = user?.progress?.overallPercentage || 100;

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={menuVisible} transparent={true} animationType='fade' onRequestClose={() => setMenuVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => setMenuVisible(false)} />
          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <Image source={require('../../assets/finwise-logo.png')} style={styles.drawerLogo} resizeMode='contain' />
              <Text style={styles.drawerTitle}>FinWise</Text>
            </View>
            <View style={styles.drawerContent}>
              <TouchableOpacity style={styles.drawerItem} onPress={() => { setMenuVisible(false); navigation.navigate('Profile'); }}>
                <Ionicons name='person-outline' size={24} color='#333' />
                <Text style={styles.drawerItemText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.drawerItem, styles.logoutItem]} onPress={() => { setMenuVisible(false); logout(); }}>
                <Ionicons name='log-out-outline' size={24} color='#FF6B6B' />
                <Text style={[styles.drawerItemText, { color: '#FF6B6B' }]}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('../../assets/finwise-logo.png')} style={styles.logo} resizeMode='contain' />
            <Text style={styles.appName}>FinWise</Text>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
            <Ionicons name='menu' size={32} color='#333' />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.homeTitle}>HOME</Text>
          <Ionicons name='home' size={18} color='#7D7D7D' style={{ marginLeft: 5 }} />
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.greeting}>Hi, {user?.username || 'John'}!</Text>
          <Text style={styles.subtitle}>Ready to grow your money smarts?</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressCircleWrapper}>
              <View style={[styles.progressSegment, styles.greenSegment]} />
              <View style={[styles.progressSegment, styles.yellowSegment]} />
              <View style={[styles.progressSegment, styles.orangeSegment]} />
              <View style={[styles.progressSegment, styles.redSegment]} />
              <View style={styles.progressInner}>
                <Text style={styles.progressText}>{progressPercentage}%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.featuresContainer}>
          <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate('Modules')}>
            <View style={styles.iconWrapper}>
              <View style={styles.noteIconContainer}>
                <View style={styles.noteIconPaper}>
                  <View style={styles.noteLine} />
                  <View style={styles.noteLine} />
                  <View style={styles.noteLine} />
                </View>
                <View style={styles.pencilIcon}>
                  <Text style={styles.coinEmoji}>💰</Text>
                </View>
              </View>
            </View>
            <Text style={styles.featureTitle}>Learning</Text>
            <Text style={styles.featureTitle}>Modules</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate('Quizzes')}>
            <View style={styles.iconWrapper}>
              <Text style={styles.brainEmoji}>🧠</Text>
            </View>
            <Text style={styles.featureTitle}>Gamified</Text>
            <Text style={styles.featureTitle}>Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Ionicons name='notifications' size={28} color='#FFB84D' />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>
          <Text style={styles.navLabel}>notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='trophy' size={28} color='#FFD700' />
          <Text style={styles.navLabel}>reward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name='person-circle' size={28} color='#6CBBF7' />
          <Text style={styles.navLabel}>profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8E5B5' },
  modalOverlay: { flex: 1, flexDirection: 'row' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  drawer: { width: '75%', height: '100%', backgroundColor: 'white', paddingTop: 50, shadowColor: '#000', shadowOffset: { width: 2, height: 0 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 15 },
  drawerHeader: { alignItems: 'center', paddingBottom: 30, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 20 },
  drawerLogo: { width: 80, height: 80, marginBottom: 10 },
  drawerTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  drawerContent: { paddingHorizontal: 20 },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 10, marginBottom: 10 },
  logoutItem: { marginTop: 20 },
  drawerItemText: { fontSize: 16, marginLeft: 15, color: '#333', fontWeight: '500' },
  scrollView: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 50, height: 50, marginRight: 10 },
  appName: { fontSize: 20, fontWeight: 'bold', color: '#666' },
  menuButton: { padding: 5 },
  titleContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15 },
  homeTitle: { fontSize: 16, fontWeight: '600', color: '#7D7D7D', letterSpacing: 1 },
  welcomeCard: { backgroundColor: 'white', marginHorizontal: 20, borderRadius: 20, padding: 25, marginBottom: 25, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  greeting: { fontSize: 18, fontWeight: '600', color: '#999', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#999', marginBottom: 25 },
  progressContainer: { alignItems: 'center', justifyContent: 'center' },
  progressCircleWrapper: { width: 150, height: 150, position: 'relative', justifyContent: 'center', alignItems: 'center' },
  progressSegment: { position: 'absolute', width: 150, height: 150, borderRadius: 75, borderWidth: 12 },
  greenSegment: { borderColor: 'transparent', borderTopColor: '#90EE90', transform: [{ rotate: '0deg' }] },
  yellowSegment: { borderColor: 'transparent', borderRightColor: '#FFD700', transform: [{ rotate: '90deg' }] },
  orangeSegment: { borderColor: 'transparent', borderBottomColor: '#FFB84D', transform: [{ rotate: '180deg' }] },
  redSegment: { borderColor: 'transparent', borderLeftColor: '#FF6B6B', transform: [{ rotate: '270deg' }] },
  progressInner: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#FFE4B5', justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  progressText: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  featuresContainer: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', marginBottom: 100 },
  featureCard: { backgroundColor: 'white', width: '48%', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5, minHeight: 180 },
  iconWrapper: { width: 90, height: 90, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  noteIconContainer: { width: 70, height: 80, position: 'relative', justifyContent: 'center', alignItems: 'center' },
  noteIconPaper: { width: 55, height: 65, backgroundColor: '#E8E5FF', borderRadius: 8, padding: 10, justifyContent: 'space-evenly', alignItems: 'flex-start' },
  noteLine: { width: '80%', height: 2, backgroundColor: '#9B8FFF', borderRadius: 1, marginLeft: 5 },
  pencilIcon: { position: 'absolute', bottom: -5, right: -5, width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#FFF9E6', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white' },
  coinEmoji: { fontSize: 20 },
  brainEmoji: { fontSize: 65 },
  featureTitle: { fontSize: 14, fontWeight: '500', color: '#999', textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white', paddingVertical: 12, borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 10 },
  navItem: { alignItems: 'center', position: 'relative' },
  navIconContainer: { position: 'relative' },
  navLabel: { fontSize: 11, color: '#999', marginTop: 4 },
  notificationBadge: { position: 'absolute', top: -5, right: -8, backgroundColor: '#FF6B6B', borderRadius: 10, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
});

export default HomeScreen;
