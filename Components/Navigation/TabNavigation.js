
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../Main/MainScreen'
import NewsDetailScreen from '../Main/NewsDetail'

import PolicyListScreen from '../PolicyList/PolicyListScreen'
import PolicyDetailScreen from '../PolicyList/PolicyDetailScreen'

import MyPageScrb from '../MyPage/Scrab/MyPolicyListScreen'
import MyPageScrbDetail from '../MyPage/Scrab/MyPolicyDetailScreen'

import MyPageInfoChange from '../MyPage/UserInfpChange/UserChange'
import MyPageFavChange from '../MyPage/UserInfpChange/ChangeFavoriteSelectScreen'

import MyPageScreen from '../MyPage/MyPageScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="NewsDetail"  component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};

const PolicyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={PolicyListScreen} />
      <Stack.Screen name="Detail"  component={PolicyDetailScreen} />
    </Stack.Navigator>
  );
};

const ScrapStack = () => {
  return (
    <Stack.Navigator initialRouteName="MyScrapList" >
      <Stack.Screen name="MyScrapList" options={{ headerShown: false }}   component={MyPageScrb} />
      <Stack.Screen name="MyScrapDetail" options={{ headerShown: false }}   component={MyPageScrbDetail} />
    </Stack.Navigator>
  ); //여기 리스트는 스크랩 해놓은거만
};

const ChangeUserInfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangeUserInfo"
        options={{ headerShown: false }}
        component={MyPageInfoChange}
      />
      <Stack.Screen
        name="ChangeUserFav"
        options={{ headerShown: false }}
        component={MyPageFavChange}
      />
    </Stack.Navigator>
  ); //여기 유저정보변경은 기존에서 바꾸는 회원가입창
};

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myinfo"
      options={{ headerShown: false }} 
      component={MyPageScreen} />
      <Stack.Screen name="Scrab" component={ScrapStack} />
      <Stack.Screen
        name="ChangeUserInfo"
        options={{ headerShown: false }}
        component={ChangeUserInfoStack}
      />
    </Stack.Navigator>
  );
};


export default function  TitleStack ()  {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBarOptions={{
        activeTintColor: '#7DD421',
        inactiveTintColor: '#222222',
      }}>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ListStack"
        component={PolicyListStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MypageStack"
        component={MyPageStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
