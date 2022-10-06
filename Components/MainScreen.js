import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NewsComponent from './NewsComponent'
import PlaceComponent from './PlaceCompoent'

export default function MainScreen() {
  const [newsList, setNewsList] = useState([]) //뉴스 대아터를 저장할 공간 선언
  const [placeList, setPlaceList] = useState([])
  //데이터 불러오는 함수
  function getData() {
    //대충 데이터 가져오는 코드
    setNewsList([{
      "title": "신한카드, <b>MZ</b>고객 겨냥한 &apos;Fit 카드&apos; 출시",
      "originallink": "http://www.sportsseoul.com/news/read/1165960?ref=naver",
      "link": "https://n.news.naver.com/mnews/article/468/0000888713?sid=101",
      "description": "사진|신한카드 신한카드가 빅데이터 분석 역량을 바탕으로 <b>MZ</b>고객을 겨냥한 ‘신한카드 핏(Fit)’을 출시했다. 신한카드 핏은 다년간 누적된 데이터 분석을 통해 <b>MZ</b>고객에게 딱 맞는(Fit) 혜택을 제공하겠다는 의미를... ",
      "pubDate": "Thu, 06 Oct 2022 08:38:00 +0900"
    }, {
      "title": "1신한카드, <b>MZ</b>고객 겨냥한 &apos;Fit 카드&apos; 출시",
      "originallink": "http://www.sportsseoul.com/news/read/1165960?ref=naver",
      "link": "https://n.news.naver.com/mnews/article/468/0000888713?sid=101",
      "description": "사진|신한카드 신한카드가 빅데이터 분석 역량을 바탕으로 <b>MZ</b>고객을 겨냥한 ‘신한카드 핏(Fit)’을 출시했다. 신한카드 핏은 다년간 누적된 데이터 분석을 통해 <b>MZ</b>고객에게 딱 맞는(Fit) 혜택을 제공하겠다는 의미를... ",
      "pubDate": "Thu, 06 Oct 2022 08:38:00 +0900"
    },{
      "title": "3신한카드, <b>MZ</b>고객 겨냥한 &apos;Fit 카드&apos; 출시",
      "originallink": "http://www.sportsseoul.com/news/read/1165960?ref=naver",
      "link": "https://n.news.naver.com/mnews/article/468/0000888713?sid=101",
      "description": "사진|신한카드 신한카드가 빅데이터 분석 역량을 바탕으로 <b>MZ</b>고객을 겨냥한 ‘신한카드 핏(Fit)’을 출시했다. 신한카드 핏은 다년간 누적된 데이터 분석을 통해 <b>MZ</b>고객에게 딱 맞는(Fit) 혜택을 제공하겠다는 의미를... ",
      "pubDate": "Thu, 06 Oct 2022 08:38:00 +0900"
    }, {
      "title": "1신2한카드, <b>MZ</b>고객 겨냥한 &apos;Fit 카드&apos; 출시",
      "originallink": "http://www.sportsseoul.com/news/read/1165960?ref=naver",
      "link": "https://n.news.naver.com/mnews/article/468/0000888713?sid=101",
      "description": "사진|신한카드 신한카드가 빅데이터 분석 역량을 바탕으로 <b>MZ</b>고객을 겨냥한 ‘신한카드 핏(Fit)’을 출시했다. 신한카드 핏은 다년간 누적된 데이터 분석을 통해 <b>MZ</b>고객에게 딱 맞는(Fit) 혜택을 제공하겠다는 의미를... ",
      "pubDate": "Thu, 06 Oct 2022 08:38:00 +0900"
    }])
    setPlaceList([{}, {}])
  }

  useEffect(() => {
    getData()
  }, [])//데이터를 불러오는 함수를 실행(맨 처음에)


  return (
    <SafeAreaView style={styles.view}>
      <Text>오늘의 이슈</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.todayNews}>
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
          {placeList.length > 0 && (
            <>
              <Text>청년 공간</Text>
              <View>
                {placeList.map(place => {
                  <PlaceComponent/>
                })}
              </View>
            </>
          )}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view : {
    flex : 1
  },
  todayNews: {
    width : '100%',
    height : '50%',
    backgroundColor : "red"
  }, 
  newsForm : {
    flexGrow : 1,
    justifyContent : "center",
    alignItems : 'center'
  },
  spaceForm : {
    width : '100%',
    height : '50%'
  }
})