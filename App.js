import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  SectionList,
  TextInput
} from 'react-native';


const App = () => {
  const [name,SetName] = useState('')

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Tên của bạn là:{name}
      </Text>
      <TextInput style={styles.input}
      multiline
      placeholder="Vui lập nhập tên của bạn"
      placeholderTextColor={'#555'}
      onChangeText={(value)=>SetName(value)}
      keyboardType='default'
      // maxLength={10}
      secureTextEntry></TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 23,
    margin: 20,
  },
  item: {
    backgroundColor: '#546318',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  input:{
    width: 300,
    borderColor: '#555',
    borderWidth: 1,
    color: '#000000',
    borderRadius: 5,
    fontSize: 15,
  }
});

export default App;
