import React from 'react'
import { View, Text , StyleSheet} from 'react-native'

export default function PlaceCompoent() {
  return (
    <View style={styles.form}>
      <Image
        style={styles.placeImage} 
        source={{uri: "https://placehold.jp/006699/cccc00/150x100.jpg"}} />
      <Text style={styles.placeName}>장소</Text>
      <View>
        <Text style={styles.placeExplan}>유료</Text>
        <Text style={styles.placeExplan}>운영중</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  form: {
    backgroundColor :'red',
  },
  placeImage : {
    width: 150,
    height : 100
  },
  placeName : {
    fontSize : 20,
    fontWeight : '500'
  },
  placeExplan : {
    fontSize : 10
  }
})