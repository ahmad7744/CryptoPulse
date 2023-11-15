import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import LoginScreen from './LoginScreen';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = async () => {
   
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <ImageBackground
      source={require('../assets/dashboardbg-2.png')}
      style={dashboardStyles.DashboardBG}
    >
      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.headerText}>Welcome to the Dashboard!</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </ImageBackground>
  );
};

const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white",
  },
  DashboardBG: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Home;
