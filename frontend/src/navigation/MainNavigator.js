import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// Landing Screen
import LandingScreen from '../screens/LandingScreen';

// Auth Screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// Main Screens
import HomeScreen from '../screens/HomeScreen';
import ModulesScreen from '../screens/modules/ModulesScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Knowledge Module Screens
import Module1 from '../screens/modules/knowledge/Module1';
import Module2 from '../screens/modules/knowledge/Module2';
import Module3 from '../screens/modules/knowledge/Module3';
import Module4 from '../screens/modules/knowledge/Module4';
import Module5 from '../screens/modules/knowledge/Module5';
import Module6 from '../screens/modules/knowledge/Module6';
import Module7 from '../screens/modules/knowledge/Module7';
import Module8 from '../screens/modules/knowledge/Module8';
import Module9 from '../screens/modules/knowledge/Module9';
import Module10 from '../screens/modules/knowledge/Module10';

// Attitude Module Screens
import AttitudeModule1 from '../screens/modules/attitude/AttitudeModule1';
import AttitudeModule2 from '../screens/modules/attitude/AttitudeModule2';
import AttitudeModule3 from '../screens/modules/attitude/AttitudeModule3';
import AttitudeModule4 from '../screens/modules/attitude/AttitudeModule4';
import AttitudeModule5 from '../screens/modules/attitude/AttitudeModule5';
import AttitudeModule6 from '../screens/modules/attitude/AttitudeModule6';
import AttitudeModule7 from '../screens/modules/attitude/AttitudeModule7';

// Behavior Module Screens
import BehaviorModule1 from '../screens/modules/behavior/BehaviorModule1';
import BehaviorModule2 from '../screens/modules/behavior/BehaviorModule2';
import BehaviorModule3 from '../screens/modules/behavior/BehaviorModule3';
import BehaviorModule4 from '../screens/modules/behavior/BehaviorModule4';
import BehaviorModule5 from '../screens/modules/behavior/BehaviorModule5';

// Quiz Screens - Quiz 1
import Quiz1Selection from '../screens/quiz/quiz1/Quiz1Selection';
import Module1Quiz from '../screens/quiz/quiz1/Module1Quiz';
import Module2Quiz from '../screens/quiz/quiz1/Module2Quiz';
import Module3Quiz from '../screens/quiz/quiz1/Module3Quiz';
import Module4Quiz from '../screens/quiz/quiz1/Module4Quiz';
import Module5Quiz from '../screens/quiz/quiz1/Module5Quiz';

// Quiz Screens - Quiz 2
import Quiz2Selection from '../screens/quiz/quiz2/Quiz2Selection';
import Quiz2Module1 from '../screens/quiz/quiz2/Module1Quiz';
import Quiz2Module2 from '../screens/quiz/quiz2/Module2Quiz';
import Quiz2Module3 from '../screens/quiz/quiz2/Module3Quiz';
import Quiz2Module4 from '../screens/quiz/quiz2/Module4Quiz';
import Quiz2Module5 from '../screens/quiz/quiz2/Module5Quiz';

// Quiz Screens - Quiz 3
import Quiz3Selection from '../screens/quiz/quiz3/Quiz3Selection';
import Quiz3Module1 from '../screens/quiz/quiz3/Module1Quiz';
import Quiz3Module2 from '../screens/quiz/quiz3/Module2Quiz';
import Quiz3Module3 from '../screens/quiz/quiz3/Module3Quiz';
import Quiz3Module4 from '../screens/quiz/quiz3/Module4Quiz';
import Quiz3Module5 from '../screens/quiz/quiz3/Module5Quiz';

import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {!isAuthenticated ? (
        // Auth Stack - Landing screen first
        <>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        // Main App Stack
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Modules" component={ModulesScreen} />
          <Stack.Screen name="Quizzes" component={QuizzesScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          
          {/* Knowledge Module Screens */}
          <Stack.Screen name="Module1" component={Module1} />
          <Stack.Screen name="Module2" component={Module2} />
          <Stack.Screen name="Module3" component={Module3} />
          <Stack.Screen name="Module4" component={Module4} />
          <Stack.Screen name="Module5" component={Module5} />
          <Stack.Screen name="Module6" component={Module6} />
          <Stack.Screen name="Module7" component={Module7} />
          <Stack.Screen name="Module8" component={Module8} />
          <Stack.Screen name="Module9" component={Module9} />
          <Stack.Screen name="Module10" component={Module10} />
          
          {/* Attitude Module Screens */}
          <Stack.Screen name="AttitudeModule1" component={AttitudeModule1} />
          <Stack.Screen name="AttitudeModule2" component={AttitudeModule2} />
          <Stack.Screen name="AttitudeModule3" component={AttitudeModule3} />
          <Stack.Screen name="AttitudeModule4" component={AttitudeModule4} />
          <Stack.Screen name="AttitudeModule5" component={AttitudeModule5} />
          <Stack.Screen name="AttitudeModule6" component={AttitudeModule6} />
          <Stack.Screen name="AttitudeModule7" component={AttitudeModule7} />
          
          {/* Behavior Module Screens */}
          <Stack.Screen name="BehaviorModule1" component={BehaviorModule1} />
          <Stack.Screen name="BehaviorModule2" component={BehaviorModule2} />
          <Stack.Screen name="BehaviorModule3" component={BehaviorModule3} />
          <Stack.Screen name="BehaviorModule4" component={BehaviorModule4} />
          <Stack.Screen name="BehaviorModule5" component={BehaviorModule5} />
          
          {/* Quiz Screens - Quiz 1 Modules */}
          <Stack.Screen name="Quiz1Selection" component={Quiz1Selection} />
          <Stack.Screen name="Module1Quiz" component={Module1Quiz} />
          <Stack.Screen name="Module2Quiz" component={Module2Quiz} />
          <Stack.Screen name="Module3Quiz" component={Module3Quiz} />
          <Stack.Screen name="Module4Quiz" component={Module4Quiz} />
          <Stack.Screen name="Module5Quiz" component={Module5Quiz} />
          
          {/* Quiz Screens - Quiz 2 Modules */}
          <Stack.Screen name="Quiz2Selection" component={Quiz2Selection} />
          <Stack.Screen name="Quiz2Module1" component={Quiz2Module1} />
          <Stack.Screen name="Quiz2Module2" component={Quiz2Module2} />
          <Stack.Screen name="Quiz2Module3" component={Quiz2Module3} />
          <Stack.Screen name="Quiz2Module4" component={Quiz2Module4} />
          <Stack.Screen name="Quiz2Module5" component={Quiz2Module5} />
          
          {/* Quiz Screens - Quiz 3 Modules */}
          <Stack.Screen name="Quiz3Selection" component={Quiz3Selection} />
          <Stack.Screen name="Quiz3Module1" component={Quiz3Module1} />
          <Stack.Screen name="Quiz3Module2" component={Quiz3Module2} />
          <Stack.Screen name="Quiz3Module3" component={Quiz3Module3} />
          <Stack.Screen name="Quiz3Module4" component={Quiz3Module4} />
          <Stack.Screen name="Quiz3Module5" component={Quiz3Module5} />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default MainNavigator;
