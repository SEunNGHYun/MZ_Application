import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import Header from '../../Header'
import PolicyComponet from './MyPolicyListCompoent';

export default function MyPolicyListScreen({navigation, route}) {
  const [policyData] = useState(route.params["scrab"]);

  return (
    <SafeAreaView style={{flex : 1,backgroundColor : "white"  }}>
      <Header title="스크랩"/>
      <View style={styles.view}>
      {policyData.length > 0 ? (
        <FlatList
          keyExtractor={item => item["policy_ids"]}
          data={policyData}
          renderItem={({item}) => <PolicyComponet item={item} navigation={navigation}/> }
        />
      ) : (
        <View style={styles.notFound}>
          <Text>정보가 없습니다.</Text>
        </View>
      )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 10,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
