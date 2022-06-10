import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [name,SetName] = useState('My name is: Nguyen Phuc Toan')
  const [current, SetCurrent] = useState(true)

  const onPress = ()=>{
    if (current){
      SetName('Tôi tên là Nguyễn Phúc Toàn')
      SetCurrent(!current)
    }else{
      SetName('My name is: Nguyen Phuc Toan')
      SetCurrent(!current)
    }
  }

  return (
   <View style={styles.body}>
    <Text style={styles.text}>{name}</Text>
    <Button title='Change State' onPress={onPress}></Button>
   </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    color:'#ff9912',
    fontSize:23,
    margin: 20
  }
});

export default App;
