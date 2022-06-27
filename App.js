import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
  PixelRatio
} from 'react-native';

const size = 32;
const back_icon = {
  url: require('./assets/icon/icons8-back-64.png'),
  with: size,
  height: size
}


const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headers}>
        <View style={styles.box}>
          <Pressable>
            <Image source={require('./assets/icon/left-arrow.png')} resizeMode='stretch' style={styles.icon} />
          </Pressable>
        </View>
        <View style={styles.box}>
          <Text style={{ paddingLeft: 40, fontSize: 30, color: 'white' }}>Summer Playlist</Text>
        </View>
        <View style={styles.box}>
          <Text style={{ paddingLeft: 40, fontSize: 15 }}>15 songs</Text>
        </View>


      </View>
      <View style={styles.body}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.image_song} source={require('./assets/images/1.jpg')}></Image>
          <Text style={styles.text_song_name}> Song name</Text>
          <Text style={styles.text_author_name}> author name</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Xin chaof cac ban</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#241332'
  },
  headers: {
    flex: 1,
    backgroundColor: '#35264199',
    borderBottomLeftRadius: 70,
  },
  body: {
    flex: 3,
    backgroundColor: '#241332'
  },
  footer: {
    flex: 1,
    backgroundColor: '#352641',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  text: {
    color: '#ffffff',
    fontSize: 30
  },
  icon: {
    width: 32,
    height: 32
  },
  box: {
    margin: 5,
    paddingLeft: 10
  },
  image_song: {
    margin: 40,
    with: 250,
    height: 250,
  },
  text_song_name: {
    fontSize: 25
  },
  text_author_name: {
    margin: 5,
  }
})

export default App;
