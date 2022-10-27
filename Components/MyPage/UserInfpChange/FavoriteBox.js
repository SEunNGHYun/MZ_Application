import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';


export default function FavoriteBox({item, pressFavorite, selectFav}) {

  return (    
    <TouchableOpacity 
      style={[styles.selectBox, {
        borderColor : selectFav.includes(item.interest_code) ? "blue" : "black"
      }]} 
      onPress={() => pressFavorite(item.interest_code)}>
        <Image 
          style={styles.favImag}
          resizeMode="cover"
          source={{uri: item.interest_img}} />
        <View style={styles.favField}>
          <Text>{item.interest_field}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    borderWidth : 2,
    width : "47%",
    height : 160,
  },
  favImag : {
    width : '100%',
    height : 105,
  },
  favField : {
    height : 55,
    alignItems : "center",
    justifyContent: "center"
  }
})