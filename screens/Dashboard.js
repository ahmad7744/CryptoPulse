import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  // You can customize the content and functionality of your Dashboard screen here

  const handleLogout = () => {
    // Add logic to handle user logout
    // For example, you might want to clear authentication tokens or navigate to the login screen
    navigation.replace('Login'); // Replace with the actual name of your login screen
  };

  return (
    <View style={dashboardStyles.container}>
      <Text style={dashboardStyles.headerText}>Welcome to the Dashboard!</Text>
      {/* Add more components/content as needed */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', // Customize the background color as needed
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dashboard;
