import React, {useState, useCallback} from 'react';
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
  Alert,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../../Header'
import {ages} from '../../config'
import {reginCode, cityItems} from '../../utils'


const UserChangeScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [check, setCheck] = useState(false)
  const [show, setShow] = useState(false);
  const [age, setAge] = useState('');
  const [openAgeSelect, setOpenAgeSelect] = useState(false);
  const [state, setState] = useState('');
  const [openStateSelect, setOpenStateSelect] = useState(false)
  const [city, setCity] = useState('');
  const [enableCitySelect, setEnableCitySelect] = useState(true)
  const [openCitySelect, setOpenCitySelect] = useState(false);
  const [cityitems, setCityItems] = useState([])

  const ageSelectOpen = useCallback(() => {
    setOpenStateSelect(false)
    setOpenCitySelect(false)
  },[])

  const stateSelectOpen = useCallback(() => {
    setOpenAgeSelect(false)
    setOpenCitySelect(false)
  },[])

  const citySelectOpen = useCallback(() => {
    setOpenAgeSelect(false)
    setOpenStateSelect(false)
  },[])

  const selectState = (val) => {
    setEnableCitySelect(false)
    setCityItems(cityItems[val])
  }
  
  const confirmPass = (val) => {
      if(val.length > 0) {
        setShow(true)
      if(val == password && password.length > 0) {
        setCheck(true)
      }else {
        setCheck(false)
      }
    }else{
      setShow(false)
    }
    setConformPassword(val)
  }

  const moveToFav = () => {
    if (password.length > 0 && age > 0 && state.length > 0 && city.length > 0 ){
      navigation.navigate('ChangeUserFav',  {
        password,
        age,
        state,
        city
      })
    }else{
      Alert.alert(
        "입력데이터가 없습니다.",
        "데이터를 다시 확인해주세요",
      )
    }
  }

  const React$Node = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor : "white"}}>
          <Header title={"회원수정"}/>
        <View style={styles.container}>
          <View style={styles.topArea}>
            <Text style={styles.helloText}>회원수정</Text>
          </View>
          <View style={styles.formArea}>
            <Text style={styles.Text}>PASSWORD</Text>
            <TextInput
              onChangeText={setPassword}
              value={password}
              style={styles.textInput}
              placeholder={'영문, 숫자 조합 5글자 이상'}
              secureTextEntry={true}
            />
            <Text style={styles.Text}>PASSWORD Confirm</Text>
            <TextInput
              value={conformPassword}
              onChangeText={setConformPassword}
              style={styles.textInput}
              placeholder={'비밀번호 확인'}
              onChangeText={confirmPass}
              secureTextEntry={true}
            />
            {show ? check ? <Text style={{color : 'black'}}>확인됨</Text> : <Text style={{color : 'red'}}>비번 틀림</Text> : <View/> }
            <Text style={styles.Text}>나이선택</Text>
            <DropDownPicker
                  open={openAgeSelect}
                  value={age}
                  items={ages}
                  dropDownDirection="TOP"
                  setOpen={setOpenAgeSelect}
                  onOpen={ageSelectOpen}
                  setValue={setAge}
                  placeholder="나이 선택"
                  maxHeight={100}
            />
            <Text style={styles.Text}>지역</Text>
            <View style={styles.areaSelectBox}>
            <DropDownPicker
                  open={openStateSelect}
                  style={{width : wp(45)}}
                  containerStyle={{width : wp(45)}}
                  value={state}
                  items={reginCode}
                  setOpen={setOpenStateSelect}
                  onOpen={stateSelectOpen}
                  setValue={setState}
                  dropDownDirection="BOTTOM"
                  placeholder="도"
                  onChangeValue={selectState}
                  maxHeight={100}
            />
            <DropDownPicker
                  open={openCitySelect}
                  style={{width : wp(45), borderColor : enableCitySelect ? "gray" : 'black'}}
                  placeholderStyle={{color : enableCitySelect ?'gray' : 'black'}}
                  containerStyle={{width : wp(45)}}
                  value={city}
                  items={cityitems}
                  placeholder="시"
                  disabled={enableCitySelect}
                  dropDownDirection="BOTTOM"
                  setOpen={setOpenCitySelect}
                  onOpen={citySelectOpen}
                  setValue={setCity}
                  zIndex={5000}
                  maxHeight={100}
            />
            </View>
          </View>
          <View style={{flex : 0.6}}>
            <TouchableOpacity
                style={styles.btn}
                onPress={moveToFav}>
                <Text style={{color: 'white'}}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView> //컨테이너 View
    );
  };
  return React$Node();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 0.6,
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 30,
  },
  TextArea: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Text: {
    marginVertical: 10,
  },
  formArea: {
    flex: 1.5,
    zIndex : 3000
  },
  textInput: {
    borderWidth: 1.1,
    borderColor: 'black',
    borderRadius: 7,
    height: hp(6),
    paddingHorizontal: 10,
  },
  areaSelectBox: {
    flexDirection: 'row',
    justifyContent : 'space-between',
  },
  btn: {
    marginTop: 20,
    zIndex : 300,
    width: '100%',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D47A1',
  },
});
export default UserChangeScreen;
