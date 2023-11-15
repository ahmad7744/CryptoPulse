import React from 'react';
import { View, Text, StyleSheet, Button , ImageBackground} from 'react-native';

const SettingsScreen = () => {

 

  return (
    <ImageBackground source={require('../assets/Dashboardbg.png')}style={dashboardStyles.DashboardBG}>
    <View style={dashboardStyles.container}>
      <Text style={dashboardStyles.headerText}>Welcome to the SettingsScreen</Text>
      {/* Add more components/content as needed */}
      <Button title="Logout" />
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
    color:"white"
  },
  DashboardBG: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default SettingsScreen;
