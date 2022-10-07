import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PlaceCompoent({placeData}) {
  return (
    <TouchableOpacity style={styles.placeForm} onPress={() => console.log("?")}>
        <Image style={styles.placeImage} 
          resizeMode="cover"
          source={{uri: "https://youreventsolution.com/wp-content/uploads/2015/02/200x100.gif"}}/>
            <View style={{width : "100%", height : '70%'}}>
              <Text style={styles.placeName} numberOfLines={2} ellipsizeMode={'tail'}>{placeData["spcName"]["_cdata"]}</Text>
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
    width : wp(41),
    height : '50%',
    marginRight : 10
  },
  placeImage : {
    width : '100%',
    height : 80,
    marginBottom : 7
  },
  placeName : {
    fontSize : 20,
    fontWeight : '500',
    marginBottom : 5
  },
  placeExplan1 : {
    fontSize : 10
  },
})