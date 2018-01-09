// ReactNavigationExample/index.js
// 测试 react-navigation
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Platform,
    StyleSheet,
  } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';

const MainTabs = TabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarLabel: '个人',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    lazyLoad: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      iconStyle: {
        width: 24,
        height: 24,
      },
      activeTintColor: '#279fef',
      inactiveTintColor: '#b2b2b2',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        // height: Platform.OS === 'ios' ? 49 : 57,
        backgroundColor: 'white',
        // borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#EDEDED',
      },
      indicatorStyle: {
        opacity: 0,
        backgroundColor: 'white',
      },
    },
  },
);

const AppNavigator = StackNavigator(
  {
    MainTabs: {
      screen: MainTabs,
    },
    SettingsPage: {
      screen: SettingsPage,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#279fef',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: (Platform.OS === 'ios' ? '600' : '500'),
        alignSelf: 'center',
      },
      headerLeft: navigation.state.index !== undefined ? (<View />) : (
        <View
          style={{
            width: 44,
            height: 44,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <EvilIcons name={'chevron-left'} size={44} style={{ color: 'white', }}/>
          </TouchableOpacity>
        </View>
      ),
      headerRight: (<View />),
      headerTintColor: 'white',
      headerBackTitleStyle: {
        color: 'white',
        backgroundColor: 'white',
      },
    }),
  },
);

export default AppNavigator;
// export default class ReactNavigationExample extends Component {
//   render(){
//     return (
//       <AppNavigator
//         // navigation={
//         //   addNavigationHelpers({
//         //     ...this.props,
//         //   })
//         // }
//       >
//         <StatusBar
//           backgroundColor="#279fef"
//           barStyle="light-content"
//         />
//       </>
//     );
//   }
// }
