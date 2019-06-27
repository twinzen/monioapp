import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import StylesConstant from '../styles/StylesConstant';

export default class HorizonLine extends Component {
  render() {
    return (
      <View style= {{
                      alignSelf: 'stretch',
                      flex:1,
                      marginTop: 5,
                      marginBottom: 5,
                      height: 1,
                      backgroundColor: StylesConstant.COLOR_1,
                    }}>
      </View>
    )
  }
}
