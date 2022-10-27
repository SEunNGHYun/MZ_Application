import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>뒤로가기</Text> 
      </TouchableOpacity>
      <Text>{title}</Text>
      <View/>
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-between',
    borderBottomWidth : 1,
    height : 40,
    borderColor : 'grey'
  }
})