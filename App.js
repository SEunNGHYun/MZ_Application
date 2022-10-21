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

const TitleStack = ({Navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBarOptions={{
        activeTintColor: '#7DD421',
        inactiveTintColor: '#222222',
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{title: '메인화면'}}
      />
      <Tab.Screen
        name="ListStack"
        component={PolicyListStack}
        options={{title: '정책리스트'}}
      />
      <Tab.Screen
        name="MypageStack"
        component={MyPageStack}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};

const PolicyListStack = ({Navigation}) => {
  return (
    <Stack.Navigator>
      <PolicyListStack.Screen name="List" component={PolicyListScreen} />
      <PolicyListStack.Screen name="Detail" component={PolicyDetailScreen} />
    </Stack.Navigator>
  );
};

const MyPageStack = ({Navigation}) => {
  return (
    <Stack.Navigator>
      <MyPageStack.Screen name="Scrap" component={ScrapStack} />
      <MyPageStack.Screen
        name="ChangeUserInfo"
        component={ChangeUserInfoStack}
      />
    </Stack.Navigator>
  );
};
const ScrapStack = ({Navigation}) => {
  return (
    <Stack.Navigator>
      <ScrapStack.Screen name="ScrapList" component={PolicyDetailScreen} />
      <ScrapStack.Screen name="ScrapDetail" component={PolicyDetailScreen} />
    </Stack.Navigator>
  ); //여기 리스트는 스크랩 해놓은거만
};
const ChangeUserInfoStack = ({Navigation}) => {
  return (
    <Stack.Navigator>
      <ChangeUserInfoStack.Screen
        name="changeUserInfoSignup"
        component={SignupScreen}
      />
      <ChangeUserInfoStack.Screen
        name="changeUserInfoSignup"
        component={favoriteScreen}
      />
    </Stack.Navigator>
  ); //여기 유저정보변경은 기존에서 바꾸는 회원가입창
};

export default function App() {
  const React$Node = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="favorite" component={favoriteScreen} />
          <Stack.Screen name="Title" component={TitleStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return React$Node();
}

const styles = StyleSheet.create({});
