// HomePage.js
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default class HomePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '首页',
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#279fef"
          barStyle="light-content"
        />
      </View>
    );
  }
}
