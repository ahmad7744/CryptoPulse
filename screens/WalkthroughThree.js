
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const WalkthroughThree = () => {
  return (
    <ImageBackground source={require('../assets/bg-wt-three.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/Line.png')} />
        <Text style={styles.text}>Set Custom Notifications</Text>
        <Text style={styles.textone}>Set custom notifications to be notified about rise and fall of crypto currencies</Text>
        {/* <View style={styles.dotcont}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
            <View style={styles.dotStyle}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
            <View style={styles.dotStyle}></View>
          </TouchableOpacity>
        </View> */}
      </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: 15


  },
  text: {
    fontSize: 28,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 28,
    textAlign: "center",
    color: "#FFFFFF",
    maxWidth: 279,
    fontFamily: "SF-Pro-Text-Regular",

  },
  textone: {
    width: 244,
    height: 66,
    fontFamily: "SF Pro Text",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 22,
    textAlign: "center",
    color: "#6D778B",
    fontFamily: "SF-Pro-Text-Regular",

  },
  dotStyle: {
    width: 7,
    height: 7,
    backgroundColor: '#6D778B',
    borderRadius: 5,
    margin: 5,
    alignItems: "center"

  },
  cont: {
    display: "flex",
    alignItems: "center"
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  dotcont: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 20
  }

});

export default WalkthroughThree;
