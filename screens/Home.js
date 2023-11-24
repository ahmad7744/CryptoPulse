import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import SearchCurrency from './SearchCurrency';

const Home = () => {
  const [showSearchAdd, setShowSearchAdd] = useState(false);
  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);
  const baseUrl = "https://www.okx.com/api/v5"
  const handleButtonPress = () => {
    setShowSearchAdd(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          instType: 'SPOT',
          instId: 'BTC-USDT'
        };
        const url = `${baseUrl}/public/instruments?` + new URLSearchParams(params);
        // Make API call using fetch
        const response = await fetch(url);
        const result = await response.json();
        console.log({ result })
        // Update state with the fetched data
      } catch (err) {
        // Handle errors
      }
    };

    fetchData();
  }, []);
  const handleBack = () => {
    setShowSearchAdd(false);
  };

  const handleCryptoSelect = (crypto) => {

    setSelectedCryptos([...selectedCryptos, crypto]);

    setContentIndex(contentIndex + 1);
  };
  console.log({ selectedCryptos })

  const renderContent = () => {
    if (selectedCryptos.length > 0) {

      return selectedCryptos.map((crypto, index) => (
        <View key={index} style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 14,
                color: '#fff',
                lineHeight: 22,
              }}>
              {crypto.name}
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: crypto.change.startsWith('+') ? '#00C873' : '#FF3750',
                lineHeight: 22,
              }}>
              {crypto.change}
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: crypto.change.startsWith('+') ? '#00C873' : '#FF3750',
                lineHeight: 12,
              }}>
              {crypto.price}
            </Text>
          </View>
          <View>
            <Image source={crypto.change.startsWith('-') ? require('../assets/Graph-1.png') : require('../assets/Graph.png')} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 14,
                color: crypto.change.startsWith('+') ? '#00C873' : '#FF3750',
                lineHeight: 22,
              }}>
              {crypto.price}
            </Text>
          </View>
        </View>
      ));
    } else {

      const contentSections = [
        <View key={0} style={styles.content}>

          <View>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 14,
                color: '#fff',
                lineHeight: 22,
              }}>
              BTC
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: '#00C873',
                lineHeight: 22,
              }}>
              +8.64%
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: '#00C873',
                lineHeight: 12,
              }}>
              +$220.85
            </Text>
          </View>
          <View>
            <Image source={require('../assets/Graph.png')} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 14,
                color: '#0078FF',
                lineHeight: 22,
              }}>
              $35,341.70
            </Text>
          </View>

        </View>,

        <View key={1} style={styles.content}>

        </View>,
      ];

      return contentSections[contentIndex];
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Dashboardbg.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.Mcontainer}>
        {!showSearchAdd ? (
          <>
            <View style={styles.container}>
              <Text style={{ color: '#6D778B', fontSize: 14, alignSelf: 'flex-end' }}>
                Crypto Monitoring
              </Text>
              <TouchableOpacity onPress={handleButtonPress}>
                <Image source={require('../assets/Button.png')} />
              </TouchableOpacity>
            </View>

            {renderContent()}
          </>
        ) : (
          <SearchCurrency onBack={handleBack} onCryptoSelect={handleCryptoSelect} />
        )}
      </View>
    </ImageBackground>
  );
};




const styles = StyleSheet.create({
  Mcontainer: {
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A202E',
    borderBottomColor: '#2E3546',
    borderBottomWidth: 1,
    fontFamily: 'SF-Pro-Text-Regular',
  },
  selectedCryptoContent: {
    backgroundColor: '#1A202E',
    marginTop: 10,
    padding: 20,
  },
  cryptoName: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 14,
    color: '#fff',
    lineHeight: 22,
  },
  cryptoSymbol: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 11,
    color: '#6D778B',
    lineHeight: 16,
  },
});

export default Home;


