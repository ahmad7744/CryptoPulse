import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const WalkthroughTwo = () => {
  return (
    <ImageBackground
      source={require('../assets/bg-wt-three.png')}
      style={styles.WalkthrouhBG}>
      <View style={styles.content}>
        <Image source={require('../assets/Line.png')} />
        <Text style={styles.text}>Set Custom Notifications</Text>
        <Text style={styles.text1}>Set custom notifications to be notified about rise and fall of crypto currencies</Text>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  WalkthrouhBG: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 28,
    width: 279,
    fontFamily: 'SF-Pro-Text-Regular',
    textAlign: 'center',
  },
  text1: {
    color: '#6D778B',
    fontSize: 14,
    width: 244,
    fontFamily: 'SF-Pro-Text-Medium',
    lineHeight: 22,
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    gap: 10,
    paddingBottom:50,
  },
  
});

export default WalkthroughTwo;