import React, {useState, Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PickerComponent from './picker';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SignupScreen = ({navigation}) => {
  const [selectedAge, setSelectedAge] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const React$Node = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
          <Text style={styles.helloText}>회원가입.</Text>
        </View>
        <ScrollView>
          <Text style={styles.Text}>ID</Text>
          <View style={styles.idArea}>
            <TextInput style={styles.textFormTop} placeholder={'아이디'} />
            <TouchableOpacity style={styles.checkBtn}>
              <Text style={(styles.Text, {color: 'black'})}>중복체크</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formArea}>
            <Text style={styles.Text}>PASSWORD</Text>
            <TextInput
              style={styles.textFormBottom}
              placeholder={'영문, 숫자 조합 5글자 이상'}
            />
            <Text style={styles.Text}>PASSWORD Confirm</Text>
            <TextInput
              style={styles.textPasswordCheckBottom}
              placeholder={'비밀번호 확인'}
            />
            <Text style={styles.Text}>나이선택</Text>
            <View>
              <PickerComponent />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('favorite')}>
          <Text style={(styles.Text, {color: 'white'})}>다음</Text>
        </TouchableOpacity>
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
    flex: 2,
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
  idArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  formArea: {
    flex: 4,
    justifyContent: 'space-between',
  },
  textFormTop: {
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    flex: 7,
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  textFormBottom: {
    borderWidth: 2,
    borderTopWidth: 2,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textPasswordCheckBottom: {
    borderWidth: 2,
    borderTopWidth: 2,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
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
  btnAge: {
    width: '100%',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkBtn: {
    flex: 3,
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderTopWidth: 2,
    marginLeft: 10,
  },

  btnArea2: {
    flex: 4,
    justifyContent: 'flex-start',
  },
});
export default SignupScreen;
