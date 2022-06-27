import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
  PixelRatio,
} from 'react-native';

import Slider from '@react-native-community/slider';

const size = 32;
const back_icon = {
  url: require('./assets/icon/icons8-back-64.png'),
  with: size,
  height: size,
};

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headers}>
        <View style={styles.box}>
          <Pressable>
            <Image
              source={require('./assets/icon/left-arrow.png')}
              resizeMode="cover"
              style={{height: 32, width: 32}}
            />
          </Pressable>
        </View>
        <View style={styles.box}>
          <Text style={{paddingLeft: 40, fontSize: 30, color: 'white'}}>
            Summer Playlist
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{paddingLeft: 40, fontSize: 15}}>15 songs</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Image
              style={styles.image_song}
              source={require('./assets/images/1.jpg')}
              resizeMode="cover"></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text_song_name}> Song name</Text>
            <Text style={styles.text_author_name}> author name</Text>
          </View>
          <View style={{margin: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                }}>
                <Text>00:00</Text>
              </View>
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <Text>00:00</Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor="#D47FA6"
              minimumTrackTintColor="#D47FA6"></Slider>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={require('./assets/icon/continues.png')}></Image>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={require('./assets/icon/play.png')}></Image>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={require('./assets/icon/previous.png')}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#241332',
  },
  headers: {
    flex: 1,
    backgroundColor: '#35264199',
    borderBottomLeftRadius: 70,
  },
  body: {
    flex: 3,
    backgroundColor: '#241332',
    padding: 40,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#352641',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
  icon: {
    width: 64,
    height: 64,
  },
  box: {
    margin: 5,
    paddingLeft: 10,
  },
  image_song: {
    width: 250,
    height: 250,
    borderRadius: 250,
    margin: 10,
  },
  text_song_name: {
    fontSize: 25,
  },
  text_author_name: {},
  slider: {
    width: 300,
    height: 50,
  },
});

export default App;
