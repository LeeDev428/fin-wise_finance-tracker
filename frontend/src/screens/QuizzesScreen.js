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
import { AuthContext } from '../context/AuthContext';
import ApiService from '../services/api';
import colors from '../constants/colors';

const QuizzesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Knowledge');
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    loadQuizzes();
  }, [selectedCategory]);

  const loadQuizzes = async () => {
    try {
      setLoading(true);
      ApiService.setAuthToken(token);
      const response = await ApiService.getQuizzes(selectedCategory);
      
      // If no quizzes from API, use default data
      if (response.data.length === 0) {
        setQuizzes(getDefaultQuizzes());
      } else {
        setQuizzes(response.data);
      }
    } catch (error) {
      console.error('Error loading quizzes:', error);
      // Use default quizzes if API fails
      setQuizzes(getDefaultQuizzes());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultQuizzes = () => {
    return [
      {
        _id: '1',
        quizNumber: 1,
        title: 'Quiz #1',
        category: selectedCategory,
        icon: '✏️',
        completed: true,
      },
      {
        _id: '2',
        quizNumber: 2,
        title: 'Quiz #2',
        category: selectedCategory,
        icon: '📈',
        completed: true,
      },
      {
        _id: '3',
        quizNumber: 3,
        title: 'Quiz #3',
        category: selectedCategory,
        icon: '💼',
        completed: true,
      },
    ];
  };

  const getQuizIcon = (quizNumber) => {
    const icons = ['✏️', '📈', '💼'];
    return icons[quizNumber - 1] || '✏️';
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
          <Text style={styles.headerTitle}>Gamified Quizzes</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '66%' }]} />
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

        {/* Quizzes List */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
          </View>
        ) : (
          <View style={styles.quizzesList}>
            {quizzes.map((quiz, index) => (
              <TouchableOpacity
                key={quiz._id || index}
                style={styles.quizCard}
              >
                <View style={styles.quizIcon}>
                  <Text style={styles.quizEmoji}>
                    {getQuizIcon(quiz.quizNumber)}
                  </Text>
                </View>
                <Text style={styles.quizTitle}>: {quiz.title}</Text>
                <Text style={styles.checkmark}>✓</Text>
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
  quizzesList: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  quizCard: {
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
  quizIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  quizEmoji: {
    fontSize: 24,
  },
  quizTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  checkmark: {
    fontSize: 24,
    color: colors.success,
  },
});

export default QuizzesScreen;
