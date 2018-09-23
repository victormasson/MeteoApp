import React, {Component} from 'react';
import {ActivityIndicator, ListView, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Axios from 'axios';

import WeatherRow from './Weather/Row';
import style from '../style/Style';
import color from '../style/Color';

export default class List extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: `Météo / ${navigation.state.params.city}`,
      tabBarIcon: () => {
        return <Image source={require('../image/icon/home.png')} style={{width: 20, height: 20}} />
      }
    }
  }

  constructor (props) {
    super(props);

    this.state = {
      city: this.props.navigation.state.params.city,
      report: null
    }
    setTimeout(() => {
      this.fetchWeather();
    }, 1000);
  }

  fetchWeather() {
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=f522572b50d829c7ba3e5024d33aa37e`;
    Axios.get(url)
    .then((response) => {
      this.setState({report: response.data});
    });
  }

  render () {
    if (this.state.report === null) {
      return (
        <ActivityIndicator color={color.red} size='large' />
      );
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.report.list)}
          renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}
          />
      );
    }
  }
}