// import {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet,Image,} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';


// const cryptoData = [
//   { id: 1, icon: require('../assets/btc-Icon.png'), name: 'Bitcoin', symbol: 'BTC', price: '$5,750.70', change: '+ 7.12' },
//   { id: 2, icon: require('../assets/Eth-icon.png'), name: 'Ethereum', symbol: 'ETH', price: '$315.86', change: '- 4.05' },
//   { id: 3, icon: require('../assets/btc-Icon.png'), name: 'Bitcoin Cash', symbol: 'BCH', price: '$1,181.54', change: '- 21.12' },
//   { id: 4, icon: require('../assets/Ripple-icon.png'), name: 'Ripple', symbol: 'XRP', price: '$0.20034', change: '+ 14.92' },
//   { id: 5, icon: require('../assets/Litecoin-icon.png'), name: 'Litecoin', symbol: 'LTC', price: '$61.13', change: '- 1.69' },
//   { id: 6, icon: require('../assets/Dash-Icon.png'), name: 'Dash', symbol: 'DASH', price: '$405.23', change: '- 9.65' },
//   { id: 7, icon: require('../assets/Pree-Icon.png'), name: 'Peercoin', symbol: 'PPC', price: '$0.922156', change: '+ 5.10' },
// ];

// const CryptoItem = ({ icon, name, symbol, price, change , onSelect }) => (
//   <TouchableOpacity style={styles.Mcontent} onPress={onSelect}  >
//     <View>
//       <Image source={icon} />
//     </View>
//     <View style={styles.content}>
//       <View>
//         <Text style={styles.cryptoName}>{name}</Text>
//         <Text style={styles.cryptoSymbol}>{symbol}</Text>
//       </View>
//       <View>
//         <Text style={styles.cryptoPrice}>{price}</Text>
//         <Text style={[
//           styles.cryptoChange,
//           { color: change.startsWith('+') ? '#00C873' : '#FF3750' },
//         ]}>
//           {change} %
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const SearchCurrency = ({ onBack , onCryptoSelect }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredCryptoData, setFilteredCryptoData] = useState(cryptoData);
//     const handleCryptoSelect = (crypto) => {

//         onCryptoSelect(crypto);
//       };
//       const handleSearch = (query) => {
//         const filteredData = cryptoData.filter((item) =>
//           item.name.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilteredCryptoData(filteredData);
//         setSearchQuery(query);
//       };

//   return (
//     <View style={styles.Mcontainer}>
//     <View style={styles.back}>
//       <TouchableOpacity onPress={onBack}>
//         <Image source={require('../assets/back-icon.png')} />
//       </TouchableOpacity>
//       <Text style={styles.headerText}>Add Crypto to Monitor</Text>
//     </View>
//     <View style={styles.searchContainer}>
//       <Image source={require('../assets/search-icon.png')} style={styles.searchIcon} />
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search"
//         placeholderTextColor="#6D778B"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//     </View>
//     {filteredCryptoData.map((item) => (
//       <CryptoItem
//         key={item.id}
//         icon={item.icon}
//         name={item.name}
//         symbol={item.symbol}
//         price={item.price}
//         change={item.change}
//         onSelect={() => handleCryptoSelect(item)}
//       />
//     ))}
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   Mcontainer: {
//     paddingHorizontal: 15,
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   Mcontent: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap:20,

//     marginTop: 10,
//     fontFamily: 'SF-Pro-Text-Regular',
//     alignItems: 'center',
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     alignItems: 'center',
//     borderBottomWidth:1,
//     paddingVertical:16,
//     borderBottomColor:'#1A202E',
//   },
//   content2: {
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 20,
//     justifyContent: 'space-between',
//     backgroundColor: '#1A202E',
//     borderTopColor: '#2E3546',
//     borderTopWidth: 1,
//     fontFamily: 'SF-Pro-Text-Regular',
//   },
//   back: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 20,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//     backgroundColor: '#1A202E',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     width: 13,
//     height: 13,
//     tintColor: '#6D778B',
//   },
//   searchInput: {
//     flex: 1,
//     color: '#fff',
//     marginLeft: 10,
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 14,
//     height: 38,
//   },
//   headerText: {
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 14,
//     color: '#fff',
//     lineHeight: 22,
//   },

//   cryptoName: {
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 14,
//     color: '#fff',
//     lineHeight: 22,
//   },

//   cryptoSymbol: {
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 11,
//     color: '#6D778B',
//     lineHeight: 16,
//   },

//   cryptoPrice: {
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 14,
//     color: '#fff',
//     lineHeight: 22,
//   },

//   cryptoChange: {
//     fontFamily: 'SF-Pro-Text-Bold',
//     fontSize: 11,
//     lineHeight: 16,
//     textAlign: 'right',
//   },
// });
// export default SearchCurrency;



import React, { useEffect, useState } from 'react';
import useWebSocket from 'react-native-use-websocket';
import { View, Text, FlatList } from 'react-native';

const SOCKET_URL = 'wss://wsaws.okx.com:8443/ws/v5/public';
const tickerChannel = 'index-tickers';
const tickerInstIds = [
  'BTC-USDT',
  'ETH-USDT',
  'XRP-USDT',
  'LTC-USDT',
  'ADA-USDT',
  'DOT-USDT',
  'UNI-USDT',
  'LINK-USDT',
  'DOGE-USDT',
  'BCH-USDT',
];

export default function SearchCurrency() {
  const { sendMessage, lastMessage } = useWebSocket(SOCKET_URL, {
    onOpen: () => console.log('WebSocket Connected'),
    shouldReconnect: closeEvent => true,
  });

  const [tickerValues, setTickerValues] = useState({});

  useEffect(() => {
    const subscriptions = tickerInstIds.map(instId => ({
      channel: tickerChannel,
      instId,
    }));

    const message = {
      op: 'subscribe',
      args: subscriptions,
    };

    sendMessage(JSON.stringify(message));

    return () => {
      const unsubscribeMessage = {
        op: 'unsubscribe',
        args: subscriptions,
      };
      sendMessage(JSON.stringify(unsubscribeMessage));
    };
  }, [tickerInstIds, sendMessage]);

  useEffect(() => {
    if (lastMessage && lastMessage.data) {
      try {
        const data = JSON.parse(lastMessage.data);
        console.log('Received data:', data);

        if (data?.data) {
          setTickerValues(prevValues => {
            const updatedValues = {};
            data.data.forEach(item => {
              updatedValues[item.instId] = {
                idxPx: item.idxPx,
                pxVar: item.pxVar,
                // Add more properties as needed
              };
            });

            // Check if there are changes before updating state
            return { ...prevValues, ...updatedValues };
          });
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, [lastMessage]);

  console.log('Ticker Values:', tickerValues);

  return (
    <View>
      <FlatList
        data={tickerInstIds}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>{item}</Text>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>
              {tickerValues[item]?.ts}
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              ${tickerValues[item]?.idxPx}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
