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
