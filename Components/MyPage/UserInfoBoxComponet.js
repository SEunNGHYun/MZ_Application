import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function UserInfoBoxComponet({id, age, state, city, fav}) {
  return (
    <View style={styles.box}>
      <View />
      <View style={styles.iconNInfos}>
        <Image source={require('../../imgs/duck_icon.jpg')} style={styles.icon}/>
        <View style={styles.infos}>
          <Text style={styles.font}>{id}</Text>
          <View style={{flexDirection : "row"}}>
            <Text style={styles.font}>{state} </Text>
            <Text style={styles.font}>{city}</Text>
          </View>
          <Text style={styles.font}>{age}</Text>
        </View>
      </View>
      <View style={styles.intersets}>
        <Text style={styles.font}>관심 분야 </Text>
        <Text numberOfLines={2} style={styles.font}>{fav}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    borderWidth : 2,
    borderRadius : 40,
    marginTop : 40,
    height : '25%',
    alignItems : "center",
    justifyContent : 'space-evenly'
  },
  iconNInfos : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  icon : {
    borderWidth : 1,
    borderColor : "black",
    borderRadius : 50,
    width : 50,
    height : 50,
    marginRight : 10
  },
  infos :{
    justifyContent : 'space-between'
  },
  font : {
    fontSize : 15,
    fontWeight : '500' 
  },
  intersets : {
    alignItems :'center',
    width : '56%',
  }
})