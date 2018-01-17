// LottieExample.js
// 测试 lottie-react-native

import React from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';

export default class LottieExample extends React.Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./sources/animations/PinJump.json')}
      />
    );
  }
}

