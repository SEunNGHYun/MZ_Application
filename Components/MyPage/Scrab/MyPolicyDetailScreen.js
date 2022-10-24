import React , {useState, useContext} from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { keyContext} from '../../KeyStore'
import { deleteRequest } from '../../config'

export default function MyPolicyDetailScreen({route}) {
  const [access_token] = useContext(keyContext)
  const data = route.params.item

  
  async function pressScrabCancelButton () {
    const response = await deleteRequest(`/scrab?policy_id=${data["policy_id"]}`, access_token)

    if (response.status == 201) {
      console.log("이미 삭제함")
    }else if (response.status == 202) {
      console.log("스크랩 삭제됨")
    }
  }
  
  return (
    <SafeAreaView style={{flex : 1, backgroundColor: 'white'}}>
      <View style={styles.view}>
      <View style={styles.header}>
        <View style={{width :'85%'}}>
          <Text style={styles.title} >{data["policy_name"]}</Text>
        </View>
        <TouchableOpacity onPress={pressScrabCancelButton}>
          <View style={{width : 50, alignItems :"center"}}><Text numberOfLines={2}>스트랩 취소</Text></View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.introduce}>
          <Text style={styles.subTitle}>정책 소개</Text>
          <Text style={styles.defaultFont}>{data["policy_date"]}</Text>
        </View>
        <Text style={styles.defaultFont}>지원 규모 : {data["policy_scale"]}</Text>
        <Text style={styles.defaultFont}>신청기간 : {data["rqutPrdCn"]}</Text>
        
        <View style={styles.termForm}>
          <Text style={styles.subTitle}>참여조건</Text>
          <Text style={styles.defaultFont}>연령 : {data["policy_enable_age"]}</Text>
          <Text style={styles.defaultFont}>취업상태 : {data["policy_enable_status"]}</Text>
          <Text style={styles.defaultFont}>학력 : {data["policy_enable_edu"]}</Text>
          <Text style={styles.defaultFont}>전공 : {data["policy_enable_majr"]}</Text>
          <Text style={styles.defaultFont}>특화분야 : {data["policy_enable_spil"]}</Text>
        </View>

        <Text style={styles.subTitle}>신청방법</Text>
        <Text style={styles.defaultFont}>{data["policy_sub_way"]}</Text>
        <View>
          <Text style={styles.defaultFont}>신청기관 : {data["policy_sub_place"]}</Text>
          <Text style={styles.defaultFont}>신청발표 : {data["policy_result_date"]}</Text>
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view : {
    flex: 1,
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