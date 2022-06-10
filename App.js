import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [name, SetName] = useState('My name is: Nguyen Phuc Toan')
  const [current, SetCurrent] = useState(true)
  const [Items, SetItems] = useState([
    { key: 1, item: 'item 1' },
    { key: 2, item: 'item 2' },
    { key: 3, item: 'item 3' },
    { key: 4, item: 'item 4' },
    { key: 5, item: 'item 5' },
    { key: 6, item: 'item 6' },
    { key: 7, item: 'item 7' },
    { key: 8, item: 'item 8' },
    { key: 9, item: 'item 9' },
    { key: 10, item: 'item 10' },
    { key: 11, item: 'item 11' },
  ])
  const [Refesh, SetRefesh] = useState(false)

  const onPress = () => {
    if (current) {
      SetName('Tôi tên là Nguyễn Phúc Toàn')
      SetCurrent(!current)
    } else {
      SetName('My name is: Nguyen Phuc Toan')
      SetCurrent(!current)
    }
  }

  const onRefesh = () => {
    SetRefesh(true)
    SetItems([...Items, { key: 69, item: 'item 69' }])
    SetRefesh(false)
  }

  return (
    <View style={styles.body}>
      <ScrollView horizontal={false} refreshControl={
        <RefreshControl
          refreshing={Refesh}
          onRefresh={onRefesh}
          colors={['#546318','#ff00ff']}
        />
      }>
        {Items.map((obj) => {
          return <View style={styles.item} key={obj.key}>
            <Text style={styles.text}>{obj.item}</Text>
          </View>
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
    margin: 20
  },
  item: {
    backgroundColor: '#546318',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
});

export default App;
