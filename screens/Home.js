import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import SearchCurrency from './SearchCurrency';
// import useWebSocket from 'react-native-use-websocket';

const SOCKET_URL = 'wss://wsaws.okx.com:8443/ws/v5/public';
const tickerChannel = 'index-tickers';

const Home = () => {
  const [showSearchAdd, setShowSearchAdd] = useState(false);
  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);

  const [tickerValues, setTickerValues] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL);
    socket.onopen = () => {
      const subscriptions = allCoins.map((coin) => ({
        channel: tickerChannel,
        instId: coin.instId,
      }));

      const message = {
        op: 'subscribe',
        args: subscriptions,
      };
      socket.send(JSON.stringify(message))
    }

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data?.data) {
          setTickerValues((prevValues) => {
            const updatedValues = {};
            data.data.forEach((item) => {
              updatedValues[item.instId] = {
                idxPx: item.idxPx,
                pxVar: item.pxVar,
                ts: item.ts,
              };
            });

            return { ...prevValues, ...updatedValues };
          });
        }
      } catch (error) {
        console.log({ error })
      }
    }

    return () => {
      socket.close()
    }
    // return () => {
    //   const unsubscribeMessage = {
    //     op: 'unsubscribe',
    //     args: subscriptions,
    //   };
    //   sendMessage(JSON.stringify(unsubscribeMessage));
    // };
  }, []);

  const handleButtonPress = () => {
    setShowSearchAdd(true);
  };


  // useEffect(() => {
  //   const subscriptions = selectedCryptos.map((crypto) => ({
  //     channel: tickerChannel,
  //     instId: crypto?.instId,
  //   }));

  //   const message = {
  //     op: 'subscribe',
  //     args: subscriptions,
  //   };

  //   sendMessage(JSON.stringify(message));

  //   return () => {
  //     const unsubscribeMessage = {
  //       op: 'unsubscribe',
  //       args: subscriptions,
  //     };
  //     sendMessage(JSON.stringify(unsubscribeMessage));
  //   };
  // }, [selectedCryptos, sendMessage]);

  // useEffect(() => {
  //   if (lastMessage && lastMessage.data) {
  // try {
  //   const data = JSON.parse(lastMessage.data);
  //   if (data?.data) {
  //     setTickerValues((prevValues) => {
  //       const updatedValues = {};
  //       data.data.forEach((item) => {
  //         updatedValues[item.instId] = {
  //           idxPx: item.idxPx,
  //           pxVar: item.pxVar,
  //           ts: item.ts,
  //         };
  //       });

  //       return { ...prevValues, ...updatedValues };
  //     });
  //   }
  // } catch (error) {
  //   console.error('Error parsing JSON:', error);
  // }
  //   }
  // }, [lastMessage]);
  const allCoins = [
    { instId: 'BTC-USDT', name: 'Bitcoin', icon: require('../assets/btc-Icon.png') },
    { instId: 'ETH-USDT', name: 'Ethereum', icon: require('../assets/Eth-icon.png') },
    { instId: 'BCH-USDT', name: 'Bitcoin Cash', icon: require('../assets/btc-Icon.png') },
    { instId: 'XRP-USDT', name: 'Ripple', icon: require('../assets/Ripple-icon.png') },
    { instId: 'LTC-USDT', name: 'Litecoin', icon: require('../assets/Litecoin-icon.png') },
    { instId: 'DASH-USDT', name: 'DASH', icon: require('../assets/Dash-Icon.png') },
  ];
  const filteredCoins = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCryptoSelect = (crypto) => {

    setSelectedCryptos([...selectedCryptos, crypto]);

    setContentIndex(contentIndex + 1);
  };
  const handleBack = () => {
    setShowSearchAdd(false);
  };
  console.log({ selectedCryptos, tickerValues })
  function gettingTheRealtimeValues() {
    setSelectedCryptos((prevSelectedCryptos) => {
      return prevSelectedCryptos.map((crypto) => {
        const updatedTicker = tickerValues[crypto.instId];
        return {
          ...crypto,
          price: updatedTicker?.idxPx,
        };
      });
    });
  }


  useEffect(() => {
    if (selectedCryptos?.length < 1) return

    gettingTheRealtimeValues()
  }, [tickerValues, selectedCryptos?.length])
  let searchProps = {
    onBack: handleBack, onCryptoSelect: handleCryptoSelect, setSelectedCryptos, tickerValues, filteredCoins, searchQuery, setSearchQuery
  }
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
              {crypto?.name}
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: '#FF3750',
                lineHeight: 22,
              }}>
              {crypto?.change}
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Bold',
                fontSize: 11,
                color: 'white',
                lineHeight: 12,
              }}>
              ${crypto?.price}
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
                color: 'white',
                lineHeight: 22,
              }}>
              ${crypto?.price}
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
          <React.Fragment>

            <View style={styles.container}>
              <Text style={{ color: '#6D778B', fontSize: 14, alignSelf: 'flex-end' }}>
                Crypto Monitoring
              </Text>
              <TouchableOpacity onPress={handleButtonPress}>
                <Image source={require('../assets/Button.png')} />
              </TouchableOpacity>
            </View>

            {renderContent()}
          </React.Fragment>
        ) : (
          // <SearchCurrency onBack={handleBack} onCryptoSelect={handleCryptoSelect} setSelectedCryptos={setSelectedCryptos} />
          <SearchCurrency {...searchProps} />
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


