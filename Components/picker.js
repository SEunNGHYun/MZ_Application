import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

class PickerComponent extends Component {
  state = {
    age: 18,
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{height: 50, width: 350}}
          selectedValue={this.state.age}
          onValueChange={(val, idx) => this.setState({age: val})}>
          <Picker.Item label="18" value={18} />
          <Picker.Item label="19" value={19} />
          <Picker.Item label="20" value={20} />
          <Picker.Item label="21" value={21} />
          <Picker.Item label="22" value={22} />
          <Picker.Item label="23" value={23} />
          <Picker.Item label="24" value={24} />
          <Picker.Item label="25" value={25} />
          <Picker.Item label="26" value={26} />
          <Picker.Item label="27" value={27} />
          <Picker.Item label="28" value={28} />
          <Picker.Item label="29" value={29} />
          <Picker.Item label="30" value={30} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default PickerComponent;
