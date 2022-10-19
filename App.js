import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import favoriteScreen from './Components/favoriteScreen';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const React$Node = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="favorite" component={favoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return React$Node();
}

const styles = StyleSheet.create({});
