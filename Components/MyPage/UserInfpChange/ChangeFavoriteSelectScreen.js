import React, {useState, useEffect, useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
  Platform
} from 'react-native';
import Header from '../../Header'
import FavoriteBox from './FavoriteBox';
import { keyContext }from '../../KeyStore'
import {patchRequest, getRequest} from '../../config';

const ChangeFavoriteScreen = ({navigation, route}) => {
  const data = route.params
  const [access_token] = useContext(keyContext)
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectFav, setSelectFav] = useState([]);

  const pressFavorite = newCode => {
    const isInclude = selectFav.includes(newCode);
    let newSelectCode = [];

    if (isInclude) {
      newSelectCode = selectFav.filter(code => {
        if (code != newCode) {
          return code;
        }
      });
    } else {
      newSelectCode = selectFav.concat([newCode]);
    }

    setSelectFav(newSelectCode);
  };

  const getFavoriteDataInServer = async () => {
    const response = await getRequest('/interest');

    if (response.status == 200) {
      setFavoriteList(response.data);
    }
  };

  const completeSignup = async () => {
    if (selectFav.length == 0) {
      Alert.alert(
        '하나 이상 선택해주세요', 
        '다시 선택해주세요'
      );
    } else {
      const signupData = {
        user_password: data.password,
        user_age: data.age,
        user_state: data.state,
        user_city: data.city,
        interest_ids: selectFav,
      };
      const response = await patchRequest('/user/config', signupData, access_token);

      if (response.status == 200) {
        Alert.alert(
          '수정되었습니다.',
          ''
        ,[
          {
            title : 'ok',
            onPress: () => navigation.replace('Myinfo')
          }
        ])
      } else {
        
      }
    }
  };

  useEffect(() => {
    getFavoriteDataInServer();
  }, []);

  const React$Node = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={"관심분야설정"}/>
        <View style={styles.topArea}>
          <Text style={styles.helloText}>관심분야 선택 (중복)</Text>
        </View>
        <View style={styles.middleArea}>
          {favoriteList.length > 0 && (
            <FlatList
              columnWrapperStyle={{felx: 0.5, justifyContent: 'space-between'}}
              data={favoriteList}
              renderItem={({item}) => (
                <FavoriteBox
                  item={item}
                  pressFavorite={pressFavorite}
                  selectFav={selectFav}
                />
              )}
              keyExtractor={item => item.interest_code}
              numColumns={2}
            />
          )}
        </View>
        <View style={styles.btnArea2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={completeSignup}>
            <Text style={(styles.Text, {color: 'white'})}>회원수정</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      //컨테이너 View
    );
  };
  return React$Node();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 1,
    justifyContent: 'center',
  },
  middleArea: {
    flex: 5,
    paddingHorizontal: 10,
  },
  helloText: {
    fontSize: 30,
    paddingLeft: 10,
  },
  btn: {
    width: '100%',
    height: Platform.OS == "ios" ? 48: 45 ,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#609ad8',
  },
  btnArea2: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
});
export default ChangeFavoriteScreen;
