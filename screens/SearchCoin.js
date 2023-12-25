import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';

const allCoins = [
    { instId: 'BTC-USDT', name: 'Bitcoin', icon: require('../assets/BTC-icon-1.png') },
    { instId: 'ETH-USDT', name: 'Ethereum', icon: require('../assets/ETH-icon-1.png') },
    { instId: 'BCH-USDT', name: 'Bitcoin Cash', icon: require('../assets/BTC-icon-1.png') },
    { instId: 'XRP-USDT', name: 'Ripple', icon: require('../assets/XPR-icon-1.png') },
    { instId: 'LTC-USDT', name: 'Litecoin', icon: require('../assets/LCT-icon-2.png') },
    { instId: 'DASH-USDT', name: 'DASH', icon: require('../assets/DASH-icon-1.png') },
];

const CoinItem = React.memo(({ item, tickerValues, setSelectedCryptos, onPress }) => (
    <TouchableOpacity onPress={() => {
        console.log({ tickerValues })
        if (tickerValues != undefined) {
            const selectedCrypto = {
                ...item,
                ticker: tickerValues[item.instId],
                price: tickerValues[item.instId]?.idxPx
            };
            setSelectedCryptos((prevSelectedCryptos) => [...prevSelectedCryptos, selectedCrypto]);
            onPress(selectedCrypto);
        }
    }}>
        <View style={Styles.coinItem}>
            <View style={Styles.coinInfo}>
                <Image source={item.icon} />
            </View>
            <View style={Styles.nameprice} >
                <View>
                    <Text style={Styles.coinText}>{item.name}</Text>
                    <Text style={Styles.coinTextOne}>{item.instId}</Text>
                </View>
                <Text style={Styles.priceText}>${tickerValues[item.instId]?.idxPx}</Text>
            </View>
        </View>
    </TouchableOpacity>
));


export default function SearchCoin({ onBack, onCryptoSelect, setSelectedCryptos, tickerValues, filteredCoins, searchQuery, setSearchQuery }) {

    const handleCoinSelect = (coin) => {
        onCryptoSelect(coin);
        onBack();
    };



    // const handleSearchChange = useCallback(
    //     _.debounce((query) => {
    //         setSearchQuery(query);
    //     }, 300),
    //     []
    // );

    return (
        <ImageBackground source={require('../assets/Dashboardbg.png')} style={Styles.DashboardBG}>
            <View style={Styles.mainconint}>
                <View style={Styles.mainsearchcoint}>

                    <View style={Styles.searchContainer}>
                        <Image source={require('../assets/search-icon.png')} style={Styles.searchIcon} />
                        <TextInput
                            style={Styles.searchInput}
                            placeholder="Search Coin Pairs"
                            placeholderTextColor="#6D778B"

                        />
                    </View>
                    <TouchableOpacity onPress={onBack}>
                        <Text style={Styles.cencaltext}>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                </View>


                <FlatList
                    data={allCoins}
                    keyExtractor={(item) => item.instId}
                    renderItem={({ item }) => <CoinItem item={item} tickerValues={tickerValues} onPress={() => {
                        handleCoinSelect(item)
                    }} setSelectedCryptos={setSelectedCryptos} />}
                />
            </View>
        </ImageBackground>

        );
    }
    


const Styles = StyleSheet.create({
    mainconint: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 24,
        paddingLeft: 15,
        paddingRight: 15,
        gap:45,
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
    searchInput: {
        flex: 1,
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'SF-Pro-Text-Bold',
        fontSize: 14,
        height: 38,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    mainsearchcoint: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14

    },
    cencaltext: {
        fontFamily: "SF Pro Text",
        fontSize: 14,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#FFFFFF"

    },

    coinItem: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 20,
        width: "100%"
    
      },
      coinInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      nameprice: {
        borderBottomWidth: 1,
        paddingVertical: 16,
        borderBottomColor: '#1A202E',
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    
    
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
});


