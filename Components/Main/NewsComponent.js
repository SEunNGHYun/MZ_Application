import React, {useCallback} from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity , Linking} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { news } from '../../imgs/imgs'

export default function NewsComponent({item, index, rdmImgs, navigation}) {
  const title = item.title.replace("&apos;", '').replace("&quot;", '').replace("<b>", '').replace("</b>", "").replace("&apos;", '').replace("&quot;", '')

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(item.link);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(item.link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${item.link}`);
    }
  }, [item]);


  return (
    <TouchableOpacity style={styles.newsForm} onPress={handlePress}>
        <Image
          style={styles.newsImage} 
          resizeMode="stretch"
          source={{uri: rdmImgs[index] }} />
          <View style={styles.newsTextForm}>
            <Text style={styles.newsTitle} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
            <Text style={styles.newsExplan} numberOfLines={2} ellipsizeMode={'tail'}>{item.description}</Text>
          </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  newsForm : {
    width : wp('45%'),
    height : 150,
    margin : 5
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
    marginBottom : 10
  }
})