import React, { memo, useEffect, useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LiveChart = ({ selectedCryptos, tickerValues, Back }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedCryptos || !tickerValues) {
      console.log('Data is not ready yet.');
      setLoading(true);
      return;
    }

    const newLabels = [...chartData.labels];
    const newData = {
      labels: newLabels,
      datasets: [
        {
          data: [...chartData.datasets[0].data],
        },
      ],
    };

    selectedCryptos.forEach((crypto) => {
      const cryptoData = tickerValues[crypto.instId];
      if (cryptoData) {
        // Append new data to the end of the dataset
        newData.labels.push(formatTimestamp(Date.now()));
        newData.datasets[0].data.push(parseFloat(cryptoData.idxPx));
      }
    });

    console.log('New Chart Data:', newData);
    setChartData(newData);
    setLoading(false);
  }, [selectedCryptos, tickerValues]);

  const formatTimestamp = (timestamp) => {
    // Format timestamp logic
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <ImageBackground source={require('../assets/Dashboardbg.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={Back}>
          <Image source={require('../assets/back-icon.png')} />
        </TouchableOpacity>

        <View style={styles.chartContainer}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 32}
              height={220}
              yAxisLabel="$"
              yAxisInterval={1}
              chartConfig={chartConfig}
              bezier
              style={{
                borderRadius: 16,
              }}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 15,
    display: 'flex',
    gap: 20,
  },
  chartContainer: {
    alignItems: 'center',
  },
});

export default memo(LiveChart);
