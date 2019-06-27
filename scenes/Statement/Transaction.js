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


export default class Transaction extends Component {
  render() {
    const {remark, tradeDate, amount} = this.props;
    return (
        <View style={{flexDirection:'column', flex:1, marginTop: 5, marginBottom: 5, alignSelf:'stretch'}}>
          <View style={{flexDirection:'row', flex:1}}>
            <Text style={styles.subject}>{remark}</Text>
          </View>
          <View style={{flexDirection:'row', flex:1, marginTop: 3}}>
            <View style={{flex:0.5, alignItems: 'flex-start'}}>
              <Text style={styles.subject}>{tradeDate}</Text>
            </View>
            <View style={{flex:0.5, alignItems: 'flex-end'}}>
              <AmountLabel>{amount}</AmountLabel>
            </View>
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
