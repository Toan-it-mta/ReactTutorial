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
} from 'react-native';


const App = () => {
  const [number, SetNumber] = useState(2)
  const [current, SetCurrent] = useState(true)
  const [Items, SetItems] = useState([
    { word: 'item 1' },
    { word: 'item 2' },
    { word: 'item 3' },
    { word: 'item 4' },
    { word: 'item 5' },
    { word: 'item 6' },
    { word: 'item 7' },
    { word: 'item 8' },
    { word: 'item 9' },
    { word: 'item 10' },
  ])

  const [Sessions, SetSessions] = useState([
    {
      title: 'Section 1',
      data: ['1-1', '1-2', '1-3'],
    },
  ])
  const [Refesh, SetRefesh] = useState(false)

  const onRefesh = () => {
    SetRefesh(true)
    SetItems([...Items, { word: 'item 69' }])
    SetRefesh(false)
  }

  const onSectionListRefresh = () => {
    SetRefesh(true)
    SetSessions([...Sessions, {
      title: 'Section ' + number.toString(),
      data: [number.toString() + '-1', number.toString() + '-2', number.toString() + '-3'],
    }]
    )
    SetNumber(number + 1)
    SetRefesh(false)
  }


  return (
    <View style={styles.body}>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={Sessions}
        renderItem={({ item }) => {
          return <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        }}
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )
        }
        refreshControl={
          <RefreshControl
            refreshing={Refesh}
            onRefresh={onSectionListRefresh}
            colors={['#ff00ff']}
          ></RefreshControl>
        }>

      </SectionList>

      {/* <FlatList data={Items}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        // numColumns = {2}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.word}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={Refesh}
            onRefresh={onRefesh}
            colors={['#ff00ff']} />
        }></FlatList> */}
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
