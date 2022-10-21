import React, {useState, useEffect} from 'react';
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
} from 'react-native';

import FavoriteBox from './favoriteBox';
import {getRequest} from './config';

const FavoriteSelectScreen = () => {
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
    if (selectFav.length > 0) {
      Alert.alert('하나 이상 선택해주세요');
    } else {
      const signupData = {
        user_id: null,
        user_password: null,
        user_age: null,
        user_state: null,
        user_city: null,
        interest_ids: selectFav,
      };
      const response = await ostRequest('/user/signup', signupData);

      if (response.status == 201) {
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
            onPress={() => navigation.popToTop('Login')}>
            <Text style={(styles.Text, {color: 'white'})}>회원가입</Text>
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
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
  btnArea2: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
});
export default FavoriteSelectScreen;
