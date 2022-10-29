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
        borderColor : selectFav.includes(item.interest_code) ? '#609ad8' : "gray"
      }]} 
      onPress={() => pressFavorite(item.interest_code)}>
        <Image 
          style={styles.favImag}
          resizeMode="cover"
          source={{uri: item.interest_img}} />
        <View style={styles.favField}>
        <Text style={{
            color : selectFav.includes(item.interest_code) ? '#609ad8' : "black"
          }}>{item.interest_field}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    borderWidth : 3,
    width : "47%",
    height : 140,
    marginVertical :10 
  },
  favImag : {
    width : '100%',
    height : 105,
  },
  favField : {
    height : 30,
    alignItems : "center",
    justifyContent: "center"
  }
})