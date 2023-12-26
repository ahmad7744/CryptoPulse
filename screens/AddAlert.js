import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import SearchCoin from './SearchCoin';
import CreateAlert from './CreateAlert';

const AddAlert = () => {
    const [showSearchCurrency, setShowSearchCurrency] = useState(false);
    const [selectedCryptoForAlert, setSelectedCryptoForAlert] = useState(null);

    const handleAddAlertPress = () => {
        // Reset selectedCryptoForAlert when pressing "Add Alert"
        setSelectedCryptoForAlert(null);
        setShowSearchCurrency(true);
    };

    const handleCryptoSelect = (crypto) => {
        setSelectedCryptos([...selectedCryptos, crypto]);
        setContentIndex(contentIndex + 1);

        // Set the selected crypto for creating an alert
        setSelectedCryptoForAlert(crypto);

        // Close the search screen
        setShowSearchCurrency(false);
    };



    const SOCKET_URL = 'wss://wsaws.okx.com:8443/ws/v5/public';
    const tickerChannel = 'index-tickers';


    const [showSearchAdd, setShowSearchAdd] = useState(false);
    const [selectedCryptos, setSelectedCryptos] = useState([]);
    const [contentIndex, setContentIndex] = useState(0);

    const [tickerValues, setTickerValues] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [showCurrencyChart, setshowCurrencyChart] = useState(false)


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
                console.log('Received data:', data);

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

    }, []);

    const handleButtonPress = () => {
        setShowSearchAdd(true);
    };




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

    // const handleCryptoSelect = (crypto) => {

    //     setSelectedCryptos([...selectedCryptos, crypto]);

    //     setContentIndex(contentIndex + 1);
    // };
    const handleBack = () => {
        setShowSearchAdd(false);
    };
    const handlebackhome = () => {
        setshowCurrencyChart(false)
    }
    function gettingTheRealtimeValues() {
        setSelectedCryptos((prevSelectedCryptos) => {
            return prevSelectedCryptos.map((crypto) => {
                const updatedTicker = tickerValues[crypto.instId];
                console.log({ updatedTicker })
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

    return (
        <ImageBackground
      source={require('../assets/Dashboardbg.png')}
      style={Styles.DashboardBG}
    >
      {showSearchCurrency ? (
        <SearchCoin {...searchProps} />
      ) : selectedCryptoForAlert ? (
        <CreateAlert selectedCrypto={selectedCryptoForAlert} selectedCryptos={selectedCryptos} />
      ) : (
        <View style={Styles.mainconint}>
          <View style={Styles.container}>
            <TouchableOpacity onPress={() => setShowSearchCurrency(false)}>
              <Image source={require('../assets/back-icon.png')} />
            </TouchableOpacity>
            <Text style={Styles.headerText}>Notification Alert</Text>
          </View>

          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Button
              style={Styles.Addbtn}
              title="Add Alert"
              onPress={handleAddAlertPress}
            />
          </View>

          {selectedCryptos.map((crypto, index) => (
            <CreateAlert key={index} selectedCrypto={selectedCryptos} />
          ))}
        </View>
      )}
    </ImageBackground>
    );
};

const Styles = StyleSheet.create({
    mainconint: {
        width: '100%',
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    Addbtn: {
        backgroundColor: '#3249FF',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    DashboardBG: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
});

export default AddAlert;
