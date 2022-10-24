import React from 'react'
import { View, StyleSheet , TouchableOpacity} from 'react-native'

export default function NewsSelect({changeViewNewsData, newsIndex}) {
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
              onPress={() => changeViewNewsData(0)}
            />
            <TouchableOpacity
              style={[
                styles.newsIndexChangeCircle,
                {
                  backgroundColor: newsIndex == 1 ? 'gray' : 'white',
                },
              ]}
              onPress={() => changeViewNewsData(1)}
            />
            <TouchableOpacity
              style={[
                styles.newsIndexChangeCircle,
                {
                  backgroundColor: newsIndex == 2 ? 'gray' : 'white',
                },
              ]}
              onPress={() => changeViewNewsData(2)}
            />
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  butForm :{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  newsIndex: {
    width: 50,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newsIndexChangeCircle: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
})