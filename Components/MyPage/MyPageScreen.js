import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import UserInfoBox from './UserInfoBoxComponet';
import { keyContext }from '../KeyStore'
import { getRequest, deleteRequest }from '../config'


export default function MyPageScreen({navigation}) {
  const [access_token] = useContext(keyContext)
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [interest, setInterest] = useState([])
  
  async function getUserData () {
    const response = await getRequest('/user/info', access_token)
    if(response.status === 200){
      setId(response["info"]["user_id"])
      setAge(response["info"]["user_age"])
      setCity(response["info"]["user_city"])
      setState(response["info"]["user_state"])
      setInterest(response["info"]["interests"])
    }
  }

  async function leaveUser () {
    const response = await getRequest('/user/info', access_token)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <SafeAreaView style={styles.page}>
      <View style={{flex: 1 , paddingHorizontal : 15}}>
        <UserInfoBox id={id} fav={interest} age={age} state={state} city={city} />
        <View style={styles.btnForm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Scrap')}
            style={styles.btn}>
            <Text style={styles.font}>스크랩</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangeUserInfo")}
            style={styles.btn}>
            <Text style={styles.font}>회원 정보 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('회원 탈퇴')}
            style={styles.btn}>
            <Text style={styles.font}>회원 탈퇴</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.font}>버전 0.0.1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor : 'white'
  },
  btn: {
    marginTop: 15,
  },
  btnForm: {
    flexDirection: 'column',
    marginVertical: 70,
  },
  font: {
    fontSize: 20,
    fontWeight: '600',
    color: '#414bb2',
  },
});