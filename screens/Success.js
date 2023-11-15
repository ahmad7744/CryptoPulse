import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Success = ({ children }) => {
  return (
    <ImageBackground source={require('../assets/sucessbg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can change this based on your preference (cover, contain, stretch, etc.)
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // You can add additional styling for the content inside the background image
  },
});

export default Success;
