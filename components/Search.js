import React, {Component} from 'react';
import {View, TextInput, Image, Button, Keyboard} from 'react-native';
import {StackNavigator} from 'react-navigation';

import style from '../style/Style';
import color from '../style/Color';

import List from './List';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: 'Dijon'
    }
  }

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: () => {
      return <Image source={require('../image/icon/home.png')} style={{width: 20, height: 20}} />
    }
  }

  submit () {
    Keyboard.dismiss();
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render () {
    return (
      <View style={style.view}>
        
        <TextInput
          underlineColorAndroid='transparent'
          style={style.textInput}
          onChangeText={(text) => this.setState({ city: text })}
          value={this.state.city}
          onSubmitEditing={() => this.submit()} />
        <Button color={color.red} onPress={() => this.submit()} title='Rechercher une ville' />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle,
  tabBarIcon: () => {
    return <Image source={require('../image/icon/home.png')} style={{width: 20, height: 20}} />
  }
}

export default StackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  },
})