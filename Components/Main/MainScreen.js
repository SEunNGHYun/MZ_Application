import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import NewSelect from './NewsSelect'
import NewsComponent from './NewsComponent';
import PlaceComponent from './PlaceComponent';
import { keyContext }from '../KeyStore'
import { getRequest } from '../config.js'
import { space, news } from '../../assets/imgs'

export default function MainScreen({navigation}) {
  const [access_token] = useContext(keyContext)
  const [viewNewsList, setViewNewsList] = useState([]); //뉴스 대아터를 저장할 공간 선언
  const [newsIndex, setNewsIndex] = useState(0);
  const [placeList, setPlaceList] = useState([]);
  const [newsrandomImgList, setNewsrandomImgList] = useState([])
  //데이터 불러오는 함수
  async function getData() {
    const response = await getRequest('/main', access_token);
    //대충 데이터 가져오는 코드
    if (response.status == 200) {
      const newsData = response['news_data']['items'];
      const sliceNewData = [
        newsData.slice(0, 4),
        newsData.slice(4, 8),
        newsData.slice(8, 12),
      ];
      setViewNewsList(sliceNewData);
      if (response['place_data']['spacesInfo']["totalCnt"]["_text"] !== '0'){
        setPlaceList(response['place_data']['spacesInfo']['space']);
      }
    }
  }

  function randomImageChoice () {
    let randomImgarr = []
    function randomChoice (){
      var index = Math.floor(Math.random() * 4);
      return news[index];
    }

    for(var i = 0; i < 4; i ++){
      randomImgarr.push(randomChoice())
    }
    setNewsrandomImgList(randomImgarr)
  }

  function changeViewNewsData(index) {
    setNewsIndex(index);
  }

  useEffect(() => {
    randomImageChoice()
    getData();
  }, []); //데이터를 불러오는 함수를 실행(맨 처음에)

  return (
    <SafeAreaView style={styles.view}>
      <Text style={[styles.headerTitle, {marginLeft: 18}]}>오늘의 이슈</Text>
      <View style={styles.todayNews}>
        {viewNewsList.length > 0 && (
          <FlatList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newsForm}
            data={viewNewsList[newsIndex]}
            renderItem={({item, index}) => <NewsComponent 
            item={item} 
            index={index}
            navigation={navigation}
            rdmImgs={newsrandomImgList} /> 
          }
            keyExtractor={item => item.title}
            numColumns={2}
          />
        )}
        <NewSelect changeViewNewsData={changeViewNewsData} newsIndex={newsIndex} randomImageChoice={randomImageChoice}/>
      </View>
      <View style={styles.spaceForm}>
          <View style={styles.spaceBox}>
            <View style={{flexDirection : 'row', alignItems : "center"}}>
              <Text style={[styles.headerTitle, {marginBottom: 10}]}>
                청년 공간    
              </Text>
              {placeList.length > 0 && (
                <Text>
                  {"     "}[{placeList[0]["areaSggn"]["_cdata"]}]
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row', height: '75%'}}>
              <Image
                style={styles.spaceImage}
                resizeMode="contain"
                source={{uri: space }}
              />
              {placeList.length > 0 ? (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.spaceDatas}>
                {placeList.map(place => (
                  <PlaceComponent
                    key={place['spcId']['_text']}
                    placeData={place}
                  />
                ))}
              </ScrollView> ) 
              : (
                <Text>
                  제공되는 장소가 없습니다.
                </Text>
              )}
            </View>
          </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor : "white",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
  },
  todayNews: {
    width: '100%',
    height: '57%',
  },
  newsForm: {
    height : "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceForm: {
    width: '100%',
    height: '48%',
    paddingTop: 30,
    alignItems: 'center',
  },
  spaceBox: {
    borderWidth: 1,
    paddingRight: 5,
    paddingLeft: 10,
    width: '90%',
    height: '70%',
  },
  spaceImage: {
    width: '45%',
    height: '90%',
    marginRight: 7,
  },
  spaceDatas: {
    width: '45%',
    height: '100%',
  }
});
