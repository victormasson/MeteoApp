import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

import style from '../style/Style';
import color from '../style/Color';

class About extends Component {

  static navigationOptions = {
    title: 'A propos de moi',
    tabBarIcon: () => {
      return <Image source={require('../image/icon/user.png')} style={{width: 20, height: 20}} />
    }
  }

  search () {
    this.props.navigation.navigate('Search');
  }

  render () {
    return (
      <View style={style.view}>
        <View style={style.container}>
          <Text>Lorem ipsum qsdjqhk jdhqskj hqkjs hkqj shkdjqsh qksj dhqkjs hdkqj sh</Text>
        </View>
        <Button color={color.red} onPress={() => this.search()} title="Rechercher" />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle,
  tabBarIcon: () => {
    return <Image source={require('../image/icon/user.png')} style={{width: 20, height: 20}} />
  }
}

export default StackNavigator({
  About: {
    screen: About,
    navigationOptions
  },
})