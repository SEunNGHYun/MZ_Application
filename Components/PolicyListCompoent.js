import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'

export default function PolicyListCompoent({item}) {
  return (
    <TouchableOpacity style={styles.component} onPress={() => console.log("정책 터치")}>
      <View style={styles.header}>
        <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.headerFont}>{item["polyBizSjnm"]["_cdata"]}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomFont}>{item["plcyTpNm"]["_cdata"]}</Text>
        <View style={{width : "40%"}}> 
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.bottomFont}>
            기간 : {item["rqutPrdCn"]["_cdata"]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  component : {
    borderWidth : 1,
    paddingHorizontal : 10,
    paddingBottom : 8,
    height : hp(10),
    marginVertical : 10,
    justifyContent :"space-between"
  },
  bottom : {
    width : "100%",
    justifyContent : "space-between",
    flexDirection : "row"
  },
  header : {
    width : "100%",
    height : "50%",
    justifyContent :'center'
  },
  headerFont : {
    fontSize : 20,
    fontWeight : '700'
  },
  bottomFont :{}
})