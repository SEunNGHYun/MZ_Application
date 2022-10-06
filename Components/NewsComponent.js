import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NewsComponent({item}) {
  return (
    <TouchableOpacity style={styles.newsForm} onPress={() =>console.log("?")}>
        <Image
          style={styles.newsImage} 
          resizeMode="cover"
          source={{uri: "https://placehold.jp/006699/cccc00/150x100.jpg"}} />
          <View style={styles.newsTextForm}>
            <Text style={styles.newsTitle} numberOfLines={1} ellipsizeMode={'tail'}>{item.title}</Text>
            <Text style={styles.newsExplan} numberOfLines={3} ellipsizeMode={'tail'}>{item.description}</Text>
          </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  newsForm : {
    width : wp('45%'),
    height : 150,
  },
  newsImage : {
    width : '100%',
    height : 80,
    marginBottom : 7
  },
  newsTitle : {
    fontSize : 20,
    fontWeight : '500',
    marginBottom : 5
  },
  newsExplan : {
    fontSize : 10
  },
  newsTextForm : {
    marginBottom : 15
  }
})