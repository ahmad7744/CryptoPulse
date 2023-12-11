import React, { memo, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LiveChart = ({ selectedCryptos, tickerValues, Back }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef(null);

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
        newData.labels.push(formatTimestamp(Date.now()));
        newData.datasets[0].data.push(parseFloat(cryptoData.idxPx));


        if (newData.labels.length > 8) {
          newData.labels = newData.labels.slice(newData.labels.length - 8);
          newData.datasets[0].data = newData.datasets[0].data.slice(newData.datasets[0].data.length - 50);
        }

        /*
   if (newData.labels.length > 8) {
     newData.labels.shift();
     newData.datasets[0].data.shift();
   }
   */
      }
    });

    console.log('New Chart Data:', newData);
    setChartData(newData);
    setLoading(false);


    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [selectedCryptos, tickerValues]);

  const formatTimestamp = (timestamp) => {
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
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
    yAxisInterval: 5,




  };

  return (
    <ImageBackground source={require('../assets/Dashboardbg.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={Back}>
          <Image source={require('../assets/back-icon.png')} />
        </TouchableOpacity>

        <ScrollView
          ref={scrollViewRef}
          horizontal
          contentContainerStyle={styles.chartScrollView}
          onContentSizeChange={() => {
            if (scrollViewRef.current) {
              scrollViewRef.current.scrollToEnd({ animated: true });
            }
          }}
        >
          <View style={styles.chartContainer}>
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <LineChart
                data={chartData}
                width={Math.max(Dimensions.get('window').width, chartData.labels.length * 60)}
                height={220}
                yAxisLabel="$"
                yAxisInterval={5}
                yLabelsOffset={5}
                chartConfig={chartConfig}
                bezier
                style={{
                  borderRadius: 16,
                }}
              />
            )}
          </View>
        </ScrollView>
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
  chartScrollView: {
    alignItems: 'center',
  },
});

export default memo(LiveChart);
