import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import AddAlert from './AddAlert';
import { useState } from 'react';

const NotificationScreen = () => {
  const [showAddAlert, setShowAddAlert] = useState(false);

  const handleButtonPress = () => {
    setShowAddAlert(true);
  };

  const onhandleback = () => {
    setShowAddAlert(false);
  }


  return (
    <ImageBackground source={require('../assets/Dashboardbg.png')} style={Styles.DashboardBG}>
    {showAddAlert ? (
      <AddAlert handleback={onhandleback} />
    ) : (
      <View style={Styles.mainconint}>
        <View style={Styles.container}>
          <TouchableOpacity >
            <Image source={require('../assets/back-icon.png')} />
          </TouchableOpacity>

          <Text style={Styles.headerText}>Notification</Text>

          <TouchableOpacity onPress={handleButtonPress} >
            <Image source={require('../assets/Button.png')} />
          </TouchableOpacity>



        </View>
        <View style={{paddingLeft:16, paddingRight:14}}>
          <Text style={Styles.erliertext}>
            Earlier
          </Text>

        </View>

      </View>
      )}
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  mainconint: {
    flex: 1
  },

  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 14,


  },
  erliertext: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 150,
    color: "#FFFFFF"
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
  DashboardBG: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default NotificationScreen;
