import React from 'react'
import UserInfoBox from './UserInfoBoxComponet'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <UserInfoBox/>
      <View style={styles.btnForm}>
        <TouchableOpacity onPress={() => console.log("스크랩")} style={styles.btn}>
        <Text style={styles.font}>스크랩</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("회원 정보 변경")} style={styles.btn}>
        <Text style={styles.font}>회원 정보 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("회원 탈퇴")} style={styles.btn}>
        <Text style={styles.font}>회원 탈퇴</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.font}>버전 0.0.1</Text>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  page : {
    flex : 1,
    margin : 15
  },
  btn : {
    marginTop : 15
  },
  btnForm : {
    flexDirection : "column",
    marginVertical : 70
  },
  font : {
    fontSize : 20,
    fontWeight : '600',
    color : "#414bb2"
  }
})