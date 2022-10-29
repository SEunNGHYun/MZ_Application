import React , {useState, useContext} from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native'
import Header from '../Header'
import {keyContext} from '../KeyStore'
import { postRequest } from '../config'

export default function PolicyDetailScreen({route}) {
  const [access_token] = useContext(keyContext)
  const data = route.params.item

  
  async function pressScrabButton () {
    const save_data = {
      "policy_id" : data["bizId"]["_text"],
      "policy_name" :data["polyBizSjnm"]["_cdata"],
      "policy_introduce" :data["polyItcnCn"]["_cdata"],
      "policy_scale" :data["sporScvl"]["_cdata"],
      "policy_date" : data["rqutPrdCn"]["_cdata"],
      "policy_enable_age" :data["ageInfo"]["_cdata"], 
      "policy_enable_status" :data["empmSttsCn"]["_cdata"],
      "policy_enable_edu" :data["accrRqisCn"]["_cdata"],
      "policy_enable_majr" :data["majrRqisCn"]["_cdata"],
      "policy_enable_spil" :data["splzRlmRqisCn"]["_cdata"], 
      "policy_sub_way" :data["rqutProcCn"]["_cdata"],
      "policy_sub_place" :data["cnsgNmor"]["_cdata"], 
      "policy_result_date" :data["jdgnPresCn"]["_cdata"],
      "policy_support" : data["plcyTpNm"]["_cdata"] 
    }
    const response = await postRequest('/scrab', save_data, access_token)

    if (response.status == 201) {
      Alert.alert(
        "이미 스크랩 되었습니다.",
        ""
      )
    }else if (response.status == 202) {
      Alert.alert(
        "스크랩 성공",
        ""
      )
    }
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor : 'white'}}>
      <Header title="정책 상세"/>
      <View style={styles.view}>
        <View style={styles.header}>
          <View style={{width :'85%'}}>
            <Text style={styles.title} >{data["polyBizSjnm"]["_cdata"]}</Text>
          </View>
          <TouchableOpacity onPress={pressScrabButton}>
            <View><Text>스트랩</Text></View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.introduce}>
            <Text style={styles.subTitle}>정책 소개</Text>
            <Text style={styles.defaultFont}>{data["polyItcnCn"]["_cdata"]}</Text>
          </View>
          <Text style={styles.defaultFont}>지원 규모 : {data["sporScvl"]["_cdata"]} </Text>
          <Text style={styles.defaultFont}>신청기간 : {data["rqutPrdCn"]["_cdata"]}</Text>
          
          <View style={styles.termForm}>
            <Text style={styles.subTitle}>참여조건</Text>
            <Text style={styles.defaultFont}>연령 : {data["ageInfo"]["_cdata"]}</Text>
            <Text style={styles.defaultFont}>취업상태 : {data["empmSttsCn"]["_cdata"]}</Text>
            <Text style={styles.defaultFont}>학력 : {data["accrRqisCn"]["_cdata"]}</Text>
            <Text style={styles.defaultFont}>전공 : {data["majrRqisCn"]["_cdata"]}</Text>
            <Text style={styles.defaultFont}>특화분야 : {data["splzRlmRqisCn"]["_cdata"]}</Text>
          </View>

          <Text style={styles.subTitle}>신청방법</Text>
          <Text style={styles.defaultFont}>{data["rqutProcCn"]["_cdata"]}</Text>
          <View>
            <Text style={styles.defaultFont}>신청기관 : {data["cnsgNmor"]["_cdata"]}</Text>
            <Text style={styles.defaultFont}>신청발표 : {data["jdgnPresCn"]["_cdata"]}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view : {
    flex: 1,
    backgroundColor : 'white',
    marginHorizontal : 10
  },
  title : {
    fontSize : 30,
    marginVertical : 20,
    fontWeight : '800'
  },
  scrabTrue : {
    width : 40,
    height : 40,
    backgroundColor : 'blue'
  },
  scrabFalse : {
    width : 40,
    height : 40,
    backgroundColor : 'red'
  },
  header : {
    flexDirection : "row", 
    width : '100%',
    alignItems : 'center', 
    justifyContent : 'space-between',
    marginBottom : 20
  },
  introduce :{
    marginBottom : 10
  },
  defaultFont : {
    fontSize : 15,
    marginBottom : 10
  },
  termForm : {
    marginVertical : 20
  },
  subTitle : {
    fontSize : 18,
    fontWeight : '600',
    marginBottom : 10
  }
})