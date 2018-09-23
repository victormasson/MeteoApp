import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image} from 'react-native';
import Moment from 'moment';
import Color from '../../style/Color';

Moment.locale('fr');

export default class Row extends Component {
  static propTypes = {
    day: PropTypes.object,
    index: PropTypes.number
  }

  day () {
    let day = Moment(this.props.day.dt * 1000).format('ddd');
    return (
      <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
    );
  }

  date () {
    let day = Moment(this.props.day.dt * 1000).format('DD/MM');
    return (
      <Text style={style.white}>{day}</Text>
    );
  }

  icon (size) {
    const type = this.props.day.weather[0].main.toLowerCase();
    let image;
    switch (type) {
      case 'clouds':
        image = require('../../image/icon/cloudy.png');
        break;
      case 'rain':
        image = require('../../image/icon/rain.png');
        break;
    
      default:
        image = require('../../image/icon/sun.png');
        break;
    }
    return (
      <Image source={image} style={{width: size, height: size}}/>
    );
  }

  render() {
    if (this.props.index === 0) {
      return (
        <View style={[style.flex, style.view, style.firstView]}>
          <View>
            <Text style={{color: Color.greyGrey}}>{this.day()}. {this.date()}</Text>
            {this.icon(90)}
          </View>
          <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.main.temp)}°c</Text>
        </View>
      );
    } else {
      return (
        <View style={[style.flex, style.view]}>
          <View style={style.flex}>
            {this.icon(50)}
            <Text style={{marginLeft: 10}}>{this.day()}. {this.date()}</Text>
          </View>
          <Text style={style.temp}>{Math.round(this.props.day.main.temp)}°c</Text>
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  white: {
    color : Color.white
  },
  bold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstView: {
    backgroundColor: Color.pink
  },
  view: {
    backgroundColor: Color.blue,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Color.other,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  temp: {
    color: Color.white,
    fontWeight: 'bold', 
    fontSize: 20
  }
}) 
