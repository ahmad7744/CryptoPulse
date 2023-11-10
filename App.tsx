import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import WalkthroughOne from './screens/WalkthroughOne';
import WalkthroughTwo from './screens/WalkthroughTwo';
import LoginScreen from './screens/LoginScreen'; // Import your Login screen component

const App = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [loadPagination, setLoadPagination] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleIndexChanged = (initial: number) => {
    setMainIndex(initial);

    if (initial === 1) {
      setTimeout(() => {
        setRedirect(true);
      }, 2000); // Redirect after 2 seconds
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadPagination(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Redirect to Login screen when redirect state is true
  if (redirect) {
    return <LoginScreen navigation={'Login'} />;
  }

  return (
    <Swiper
      loop={false}
      showsPagination={loadPagination}
      index={mainIndex}
      paginationStyle={{ bottom: 10 }}
      onIndexChanged={handleIndexChanged}
      dotColor="#3E475A"
      activeDotColor="#6D778B"
    >
      <View>
        <WalkthroughOne />
      </View>
      <View>
        <WalkthroughTwo />
      </View>
    </Swiper>
  );
};

export default App;
