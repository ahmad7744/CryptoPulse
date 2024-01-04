import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';







  const CreateAlert = ({ selectedCryptos , onBack }) => {
  const [selectedValue, setSelectedValue] = useState('Enter Here');
  const [valueInput, setValueInput] = useState('');
  const [frequency, setFrequency] = useState('');
  if (!selectedCryptos || selectedCryptos.length === 0) {
    return <Text>No selected cryptocurrencies</Text>;
  }

  useEffect(() => {
    // Fetch alerts from local storage when the component mounts
    fetchAlerts();
  }, []);

  const handleCreateAlert = async () => {
    try {
      // Create an alert object
      const alertObject = {
        cryptoId: selectedCryptos[0]?.id, 
        alertType: selectedValue,
        value: valueInput,
        frequency,
      };

      // Get existing alerts from storage
      const existingAlerts = await AsyncStorage.getItem('alerts');
      const alerts = existingAlerts ? JSON.parse(existingAlerts) : [];

      // Add the new alert to the array
      alerts.push(alertObject);
      const livePrice = parseFloat(selectedCryptos[0]?.price);

      alerts.forEach((storedAlert) => {
        if (storedAlert.value && parseFloat(storedAlert.value) === Math.round(livePrice)) {
          // Trigger push notification
          console.log('Notification Triggered:', storedAlert);
          PushNotification.localNotification({
            channelId: 'default',
            title: 'Alert Match!',
            message: `The price of ${selectedCryptos[0]?.name} has reached ${livePrice}`,
          });
        }

      });


      await AsyncStorage.setItem('alerts', JSON.stringify(alerts));

      // Show success message or trigger notification logic here

      Alert.alert('Alert created successfully!');
    } catch (error) {
      console.error('Error creating alert:', error);
    }
  };

  const fetchAlerts = async () => {
    try {
      // Fetch alerts from storage and do something with them if needed
      const existingAlerts = await AsyncStorage.getItem('alerts');
      const alerts = existingAlerts ? JSON.parse(existingAlerts) : [];

      console.log('Fetched alerts:', alerts);
      console.log('Number of alerts:', alerts.length);
    } catch (error) {
      console.error('Error fetching alerts:', error);
    }
  };
  return (
    <View>
      <View style={Styles.container}>
        <TouchableOpacity  onPress={onBack} >
          <Image source={require('../assets/back-icon.png')} />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Create Alert</Text>
      </View>
      {selectedCryptos.map((crypto, index) => (
        <View key={index} style={Styles.coinItem}>
          <View style={Styles.coinInfo}>
            <Image source={crypto?.icon} />
          </View>
          <View style={Styles.nameprice}>
            <View>
              <Text style={Styles.coinText}>{crypto?.name}</Text>
              <Text style={Styles.coinTextOne}>{crypto?.instId}</Text>
            </View>
            <View>
              <Text style={Styles.cryptoChange}>{crypto?.change}</Text>
              <Text style={Styles.cryptoPrice}>${crypto?.price}</Text>
            </View>
          </View>
        </View>
      ))}
      <View style={Styles.dropdownContainer}>
        <Text style={{ color: 'white', marginVertical: 20 }}>Alert Type</Text>
        <Picker
          key="pickerKey"
          selectedValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
          style={Styles.input}
          mode="dropdown"
        >
          <Picker.Item label="Select an option" value={null} key="defaultOption" />
          <Picker.Item label="Price reaches" value="Price reaches" />
          <Picker.Item label="Price rises above" value="Price rises above" />
          <Picker.Item label="Percentage Increase" value="Percentage Increase" />
          <Picker.Item label="Volume Increase" value="Volume Increase" />
        </Picker>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: 'white', marginVertical: 20 }}>Value</Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter Here"
          placeholderTextColor='white'
          value={valueInput}
          onChangeText={(text) => setValueInput(text)}
        />
      </View>
      <View style={Styles.dropdownContainer}>
        <Text style={{ color: 'white', marginVertical: 20 }}>Frequency</Text>
        <Picker
          selectedValue={frequency}
          onValueChange={(value) => setFrequency(value)}
          style={Styles.inputAndroid}
          placeholder='Enter here'
          mode="dropdown"
        >

          <Picker.Item label="Select an option" value={null} />
          <Picker.Item label="Only Once" value="Only Once" />
          <Picker.Item label="Once a day" value="Once a day" />
          <Picker.Item label="Always" value="Always" />
          <Picker.Item label="Custom" value="Custom" />
          <Picker.Item label="Menu item" value="Menu item" />
        </Picker>
      </View>
      <View style={Styles.container3}>
        <TouchableOpacity style={Styles.btn} onPress={handleCreateAlert}>
          <Text style={{ color: '#FFFFFF', textAlign: 'center', textAlignVertical: 'center' }}>
            Create Alert
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  coinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    paddingRight: 16,
    paddingLeft: 15
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameprice: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: '#1A202E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  coinText: {
    fontWeight: 'bold',
    color: 'white',
  },
  coinTextOne: {
    fontWeight: 'bold',
    color: '#6D778B',
  },
  timestampText: {
    fontWeight: 'bold',
    color: 'green',
  },
  priceText: {
    fontWeight: 'bold',
    color: 'white',
  },
  cryptoChange: {
    fontWeight: 'bold',
    color: 'white',
  },
  cryptoPrice: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 14,
    gap: 86,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  formContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  picker: {
    color: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#1A202E',
  },
  input: {
    height: 59,
    borderColor: '#1A202E',
    backgroundColor: '#1A202E',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
    paddingLeft: 20,
    color: "white",
  },
  dropdownContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  container3: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 16,
  },
  btn: {
    backgroundColor: '#3249FF',
    width: '100%',
    height: 51,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateAlert;
