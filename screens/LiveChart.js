import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View } from 'react-native';
const LiveChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Your code to fetch live data and update the state
    const fetchData = async () => {
      // Fetch live data, e.g., from an API
      const response = await fetch('YOUR_API_ENDPOINT');
      const result = await response.json();

      // Update state with new data
      setData((prevData) => ({
        labels: [...prevData.labels, newLabel],
        datasets: [
          {
            data: [...prevData.datasets[0].data, newData],
          },
        ],
      }));
    };

    // Set an interval to fetch data at regular intervals
    const interval = setInterval(fetchData, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <LineChart
        data={data}
        width={300} // Width of the chart
        height={200} // Height of the chart
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
    </View>
  );
};

export default LiveChart;
