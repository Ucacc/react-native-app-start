// SettingsPage.js
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default class SettingsPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '设置',
  });

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
