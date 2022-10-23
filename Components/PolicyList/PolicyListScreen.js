import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import PolicyComponet from './PolicyListCompoent';
import {keyContext} from '../KeyStore'
import {getRequest} from '../config'

export default function PolicyListScreen({navigation}) {
  const [access_token] = useContext(keyContext)
  const [policyData, setPolicyData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1)

  async function getPolicyData() {
    const response = await getRequest(`/policy?pageIndex=${pageIndex}`, access_token)

    if(response.status == 200){
      const newPolicyData = policyData.concat(response["data"]['empsInfo']['emp'])
      setPolicyData(newPolicyData);
    }
  }

  function scrollEndReached () {
    setPageIndex(pageIndex + 1)
  }

  useEffect(() => {
    getPolicyData();
  }, [pageIndex]);

  return (
    <SafeAreaView style={styles.view}>
      {policyData.length > 0 ? (
        <FlatList
          keyExtractor={item => item['bizId']['_text']}
          data={policyData}
          onEndReached={scrollEndReached}
          renderItem={({item}) => <PolicyComponet item={item} navigation={navigation}/> }
        />
      ) : (
        <View style={styles.notFound}>
          <Text>정보가 없습니다.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor : "white",
    marginHorizontal: Platform.OS == 'ios' ? 10 : 0,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
