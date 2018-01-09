// ProfilePage.js
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default class ProfilePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '我的',
  });

  _pushToSettingsPage = () => {
    console.log(this.props.navigation);
    this.props.navigation.navigate('SettingsPage');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', }}
          onPress={this._pushToSettingsPage}
        >
          <Text style={{ fontSize: 14, color: '#333333', textAlign: 'center', }}>设置</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
