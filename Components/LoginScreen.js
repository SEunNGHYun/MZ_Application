import React, {useState, useContext} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useKeyContext }from './KeyStore'
import { postRequest }from './config'

const App = ({navigation}) => {
  //const [, setKeyContext] = useKeyContext()
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  async function login () {
    
    if (id.length > 0 && password.length > 0){
      const loginData = { user_id : id, user_password : password }
      try {
        const response = await postRequest('/user/login', loginData)
        if (response.status == 201) {
          //로그인 성공 access token 저장 
          AsyncStorage.setItem('access_token', response.access_token)
          AsyncStorage.setItem('refresh_token', response.refresh_token)
          
          //setKeyContext(response.access_token)
          navigation.navigate("")
          //화면 이동
        }else if (response.status == 202) {
          //에러는 없지만 존재하지 않는 회원일 때
        }
      
      }catch(err) {
        console.log(err)
      }
    }else{
      //비번 다시 치도록 경고창
    }
  }

  function move () {
    navigation.navigate("Signup")
  }

  const React$Node = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topArea}>
          <Text style={styles.helloText}>환영합니다.</Text>
        </View>

        <View style={styles.formArea}>

          <Text style={styles.Text}>ID</Text>
          <TextInput 
          style={styles.textForm} 
          onChangeText={setId}//입력이 들어올때마 id 변수에 저장돰
          value={id}
          placeholder={'아이디'} />

          <Text style={styles.Text}>PASSWORD</Text>
          <TextInput 
          style={styles.textForm}
          onChangeText={setPassword}//입력이 들어올때마 password 변수에 저장돰
          secureTextEntry={true}//입력된 값을 안보이게 해줌
          value={password} 
          placeholder={'비밀번호'} />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Title')}>
            <Text style={(styles.Text, {color: 'white'})}>로그인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnArea2}>
          <TouchableOpacity style={styles.grayBtn} onPress={move}>
            <Text style={(styles.Text, {color: '#9b9b9b'})}>회원가입</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.grayBtn} onPress={move}>
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
  formArea: {
    flex: 4,
    justifyContent: 'space-between',
  },
  textForm: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'black',
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
    flex: 3,
    justifyContent: 'flex-start',
  },
  grayBtn: {
    paddingTop: 18,
  },
});
export default App;

