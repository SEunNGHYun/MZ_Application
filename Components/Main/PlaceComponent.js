import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PlaceCompoent({placeData}) {
  return (
    <TouchableOpacity style={styles.placeForm} onPress={() => console.log('detail창으로 이동')}>
        <View style={{width : "100%", marginBottom : 10}}>
          <Text style={styles.placeName} numberOfLines={1} ellipsizeMode={'tail'}>{placeData["spcName"]["_cdata"]}</Text>
        </View>
        <View style={{flexDirection : "row", justifyContent :"space-between"}}>
          <Text style={styles.placeExplan} numberOfLines={1} ellipsizeMode={'tail'}>{placeData["spcCost"]["_cdata"]}</Text>
          <Text style={styles.placeExplan} numberOfLines={2} ellipsizeMode={'tail'}>{placeData["areaSggn"]["_cdata"]}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  placeForm : {
    width : '100%',
    padding : 5,
    borderWidth : 1,
    marginBottom : 10,
  },
  placeName : {
    fontSize : 18,
    fontWeight : '700',
    marginBottom : 5
  },
  placeExplan1 : {
    fontSize : 10
  },
})