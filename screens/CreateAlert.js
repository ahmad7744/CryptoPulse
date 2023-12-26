import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';



const CreateAlert = ({ selectedCryptos }) => {
  if (!selectedCryptos || selectedCryptos.length === 0) {
    return <Text>No selected cryptocurrencies</Text>;
  }
  // const [selectedItemValue, setSelectedItemValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('Enter Here');

  const alertTypes = [
    { label: 'Select Alert Type', value: '' },
    { label: 'Price reaches', value: '1' },
    { label: 'Price rises above', value: '2' },
    { label: 'Percentage Increase', value: '3' },
    { label: 'Volume Increase', value: '4' },
  ];
  return (
    <View>
      <View style={Styles.container}>
        <TouchableOpacity>
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
          selectedValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
          style={Styles.inputAndroid}
          itemStyle={{
            backgroundColor: 'green',
            marginLeft: 0,
            paddingLeft: 15
          }}
          placeholder='Enter here'
          mode="dropdown"
        >
          <Picker.Item label="Price reaches" value="Price reaches"/>
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

        />
      </View>
      <View style={Styles.dropdownContainer}>
        <Text style={{ color: 'white', marginVertical: 20 }}>Frequency</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
          style={Styles.inputAndroid}
          placeholder='Enter here'
          mode="dropdown"
        >
          <Picker.Item label="Only Once" value="Only Once" />
          <Picker.Item label="Once a day" value="Once a day" />
          <Picker.Item label="Always" value="Always" />
          <Picker.Item label="Custom" value="Custom" />
          <Picker.Item label="Menu item" value="Menu item" />
        </Picker>
      </View>
      <View style={Styles.container3}>
        <TouchableOpacity style={Styles.btn} >
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
    color:"white",
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
