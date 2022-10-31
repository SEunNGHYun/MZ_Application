import React, {useState, useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { keyContext }from '../KeyStore'
import { postRequest }from '../config'

const App = ({navigation}) => {
  const [_ , setKeyStore] = useContext(keyContext)
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  async function login () {
    
    if (id.length > 0 && password.length > 0){
      const loginData = { user_id : id, user_password : password }
      try {
        const response = await postRequest('/user/login', loginData)
        if (response.status == 201) {
          //로그인 성공 access token 저장 
          setKeyStore(response.access_token)
          navigation.replace('Title')
          //화면 이동
        }else if (response.status == 202) {
          //에러는 없지만 존재하지 않는 회원일 때
          Alert.alert(
            '존재하지 않는 회원입니다.',
            '회원가입해주세요'
          ,[
            {
              title : '네',
              onPress: () => console.log('(* ^ *)')
            }
          ])
        }
      
      }catch(err) {
        console.log(err)
      }
    }else{
      //비번 다시 치도록 경고창
      Alert.alert(
        '다시 입력해주세요',
        ''
      ,[
        {
          title : '네',
          onPress: () => console.log('(* ^ *)')
        }
      ])
    }
  }

  function move () {
    navigation.navigate("Signup")
  }

  const React$Node = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, backgroundColor : 'white'}}>
          <View style={styles.container}>
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
                onPress={login}>
                <Text style={(styles.Text, {color: 'white'})}>로그인</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.btnArea2}>
              <TouchableOpacity style={styles.grayBtn} onPress={move}>
                <Text style={(styles.Text, {color: '#9b9b9b'})}>회원가입 하기</Text>
              </TouchableOpacity>


            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
       //컨테이너 View
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
    height: hp(30),
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 35,
    color : '#609ad8'
  },
  TextArea: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  formArea: {
    height : hp(35),
    justifyContent: 'center'
  },
  textForm: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'black',
    width: '100%',
    height: 48,
    marginTop : 5,
    marginBottom : 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn: {
    width: '100%',
    height: Platform.OS == "ios" ? 48: 45 ,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#609ad8',
  },
  btnArea2: {
    marginTop : 13,
    alignItems : "flex-end",
    justifyContent: 'flex-start',
  },
  grayBtn: {
    
  },
});
export default App;