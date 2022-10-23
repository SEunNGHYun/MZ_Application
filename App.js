import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import FavoriteSelectScreen from './Components/FavoriteSelectScreen';
import MainScreen from './Components/MainScreen';
import MypageScreen from './Components/MyPageScreen';
import PolicyDetailScreen from './Components/PolicyDetailScreen';
import PolicyListScreen from './Components/PolicyListScreen';

import KeyProvider from './Components/KeyStore' 




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PolicyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={PolicyListScreen} />
      <Stack.Screen name="Detail" component={PolicyDetailScreen} />
    </Stack.Navigator>
  );
};

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myinfo" component={MypageScreen} />
      <Stack.Screen name="Scrap" component={ScrapStack} />
      <Stack.Screen
        name="ChangeUserInfo"
        component={ChangeUserInfoStack}
      />
    </Stack.Navigator>
  );
};
const ScrapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScrapList" component={PolicyListScreen} />
      <Stack.Screen name="ScrapDetail" component={PolicyDetailScreen} />
    </Stack.Navigator>
  ); //여기 리스트는 스크랩 해놓은거만
};

const ChangeUserInfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangeUserInfoSignup"
        component={SignupScreen}
      />
      <Stack.Screen
        name="ChangeUserInfoSignup"
        component={FavoriteSelectScreen}
      />
    </Stack.Navigator>
  ); //여기 유저정보변경은 기존에서 바꾸는 회원가입창
};


const TitleStack = () => {
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


export default function App() {
  const React$Node = () => {
    return (
        <NavigationContainer>
          <KeyProvider>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Favorite" component={FavoriteSelectScreen} />
              <Stack.Screen name="Title" component={TitleStack} />
            </Stack.Navigator>
          </KeyProvider>
        </NavigationContainer>
    );
  };
  return React$Node();
}
