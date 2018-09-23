import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {TabNavigator} from 'react-navigation';

import About from './components/About';
import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}

const Tabs = TabNavigator({
  Search: {
    screen: Search
  },
  About: {
    screen: About
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true, 
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: "#FFF"
    },
    style: {
      backgroundColor: "#A2273C",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  }
})