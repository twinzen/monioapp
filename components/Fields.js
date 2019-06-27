import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
} from 'react-native';

import StylesConstant from '../styles/StylesConstant';

export class Field0 extends Component {
  render() {
    return (
      <View style={styles.field0_mainBox}>
        <View style={styles.field0_sideBar}></View>
        <View style={styles.field0_middleBox}>{this.props.children}</View>
        <View style={styles.field0_sideBar}></View>
      </View>
    )
  }
}


export class FadeInField extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.spring(
      this.state.fadeAnim,
      {
        toValue: 1,
      }
    ).start();                        
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  field0_mainBox: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  field0_middleBox: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0,
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_0,
  },
  field0_sideBar: {
    width: 10,
    alignSelf: 'stretch',
    marginTop:30,
    backgroundColor: StylesConstant.COLOR_0,
  },
});
