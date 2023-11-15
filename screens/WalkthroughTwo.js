import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const WalkthroughTwo = ({ navigation }) => {
  const handleSkip = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/bg-wt-three.png')}
      style={styles.WalkthrouhBG}
    >
      <View style={styles.content}>
        <Image source={require('../assets/Line.png')} />
        <Text style={styles.text}>Set Custom Notifications</Text>
        <Text style={styles.text1}>Set custom notifications to be notified about the rise and fall of cryptocurrencies</Text>
        <TouchableWithoutFeedback onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableWithoutFeedback>
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
  skipText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Medium',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    gap: 10,
    paddingBottom: 50,
  },
});

export default WalkthroughTwo;
