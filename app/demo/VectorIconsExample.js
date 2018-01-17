// VectorIconsExample.js
// 测试 react-native-vector-icons

import React, { Component } from 'react';

import { View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class VectorIconsExample extends Component {
  render() {
    return (
      <View>
        <Ionicons name="ios-person" size={30} color="#4F8EF7" />
      </View>
    );
  }
}