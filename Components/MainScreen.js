import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'
import { getRequest, access_token } from './config'
import NewsComponent from './NewsComponent'
import PlaceComponent from './PlaceComponent'

export default function MainScreen() {
  const [viewNewsList, setViewNewsList] = useState([]) //뉴스 대아터를 저장할 공간 선언
  const [newsIndex, setNewsIndex] = useState(0)
  const [placeList, setPlaceList] = useState([])
  //데이터 불러오는 함수
  async function getData() {
    const response = await getRequest('/main', access_token)
    //대충 데이터 가져오는 코드

    if (response.status == 200) {
      const newsData = response["news_data"]["items"]
      const sliceNewData = [newsData.slice(0,4), newsData.slice(4, 8), newsData.slice(8, 12)]
      setViewNewsList(sliceNewData)
      setPlaceList(response["place_data"]["spacesInfo"]["space"])
    }
  }

  function changeViewNewsData (index) {
    setNewsIndex(index)
  }

  useEffect(() => {
    getData()
  }, [])//데이터를 불러오는 함수를 실행(맨 처음에)


  return (
    <SafeAreaView style={styles.view}>
      <Text style={[styles.headerTitle, {marginLeft : 18}]}>오늘의 이슈</Text>
        <View 
          style={styles.todayNews}>
          {viewNewsList.length > 0 && 
            <FlatList
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.newsForm}
              data={viewNewsList[newsIndex]}
              renderItem={NewsComponent}
              keyExtractor={item => item.title}
              numColumns={2}
            />
          }
          <View style={{ alignItems : 'center', justifyContent : 'center', marginBottom : 20}}>
            <View style={styles.newsIndex}>
              <TouchableOpacity 
              style={[styles.newsIndexChangeCircle, {
                backgroundColor : newsIndex == 0 ?  'gray' : 'white'
              }]} onPress={() => changeViewNewsData(0)}/>
              <TouchableOpacity 
              style={[styles.newsIndexChangeCircle, {
                backgroundColor : newsIndex == 1 ? 'gray' : 'white'
              }]} onPress={() => changeViewNewsData(1)}/>
              <TouchableOpacity 
              style={[styles.newsIndexChangeCircle, {
                backgroundColor : newsIndex == 2 ? 'gray' : 'white'
              }]} onPress={() => changeViewNewsData(2)}/>
            </View>
          </View>
        </View>
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
  },
  todayNews: {
    width : '100%',
    height : '50%',
  },
  newsForm : {
    flexGrow : 1,
    justifyContent : "center",
    alignItems : 'center',
  },
  spaceForm : {
    width : '100%',
    height : '50%',
    paddingTop : 30,
    alignItems : "center",
  },
  spaceBox : {
    borderWidth : 1,
    paddingRight : 5,
    paddingLeft : 10,
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
  },
  newsIndex : {
    width : 50, 
    height :10, 
    flexDirection: 'row', 
    justifyContent : "space-between",
  },
  newsIndexChangeCircle : {
    width : 10,
    height : 10,
    borderWidth : 1,
    borderRadius : 10
  }
})




