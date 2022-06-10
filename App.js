import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.box4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.box5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.row4}>
        <View style={styles.box6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.box7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#000000',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
  },
  row2: {
    flex: 1,
  },
  row3: {
    flex: 1,
  },
  row4: {
    flex: 7,
    flexDirection: 'row',
  },
  box1: {
    flex: 2, backgroundColor: '#acc124', justifyContent: 'center', alignItems: 'center' 
  },
  box2: { flex: 3, backgroundColor: '#ad3124', justifyContent: 'center', alignItems: 'center' },
  box3: { flex: 5, backgroundColor: '#acc124', justifyContent: 'center', alignItems: 'center' },
  box4: { flex: 1, backgroundColor: '#ad3124', justifyContent: 'center', alignItems: 'center' },
  box5: { flex: 1, backgroundColor: '#acc124', justifyContent: 'center', alignItems: 'center' },
  box6: { flex: 5, backgroundColor: '#acc124', justifyContent: 'center', alignItems: 'center' },
  box7: { flex: 5, backgroundColor: '#ad3124', justifyContent: 'center', alignItems: 'center' },
  text: {
    color: '#000000',
    fontSize: 50,
    fontStyle: 'italic',
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
  }
});

export default App;
