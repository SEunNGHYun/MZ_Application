import React , {useState} from 'react'
import {policyTestData} from '../testData'
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function PolicyDetailScreen() {
  const [toggleScrab, setToggleScrab] = useState(false)
  const data = policyTestData["data"]["empsInfo"]["emp"][2]
  
  function pressScrabButton () {
    setToggleScrab(!toggleScrab)
  }
  
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <View style={{width :'85%'}}>
          <Text style={styles.title} >{data["polyBizSjnm"]["_cdata"]}</Text>
        </View>
        <TouchableOpacity onPress={pressScrabButton}>
          {toggleScrab ? <View style={styles.scrabTrue}/> : <View style={styles.scrabFalse} />}
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