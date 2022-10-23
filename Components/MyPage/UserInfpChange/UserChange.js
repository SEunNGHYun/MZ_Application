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

const UserChange = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [age, setAge] = useState('');

  const React$Node = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.topArea}>
            <Text style={styles.helloText}>회원가입</Text>
          </View>
          <View style={styles.formArea}>
            <Text style={styles.Text}>ID</Text>
            <TextInput
              onChangeText={setId}
              style={styles.textInput}
              placeholder={'아이디'}
              value={id}
            />
            <Text style={styles.Text}>PASSWORD</Text>
            <TextInput
              onChangeText={setPassword}
              value={password}
              style={styles.textInput}
              placeholder={'영문, 숫자 조합 5글자 이상'}
              secureTextEntry={true}
            />
            <Text style={styles.Text}>PASSWORD Confirm</Text>
            <TextInput
              value={conformPassword}
              onChangeText={setConformPassword}
              style={styles.textInput}
              placeholder={'비밀번호 확인'}
              secureTextEntry={true}
            />
            <Text style={styles.Text}>나이선택</Text>
            <TextInput style={styles.textInput} placeholder={'나이'} />
            <Text style={styles.Text}>지역</Text>
            <View style={styles.areaSelectBox}>
              <TextInput style={styles.areaBoxStyle} placeholder={'도'} />
              <TextInput style={styles.areaBoxStyle} placeholder={'시'} />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Favorite')}>
              <Text style={{color: 'white'}}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView> //컨테이너 View
    );
  };
  return React$Node();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 1.3,
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
    flex: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    height: hp(6),
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  areaBoxStyle: {
    width: '45%',
    height: hp(6),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  areaSelectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 20,
    width: '100%',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
});
export default UserChange;
