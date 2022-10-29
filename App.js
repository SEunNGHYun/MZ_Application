import React , {useEffect}from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import KeyProvider from './Components/KeyStore'

import LoginScreen from './Components/Login/LoginScreen'
import SignupScreen from './Components/Signup/SignupScreen'
import FavoriteSelectScreen from './Components/Signup/FavoriteSelectScreen';
import Title from './Components/Navigation/TabNavigation'

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const React$Node = () => {
    return (
        <NavigationContainer>
          <KeyProvider>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
              <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
              <Stack.Screen name="Favorite" options={{ headerShown: false }} component={FavoriteSelectScreen} />
              <Stack.Screen name="Title" options={{ headerShown: false }} component={Title} />
            </Stack.Navigator>
          </KeyProvider>
        </NavigationContainer>
    );
  };
  return React$Node();
}
