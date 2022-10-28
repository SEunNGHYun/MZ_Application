import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back_icon.png')} style={styles.size}/>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.size}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-between',
    borderBottomWidth : 1,
    height : 55,
    paddingHorizontal : 15,
    borderColor : 'grey'
  },
  size : {width : 35, height : 35},
  title : {
    fontSize : 20,
    fontWeight : '500'
  }
})