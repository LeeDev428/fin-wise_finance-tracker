import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import ApiService from '../../services/api';
import colors from '../../constants/colors';

const ModulesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Knowledge');
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    loadModules();
  }, [selectedCategory]);

  const loadModules = async () => {
    try {
      setLoading(true);
      
      // For Knowledge, Attitude, and Behavior categories, always use local modules
      if (selectedCategory === 'Knowledge' || selectedCategory === 'Attitude' || selectedCategory === 'Behavior') {
        setModules(getDefaultModules());
        setLoading(false);
        return;
      }
      
      // For other categories, try API first
      ApiService.setAuthToken(token);
      const response = await ApiService.getModules(selectedCategory);
      
      // If no modules from API, use default data
      if (response.data.length === 0) {
        setModules(getDefaultModules());
      } else {
        setModules(response.data);
      }
    } catch (error) {
      console.error('Error loading modules:', error);
      // Use default modules if API fails
      setModules(getDefaultModules());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultModules = () => {
    if (selectedCategory === 'Knowledge') {
      return [
        { _id: '1', moduleNumber: 1, title: 'Let Your Money Grow!', category: selectedCategory, icon: '💰', completed: false },
        { _id: '2', moduleNumber: 2, title: 'The Earlier, the Richer!', category: selectedCategory, icon: '⏰', completed: false },
        { _id: '3', moduleNumber: 3, title: 'Inflation 101', category: selectedCategory, icon: '📈', completed: false },
        { _id: '4', moduleNumber: 4, title: 'Earning More but Getting Less?', category: selectedCategory, icon: '💸', completed: false },
        { _id: '5', moduleNumber: 5, title: 'The Best Place for Your Money', category: selectedCategory, icon: '🏦', completed: false },
        { _id: '6', moduleNumber: 6, title: 'What\'s Left After Tax?', category: selectedCategory, icon: '💼', completed: false },
        { _id: '7', moduleNumber: 7, title: 'Protect What You Earn', category: selectedCategory, icon: '🛡️', completed: false },
        { _id: '8', moduleNumber: 8, title: 'Don\'t Put All Your Eggs in One Basket', category: selectedCategory, icon: '🥚', completed: false },
        { _id: '9', moduleNumber: 9, title: 'Plan Your Money, Plan Your Future', category: selectedCategory, icon: '📝', completed: false },
        { _id: '10', moduleNumber: 10, title: 'Be a Smart Consumer!', category: selectedCategory, icon: '🛒', completed: false },
      ];
    }
    if (selectedCategory === 'Attitude') {
      return [
        { _id: '1', moduleNumber: 1, title: 'Mind Over Money', category: selectedCategory, icon: '🧠', completed: false },
        { _id: '2', moduleNumber: 2, title: 'The Heart vs. Your Wallet', category: selectedCategory, icon: '💔', completed: false },
        { _id: '3', moduleNumber: 3, title: 'Money and Me', category: selectedCategory, icon: '💭', completed: false },
        { _id: '4', moduleNumber: 4, title: 'Thankfulness and Growth', category: selectedCategory, icon: '🙏', completed: false },
        { _id: '5', moduleNumber: 5, title: 'Peer Pressure and Peso', category: selectedCategory, icon: '👥', completed: false },
        { _id: '6', moduleNumber: 6, title: 'Delayed Gratification', category: selectedCategory, icon: '⏳', completed: false },
        { _id: '7', moduleNumber: 7, title: 'Money and Media', category: selectedCategory, icon: '📱', completed: false },
      ];
    }
    if (selectedCategory === 'Behavior') {
      return [
        { _id: '1', moduleNumber: 1, title: 'Mind Your Money Moves', category: selectedCategory, icon: '💰', completed: false },
        { _id: '2', moduleNumber: 2, title: 'Click Wisely', category: selectedCategory, icon: '📱', completed: false },
        { _id: '3', moduleNumber: 3, title: 'Spend Smart', category: selectedCategory, icon: '🛍️', completed: false },
        { _id: '4', moduleNumber: 4, title: 'Track It!', category: selectedCategory, icon: '📊', completed: false },
        { _id: '5', moduleNumber: 5, title: 'Budgeting Basics', category: selectedCategory, icon: '💰', completed: false },
      ];
    }
    return [
      {
        _id: '1',
        moduleNumber: 1,
        title: 'Module #1',
        category: selectedCategory,
        icon: '✏️',
        completed: true,
      },
      {
        _id: '2',
        moduleNumber: 2,
        title: 'Module #2',
        category: selectedCategory,
        icon: '📈',
        completed: true,
      },
      {
        _id: '3',
        moduleNumber: 3,
        title: 'Module #3',
        category: selectedCategory,
        icon: '💼',
        completed: true,
      },
    ];
  };

  const getModuleIcon = (module) => {
    return module.icon || '✏️';
  };

  const getProgressPercentage = () => {
    if (selectedCategory === 'Knowledge') return '33%';
    if (selectedCategory === 'Attitude') return '66%';
    if (selectedCategory === 'Behavior') return '100%';
    return '0%';
  };

  const handleModulePress = (module) => {
    if (selectedCategory === 'Knowledge' && module.moduleNumber <= 10) {
      // Navigate to the specific knowledge module
      navigation.navigate(`Module${module.moduleNumber}`);
    } else if (selectedCategory === 'Attitude' && module.moduleNumber <= 7) {
      // Navigate to the specific attitude module
      navigation.navigate(`AttitudeModule${module.moduleNumber}`);
    } else if (selectedCategory === 'Behavior' && module.moduleNumber <= 5) {
      // Navigate to the specific behavior module
      navigation.navigate(`BehaviorModule${module.moduleNumber}`);
    } else {
      // For other categories or future modules
      console.log('Module pressed:', module.title);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Learning Modules</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: getProgressPercentage() }]} />
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedCategory === 'Knowledge' && styles.tabActive,
            ]}
            onPress={() => setSelectedCategory('Knowledge')}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === 'Knowledge' && styles.tabTextActive,
              ]}
            >
              Knowledge
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedCategory === 'Attitude' && styles.tabActive,
            ]}
            onPress={() => setSelectedCategory('Attitude')}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === 'Attitude' && styles.tabTextActive,
              ]}
            >
              Attitude
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedCategory === 'Behavior' && styles.tabActive,
            ]}
            onPress={() => setSelectedCategory('Behavior')}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === 'Behavior' && styles.tabTextActive,
              ]}
            >
              Behavior
            </Text>
          </TouchableOpacity>
        </View>

        {/* Modules List */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
          </View>
        ) : (
          <View style={styles.modulesList}>
            {modules.map((module, index) => (
              <TouchableOpacity
                key={module._id || index}
                style={styles.moduleCard}
                onPress={() => handleModulePress(module)}
                activeOpacity={0.7}
              >
                <View style={styles.moduleIcon}>
                  <Text style={styles.moduleEmoji}>
                    {getModuleIcon(module)}
                  </Text>
                </View>
                <View style={styles.moduleTitleContainer}>
                  <Text style={styles.moduleNumber}>Module {module.moduleNumber}</Text>
                  <Text style={styles.moduleTitle}>{module.title}</Text>
                </View>
                {module.completed && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
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
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  placeholder: {
    width: 34,
  },
  progressBarContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBarBackground: {
    height: 20,
    backgroundColor: colors.progressRed,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.progressGreen,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: colors.accent,
  },
  tabText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.white,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  modulesList: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moduleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  moduleEmoji: {
    fontSize: 24,
  },
  moduleTitleContainer: {
    flex: 1,
  },
  moduleNumber: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.accent,
    marginBottom: 2,
  },
  moduleTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  checkmark: {
    fontSize: 24,
    color: colors.success,
  },
});

export default ModulesScreen;
