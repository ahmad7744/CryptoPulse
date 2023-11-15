

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ navigation, activeScreen }) => {
  return (
    <View style={styles.head}>
      <TouchableOpacity
        style={styles.btnlogin}
        onPress={() => {
          if (activeScreen !== 'Login') {
            navigation.navigate('Login');
          }
        }}
      >
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnlogin}
        onPress={() => {
          if (activeScreen !== 'Register') {
            navigation.navigate('Register');
          }
        }}
      >
        <Text style={styles.reg}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  head: {
    height: 43.243446350097656,
    borderRadius: 11.280899047851562,
    backgroundColor: "#181F30",
    textAlign: "center",
    padding: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnlogin: {
    width: 168.27340698242188,
    height: 35.72284698486328,
    borderRadius: 11.280899047851562,
    backgroundColor: "#111622",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintext: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 13.161048889160156,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 13.161048889160156,
    textAlign: "center",
    color: "#C1C7CD",
    textAlignVertical: "center"
  },
});

export default Header;
