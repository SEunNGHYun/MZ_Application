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
import Header from '../Header'
import DropDownPicker from 'react-native-dropdown-picker';
import {ages} from '../config'
import {reginCode, cityItems} from '../utils'


const SignupScreen = ({navigation}) => {
  const [id, setId] = useState('');
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
    if (id.length > 0 && password.length > 0 && age > 0 && state.length > 0 && city.length > 0 ){
      navigation.navigate('Favorite',  {
        id,
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
        <Header title="회원가입"/>
        <View style={styles.container}>
          <View style={styles.topArea}>
            <Text style={styles.helloText}>회원가입</Text>
          </View>
          <View style={styles.formArea}>
            <Text style={styles.Text}>ID</Text>
            <TextInput
              onChangeText={setId}
              style={styles.textInput}
              placeholder={'아이디'}
              value={id}
            />
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
            {show ? check ? <Text style={{color : '#609ad8' , marginTop : 5}}>확인됨</Text> : <Text style={{color : 'red', marginTop : 5}}>비번 틀림</Text> : <View/> }
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
                  dropDownDirection="TOP"
                  placeholder="도"
                  onChangeValue={selectState}
                  maxHeight={100}
            />
            <DropDownPicker
                  open={openCitySelect}
                  style={{width : wp(45), borderColor : enableCitySelect ? "gray" : 'black'}}
                  placeholderStyle={{color : enableCitySelect ? 'gray' : 'black'}}
                  containerStyle={{width : wp(45)}}
                  value={city}
                  items={cityitems}
                  placeholder="시"
                  disabled={enableCitySelect}
                  dropDownDirection="TOP"
                  setOpen={setOpenCitySelect}
                  onOpen={citySelectOpen}
                  setValue={setCity}
                  zIndex={5000}
                  maxHeight={100}
            />
            </View>
          </View>
          <View style={styles.btnAra}>
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
    height: hp(100),
    paddingHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    height: hp(15),
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 30,
    color : '#609ad8'
  },
  TextArea: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Text: {
    marginVertical: 10,
  },
  formArea: {
    height: Platform.OS == "ios" ? hp(53) : hp(57),
    justifyContent: 'center',
    zIndex : 3000
  },
  textInput: {
    borderWidth: 1.1,
    borderColor: 'black',
    borderRadius: 7,
    height: Platform.OS == "ios" ? 48: 45 ,
    paddingHorizontal: 10,
  },
  areaSelectBox: {
    flexDirection: 'row',
    justifyContent : 'space-between',
  },
  btn: {
    zIndex : 300,
    width: '100%',
    height: Platform.OS == "ios" ? 48: 45 ,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#609ad8',
  },
  btnAra : {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex : 0.5,
  }
});
export default SignupScreen;
