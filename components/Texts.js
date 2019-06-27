import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import StylesConstant from '../styles/StylesConstant';

export class Header0 extends Component {
  render() {
    return (
      <Text style={[styles.header0,
        {color: this.props.color?this.props.color:StylesConstant.COLOR_0}]}>
        {this.props.children}
      </Text>
    )
  }
}

export class Header1 extends Component {
  render() {
    return (
      <Text style={[styles.header1,
        {color: this.props.color?this.props.color:StylesConstant.COLOR_0}]}>
        {this.props.children}
      </Text>
    )
  }
}

export class Header2 extends Component {
  render() {
    return (
      <Text style={[styles.header2,
        {color: this.props.color?this.props.color:StylesConstant.COLOR_0}]}>
        {this.props.children}
      </Text>
    )
  }
}

export class FormLabel extends Component {
  render() {
    return (
      <Text style={[styles.formLabel, this.props.styles]}>
        {this.props.children}
      </Text>
    )
  }
}

export class AmountLabel extends Component {
  render() {
    return (
      <View style={styles.amountLabelBox}>
        <Image
            style={styles.amountLableIcon}
            source={require('../imgs/icon_coin_50_50.png')}
          />
        <Text style={styles.amountLabel}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

export class AmountLabelLarge extends Component {
  render() {
    return (
      <View style={styles.amountLabelBox}>
        <Image
            style={styles.amountLargeLableIcon}
            source={require('../imgs/icon_coin_50_50.png')}
          />
        <Text style={styles.amountLargeLabel}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header0: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGEST,
  },
  header1: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_0,
  },
  header2: {
    fontSize: StylesConstant.TEXT_SIZE_NORMAL,
    fontWeight: 'bold'
  },
  formLabel: {
    fontSize: StylesConstant.TEXT_SIZE_NORMAL,
    color: StylesConstant.COLOR_1,
  },
  amountLabelBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountLableIcon: {
    height: 16,
    width: 16,
  },
  amountLabel: {
    fontSize: StylesConstant.TEXT_SIZE_NORMAL,
    color: StylesConstant.COLOR_1,
    paddingLeft: 10,
  },
  amountLargeLableIcon: {
    height: 20,
    width: 20,
  },
  amountLargeLabel: {
    fontSize: StylesConstant.TEXT_SIZE_SUPER,
    color: StylesConstant.COLOR_1,
    paddingLeft: 10,
  },

});
