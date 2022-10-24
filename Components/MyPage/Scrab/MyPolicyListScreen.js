import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import PolicyComponet from './MyPolicyListCompoent';

export default function MyPolicyListScreen({navigation, route}) {
  const [policyData] = useState(route.params["scrab"]);

  return (
    <SafeAreaView style={styles.view}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor : "white",
    paddingHorizontal: 10,
    marginHorizontal: Platform.OS == 'ios' ? 10 : 0,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
