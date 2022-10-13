import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {newsData, placeData} from '../testData'
import NewsComponent from './NewsComponent'
import PlaceComponent from './PlaceComponent'

export default function MainScreen() {
  const [newsList, setNewsList] = useState([]) //뉴스 대아터를 저장할 공간 선언
  const [placeList, setPlaceList] = useState([])
  //데이터 불러오는 함수
  function getData() {
    //대충 데이터 가져오는 코드
    setNewsList(newsData)
    setPlaceList(placeData["spacesInfo"]["space"])
  }

  useEffect(() => {
    getData()
  }, [])//데이터를 불러오는 함수를 실행(맨 처음에)


  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.headerTitle}>오늘의 이슈</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={[styles.todayNews, {paddingLeft : 10}]}>
          {newsList.length > 0 && 
            <FlatList
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.newsForm}
              data={newsList}
              renderItem={NewsComponent}
              keyExtractor={item => item.title}
              numColumns={2}
            />
          }
        </ScrollView>
        <View style={styles.spaceForm}>
          {placeList.length > 0 && 
            (
              <View style={styles.spaceBox}>
                <Text style={[styles.headerTitle, {marginBottom : 10}]}>청년 공간</Text>
                <View style={{flexDirection : 'row', height : '75%'}}>
                  <Image
                    style={styles.spaceImage}
                    source={{uri: "https://placehold.jp/006699/cccc00/150x100.jpg"}} />
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.spaceDatas}>
                    {placeList.map(place => <PlaceComponent key={place["spcId"]["_text"]} placeData={place}/>)}
                </ScrollView>
                </View>
              </View>
            )}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view : {
    flex : 1,
    paddingVertical : 10,
  },
  headerTitle : {
    fontSize : 20,
    fontWeight : "400",
    marginTop : 10,
    marginLeft : 10
  },
  todayNews: {
    width : '100%',
    height : '55%',
  }, 
  newsForm : {
    flexGrow : 1,
    justifyContent : "center",
    alignItems : 'center',
  },
  spaceForm : {
    width : '100%',
    height : '50%',
    paddingTop : 40,
    alignItems : "center",
  },
  spaceBox : {
    borderWidth : 1,
    paddingHorizontal : 5,
    width : '90%',
    height : '70%'
  },
  spaceImage : {
    width : '45%',
    height : '100%',
    marginRight : 7
  },
  spaceDatas : {
    width : '45%',
    height : '100%',
  }
})