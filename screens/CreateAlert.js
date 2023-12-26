import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , Picker } from 'react-native';


const CreateAlert = ({ selectedCryptos }) => {
  if (!selectedCryptos || selectedCryptos.length === 0) {
    return <Text>No selected cryptocurrencies</Text>;
  }
  const [selectedItemValue, setSelectedItemValue] = useState('');

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
      <View style={Styles.formContainer}>
        <Text style={Styles.label}>Alert Type:</Text>
        <Picker
          style={Styles.picker}
          selectedValue={selectedItemValue}
          onValueChange={(itemValue) => setSelectedItemValue(itemValue)}
        >
          {alertTypes.map((type) => (
            <Picker.Item key={type.value} label={type.label} value={type.value} />
          ))}
        </Picker>
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
});

export default CreateAlert;
