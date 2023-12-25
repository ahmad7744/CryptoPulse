import React from 'react';
import { View, Text } from 'react-native';

const CreateAlert = ({ selectedCrypto  }) => {
  return (
    <View>
      <Text>Create Alert for {selectedCrypto?.name}</Text>
      <Text>InstId: {selectedCrypto?.instId}</Text>
      <Text>Price: {selectedCrypto?.price}</Text>
      {/* Add your alert creation logic here */}
    </View>
  );
};

export default CreateAlert;
