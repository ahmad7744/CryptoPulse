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



import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useWebSocket from 'react-native-use-websocket';
import _ from 'lodash';

const SOCKET_URL = 'wss://wsaws.okx.com:8443/ws/v5/public';
const tickerChannel = 'index-tickers';

const allCoins = [
  { instId: 'BTC-USDT', name: 'Bitcoin', icon: require('../assets/btc-Icon.png') },
  { instId: 'ETH-USDT', name: 'Ethereum', icon: require('../assets/Eth-icon.png') },
  { instId: 'BCH-USDT', name: 'Bitcoin Cash', icon: require('../assets/btc-Icon.png') },
  { instId: 'XRP-USDT', name: 'Ripple', icon: require('../assets/Ripple-icon.png') },
  { instId: 'LTC-USDT', name: 'Litecoin', icon: require('../assets/Litecoin-icon.png') },
  { instId: 'DASH-USDT', name: 'DASH', icon: require('../assets/Dash-Icon.png') },
];

const CoinItem = React.memo(({ item, tickerValues }) => (
  <TouchableOpacity>
    <View style={styles.coinItem}>
      <View style={styles.coinInfo}>
        <Image source={item.icon} style={{ marginRight: 20 }} />
        <View>
          <Text style={styles.coinText}>{item.name}</Text>
          <Text style={styles.coinTextOne}>{item.instId}</Text>
        </View>
      </View>
      <Text style={styles.timestampText}>{tickerValues[item.instId]?.ts}</Text>
      <Text style={styles.priceText}>${tickerValues[item.instId]?.idxPx}</Text>
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({


  searchIcon: {
    tintColor: '#6D778B',
  },
  container: {
    flex: 1,
    paddingHorizontal:30
  },
  inputContainer: {
    margin: 10,
  },
  coinItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems:"center"
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    fontWeight: 'bold',
    color: 'white',
  },
  coinTextOne: {
    fontWeight: 'bold',
    color: 'red',
  },
  timestampText: {
    fontWeight: 'bold',
    color: 'green',
  },
  priceText: {
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#1A202E',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 14,
    height: 38,
  },
  headerText: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 14,
    color: '#fff',
    lineHeight: 22,
  },
  back: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 58.5,
  },
});

export default function SearchCurrency({ onBack }) {
  const { sendMessage, lastMessage } = useWebSocket(SOCKET_URL, {
    onOpen: () => console.log('WebSocket Connected'),
    shouldReconnect: (closeEvent) => true,
  });

  const [tickerValues, setTickerValues] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = useCallback(
    _.debounce((query) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  useEffect(() => {
    const subscriptions = allCoins.map((coin) => ({
      channel: tickerChannel,
      instId: coin.instId,
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
  }, [allCoins, sendMessage]);  // <-- Add dependencies here

  useEffect(() => {
    if (lastMessage && lastMessage.data) {
      try {
        const data = JSON.parse(lastMessage.data);

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
        console.error('Error parsing JSON:', error);
      }
    }
  }, [lastMessage]);  // <-- Dependency array for useEffect

  const filteredCoins = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <View style={{ flexDirection: 'column', gap: 40 }}>
      <View style={styles.back}>
        <TouchableOpacity onPress={onBack}>
          <Image source={require('../assets/back-icon.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Crypto to Monitor</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('../assets/search-icon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#6D778B"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
      <FlatList
        data={filteredCoins}
        keyExtractor={(item) => item.instId}
        renderItem={({ item }) => <CoinItem item={item} tickerValues={tickerValues} />}
      />
    </View>
  );
}
