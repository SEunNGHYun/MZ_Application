import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const LoginScreen = () =>
  (React$Node = () => {
    return (
      <View style={styles.container}>
        <View style={styles.basicArea}>환영합니다.</View>
        <View style={styles.loginArea}>
          <View style={styles.bottonArea}>
            <View style={styles.Text}>ID</View>
            <TextInput style={styles.loginBotton} placeholder={'아이디'} />
            <View style={styles.Text}>PASSWORD</View>
            <TextInput style={styles.passwordBottom} placeholder={'비밀번호'} />
          </View>
        </View>
      </View> // 컨테이너 view
    );
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(8),
    paddingRight: wp(8),
  },
  topArea: {},
  basicArea: {
    flex: 1,
    justifyContent: 'left',
  },
  loginArea: {
    flex: 3,
  },
  bottonArea: {},
  loginBotton: {},
  passwordBottom: {},
  creatAccount: {},
  Text: {
    justifyContent: 'left',
    fontSize: wp('4%'),
  },
});
