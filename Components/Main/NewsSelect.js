import React from 'react'
import { View, StyleSheet , TouchableOpacity, Platform} from 'react-native'

export default function NewsSelect({changeViewNewsData, newsIndex, randomImageChoice}) {
  const pressOption = (index) => {
    changeViewNewsData(index)
    randomImageChoice()
  }
  
  return (
    <View style={styles.butForm}>
          <View style={styles.newsIndex}>
            <TouchableOpacity
              style={[
                styles.newsIndexChangeCircle,
                {
                  backgroundColor: newsIndex == 0 ? 'gray' : 'white',
                },
              ]}
              onPress={() => pressOption(0)}
            />
            <TouchableOpacity
              style={[
                styles.newsIndexChangeCircle,
                {
                  backgroundColor: newsIndex == 1 ? 'gray' : 'white',
                },
              ]}
              onPress={() => pressOption(1)}
            />
            <TouchableOpacity
              style={[
                styles.newsIndexChangeCircle,
                {
                  backgroundColor: newsIndex == 2 ? 'gray' : 'white',
                },
              ]}
              onPress={() => pressOption(2)}
            />
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  butForm :{
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop : 0
  },
  newsIndex: {
    width: 50,
    height: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newsIndexChangeCircle: {
    width: 11,
    height: 11,
    borderWidth: 1,
    borderRadius: 10,
  },
})