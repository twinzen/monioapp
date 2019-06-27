import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    View
} from 'react-native';

import {
    Header2,
} from '../Texts';

import {abbrNum} from '../../helpers/NumberFormatter';

import {
    AmountLabel,
} from '../../components/Texts';

import StylesConstant from '../../styles/StylesConstant';

export default class BarPie extends Component {

  constructor(props) {
    super(props);
    this.state = {
          data: this.props.data,
          barSize: (this.props.barSize)?this.props.barSize:20,
        };
  }

  render() {
    let values = this.state.data.values;
    let colors = this.state.data.colors;
    return (
      <View style={{width: 300, marginTop: 10, marginBottom: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.leftBar, {backgroundColor: colors[0], flex: (values[0]/(values[0]+values[1])), height: this.state.barSize}]} />
          <View style={[styles.rightBar, {backgroundColor: colors[1], flex: (values[1]/(values[0]+values[1])), height: this.state.barSize}]} />
        </View>
        <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <AmountLabel>{values[0]}</AmountLabel>
          <AmountLabel>{values[1]}</AmountLabel>
        </View>
      </View>
    )
  }

  _printBars() {
    let values = this.state.data.values;
    let barPercents = [];
    let bars = [];

    // total value
    let totalVal = values[0]+values[1];
    console.log(totalVal);

    // cal width of each bar
    for (i=0; i<values.length; i++) {
      barPercents[i] = values[i]/totalVal;
    }

    return bars;
  }

  _printLegends() {
    let legends = this.state.data.legends;
    let legendStrs = [];

    legendStrs[0] = <View key='legend_start'/>
    for (i=0; i<legends.length; i++) {
      legendStrs[i+1]=<Header2 color={StylesConstant.COLOR_1} key={'legend_'+i}>{legends[i]}</Header2>
    }
    legendStrs[legendStrs.length] = <View key='legend_end'/>

    return legendStrs;
  }

}

const styles = StyleSheet.create({
  bars_box: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: StylesConstant.COLOR_1,
    width: 250,
    height: 180,
    flexDirection: 'row',
  },
  legends_box: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250,
    height: 50,
    flexDirection: 'row',
  },
  bars_yLable: {
    width: 270,
    height: 30,
    justifyContent: 'flex-start',
  },
  bar_label: {
    fontSize: StylesConstant.TEXT_SIZE_NORMAL,
    color: StylesConstant.COLOR_1,
  },
  leftBar: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightBar: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});
