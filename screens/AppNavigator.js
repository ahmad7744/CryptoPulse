

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import Dashboard from './DashBoard';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

const AppStack = createStackNavigator({
  Dashboard: Dashboard,
});

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth', // Change to 'App' if you want to start with the dashboard
  }
);

export default createAppContainer(AppNavigator);
