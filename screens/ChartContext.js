// ChartContext.js
import React, { createContext, useContext, useState } from 'react';

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [showChart, setShowChart] = useState(false);
  const [selectedCryptoForChart, setSelectedCryptoForChart] = useState(null);

  const openChart = (crypto) => {
    setShowChart(true);
    setSelectedCryptoForChart(crypto);
  };

  const closeChart = () => {
    setShowChart(false);
    setSelectedCryptoForChart(null);
  };

  return (
    <ChartContext.Provider value={{ showChart, selectedCryptoForChart, openChart, closeChart }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChart = () => {
  return useContext(ChartContext);
};
