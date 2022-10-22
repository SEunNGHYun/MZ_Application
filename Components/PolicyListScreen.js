import React, {useState, useEffect} from 'react';
import {policyTestData} from '../testData';
import PolicyComponet from './PolicyListCompoent';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';

export default function PolicyListScreen({navigation}) {
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    getPolicyData();
  }, []);

  function getPolicyData() {
    setPolicyData(policyTestData['data']['empsInfo']['emp']);
  }

  return (
    <SafeAreaView style={styles.view}>
      {policyData.length > 0 ? (
        <FlatList
          keyExtractor={item => item['bizId']['_text']}
          data={policyData}
          renderItem={PolicyComponet}
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
    marginHorizontal: Platform.OS == 'ios' ? 10 : 0,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
