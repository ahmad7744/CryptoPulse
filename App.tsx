import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import WalkthroughOne from './screens/WalkthroughOne';
import WalkthroughTwo from './screens/WalkthroughTwo';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import Notifications from './screens/NotificationsScreen';
import Settings from './screens/SettingsScreen';
import SearchCurrency from './screens/SearchCurrency';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        height: 88,
        paddingHorizontal: 5,
        paddingTop: 0,
        paddingBottom: 18,
        backgroundColor: '#111622',
        position: 'absolute',
        borderTopWidth: 0,
        activeTintColor: '#3349FF',
        inactiveTintColor: '#25304B',
      },

      tabBarIcon: ({ color, size }) => {
        let iconName = 'default';
        let iconSource;

        if (route.name === 'Home') {
          iconName = 'Home.png';
          iconSource = require('./assets/Home.png');
        } else if (route.name === 'Notifications') {
          iconName = 'Notification.png';
          iconSource = require('./assets/Notification.png');
        } else if (route.name === 'Settings') {
          iconName = 'Settings.png';
          iconSource = require('./assets/Settings.png');
        }



        return <Image source={iconSource} style={{ height: size, tintColor: color, }} />;
      },
    })}

  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const App = () => {
  const [loadPagination, setLoadPagination] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadPagination(true);
    }, 2000); // Show swiper screens for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough" 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Walkthrough">
          {({ navigation }) => (
            <Swiper
              loop={false}
              showsPagination={loadPagination}
              paginationStyle={{ bottom: 10 }}
              dotColor="#3E475A"
              activeDotColor="#6D778B"
            >
              <View>
                <WalkthroughOne />
              </View>
              <View>
                <WalkthroughTwo navigation={navigation} />
              </View>
            </Swiper>
          )}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {({ navigation }) => <LoginScreen navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
