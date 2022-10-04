import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () =>
  (React$Node = () => {
    return (
      <View style={styles.container}>
        <View style={styles.topArea}>
          <View style={styles.basicArea}>환영합니다.</View>
        </View>

        <View style={styles.formArea}>
          <View style={styles.Text}>ID</View>
          <TextInput style={styles.textFormTop} placeholder={'아이디'} />
          <View style={styles.Text}>PASSWORD</View>
          <TextInput style={styles.textFormBottom} placeholder={'비밀번호'} />
        </View>

        <View style={{flex: 0.75}}>
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn}>
              <Text style={(styles.Text, {color: 'white'})}>로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 3}} />
      </View> //컨테이너 View
    );
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(7),
    paddingRight: wp(7),
  },
  topArea: {
    flex: 1,
    paddingTop: wp(2),
  },
  basicArea: {
    flex: 0.7,
    justifyContent: 'left',
    paddingTop: wp(3),
  },
  TextArea: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Text: {
    fontSize: wp('4%'),
  },

  formArea: {
    justifyContent: 'center',
    flex: 1.5,
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
  btnArea: {
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
});
export default App;
