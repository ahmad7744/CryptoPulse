
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const WalkthroughOne = () => {
  const [loader, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 3000); 
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg-wt-two.png')}
      style={styles.WalkthrouhBG}>
      {loader ? (
        <View style={styles.loadingCont}>
          <ImageBackground
            source={require('../assets/bg-tw-one.png')}
            style={styles.WalkthrouhBG}
            >
          </ImageBackground>
        </View>
      ) : (
        <View style={styles.content}>
          <Image source={require('../assets/Line.png')} />
          <Text style={styles.text}>Monitor Crypto Currencies</Text>
          <Text style={styles.text1}>Our engine provides real time monitoring of crypto currencies so you are always up to date</Text>
        </View>
      )}
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
    fontSize: 14,
    width: 244,
    lineHeight: 22,
    textAlign: 'center',
    color: '#6D778B',
    fontFamily: 'SF-Pro-Text-Medium',
  },
  loadingCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    gap: 15,
    paddingBottom: 50,
   },
});

export default WalkthroughOne;
