import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import {
    AmountLabel,
} from '../../components/Texts';

import StylesConstant from '../../styles/StylesConstant';


export default class SubTotal extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', flex:1, marginTop: 5, marginBottom: 5}}>
        <View style={{flex:0.5, alignItems: 'flex-start'}}>
          <Text style={styles.subject}>{this.props.subject}</Text>
        </View>
        <View style={{flex:0.5, alignItems: 'flex-end'}}>
          <AmountLabel>{this.props.amount}</AmountLabel>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subject: {
    fontSize: StylesConstant.TEXT_SIZE_NORML,
    color: StylesConstant.COLOR_1,
  },
});
