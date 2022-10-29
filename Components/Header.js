import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.touhableSize} onPress={() => navigation.goBack()}>
        <Image
        resizeImage="cotain" 
        source={require('../assets/back_icon.png')} style={styles.size}/>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.touhableSize}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-between',
    borderBottomWidth : 0.5,
    height : 55,
    paddingHorizontal : 15,
    borderColor : 'gray'
  },
  touhableSize : {width : 40, height : 40, alignItems : 'center', justifyContent : "center"},
  size : {width : 25, height : 25},
  title : {
    fontSize : 18,
    fontWeight : '500'
  }
})