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
  ScrollView,
} from 'react-native';

const App = () => {
  const React$Node = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
          <Text style={styles.helloText}>관심분야 선택 (중복)</Text>
        </View>
        <View style={styles.middleArea}>
          <ScrollView>
            <View style={styles.selectArea}>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
            </View>
            <View style={styles.selectArea}>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
            </View>
            <View style={styles.selectArea}>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
            </View>
            <View style={styles.selectArea}>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
              <TouchableOpacity style={styles.favoritBtn}></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.btnArea2}>
          <TouchableOpacity style={styles.btn}>
            <Text style={(styles.Text, {color: 'white'})}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      //컨테이너 View
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
    flex: 1,
    justifyContent: 'center',
  },
  middleArea: {
    flex: 5,
  },
  helloText: {
    fontSize: 30,
    paddingLeft: 10,
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
  selectArea: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
  },
  btn: {
    width: '100%',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
  favoritBtn: {
    width: 170,
    height: 170,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  btnArea2: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
