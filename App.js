import React from 'react';
import { View } from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Everything on Home page
const TabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}



const App = () => {
  return (
    <View>
        <Text>App.js</Text>
    </View>
  )
}

export default App;