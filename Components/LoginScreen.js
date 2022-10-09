import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  const React$Node = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
          <Text style={styles.helloText}>환영합니다.</Text>
        </View>

        <View style={styles.formArea}>
          <Text style={styles.Text}>ID</Text>
          <TextInput style={styles.textFormTop} placeholder={'아이디'} />
          <Text style={styles.Text}>PASSWORD</Text>
          <TextInput style={styles.textFormBottom} placeholder={'비밀번호'} />

          <TouchableOpacity style={styles.btn}>
            <Text style={(styles.Text, {color: 'white'})}>로그인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnArea2}>
          <TouchableOpacity style={styles.grayBtn}>
            <Text style={(styles.Text, {color: '#9b9b9b'})}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grayBtn}>
            <Text style={(styles.Text, {color: '#9b9b9b'})}>
              비밀번호를 잊으셨나요?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView> //컨테이너 View
    );
  };
  return React$Node();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 4,
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 30,
  },
  TextArea: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Text: {},

  formArea: {
    flex: 4,
    justifyContent: 'space-between',
  },
  textFormTop: {
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormBottom: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn: {
    width: '100%',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
  btnArea2: {
    flex: 4,
    justifyContent: 'flex-start',
  },
  grayBtn: {
    paddingTop: 18,
  },
});
export default App;
