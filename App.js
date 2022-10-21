import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import favoriteScreen from './Components/favoriteScreen';
import MainScreen from './Components/MainScreen';
import MypageScreen from './Components/MyPageScreen';
import PolicyDetailScreen from './Components/PolicyDetailScreen';
import PolicyListScreen from './Components/PolicyListScreen';

import {
  NavigationContainer,
  StackActions,
  TabActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const titleStack = ({Navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBarOptions={{
        activeTintColor: '#7DD421',
        inactiveTintColor: '#222222',
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainScreen}
        options={{title: '메인화면'}}
      />
      <Tab.Screen
        name="ListStack"
        component={PolicyListScreen}
        options={{title: '정책리스트'}}
      />
      <Tab.Screen
        name="MypageStack"
        component={MypageScreen}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};

const mainStack = () => {
  return (
    <Stack.Navigator>
      <mainStack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
const policyListStack = () => {
  return (
    <Stack.Navigator>
      <policyListStack.Screen name="List" component={PolicyListScreen} />
      <policyListStack.Screen name="Detail" component={PolicyDetailScreen} />
    </Stack.Navigator>
  );
};
const myPageStack = () => {
  return (
    <Stack.Navigator>
      <myPageStack.Screen name="scrap" component={PolicyListScreen} />
      <myPageStack.Screen name="changeUserInfo" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const React$Node = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="favorite" component={favoriteScreen} />
          <Stack.Screen name="Title" component={titleStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return React$Node();
}

const styles = StyleSheet.create({});
