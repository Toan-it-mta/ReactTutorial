import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  SectionList,
  TextInput,
  Button,
  NativeEventEmitter,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      // Alert.alert('Warning', 'Tên nhập phải nhiều hơn 3 ksy tự', [
      //   { text: 'OK', onPress: () => console.warn('Warring') },
      //   { text: 'Cancel' },
      // ]);

      ToastAndroid.showWithGravity(
        'Tên bạn nhập phải có tối thiểu 3 ký tự',
        ToastAndroid.TOP,
        ToastAndroid.CENTER,
      );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Vui lòng nập tên của bạn</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Vui lập nhập tên của bạn"
        placeholderTextColor={'#555'}
        onChangeText={value => SetName(value)}
        keyboardType="default"
        secureTextEntry></TextInput>
      {/* <Button title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}></Button> */}
      <Pressable onPress={onPressHandler} style={styles.button}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>Tên bạn đăng ký là {name}</Text>
      ) : null}
    </View>
  );
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
    fontSize: 19,
  },
  item: {
    backgroundColor: '#546318',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderColor: '#555',
    borderWidth: 1,
    color: '#000000',
    borderRadius: 5,
    fontSize: 15,
    margin: 12,
  },
  button: {
    backgroundColor: '#00ff00',
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default App;
