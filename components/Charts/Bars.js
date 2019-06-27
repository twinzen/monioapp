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

import StylesConstant from '../../styles/StylesConstant';

export default class Bars extends Component {

  constructor(props) {
    super(props);
    this.state = {
          data: this.props.data,
          yLabel: (this.props.yLabel)?this.props.yLabel:<View/>,
          barSize: (this.props.barSize)?this.props.barSize:20,
          barMargin: (this.props.barMargin)?this.props.barMargin:4,
          color: (this.props.color)?this.props.color:'#ffe599',
        };
  }

  render() {
    return (
      <View style={{width: 270}}>
          <View style={styles.bars_yLable}>{this.state.yLabel}</View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 8}}/>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.bars_box}>
                  {this._printBars()}
              </View>
              <View style={styles.legends_box}>
                  {this._printLegends()}
              </View>
            </View>
          </View>

      </View>
    )
  }

  _printBars() {
    let values = this.state.data.values;
    let barHeights = [];
    let bars = [];

    // find biggest values
    let biggest = values[0];
    for (i=0; i<values.length; i++) {
      if (biggest < values[i]) {
        biggest = values[i];
      }
    }

    // cal height of each bar
    for (i=0; i<values.length; i++) {
      barHeights[i] = (values[i]/biggest)*180*0.85;
    }

    bars[0] = <View key='bar_start'/>
    for (i=0; i<values.length; i++) {
      bars[i+1]=
        <View key={'bar_'+i} >
          <View><Text style={styles.bar_label}>{abbrNum(values[i], 2)}</Text></View>
          <View style=
                  {
                    [{backgroundColor: this.state.color, height: barHeights[i]},
                    this._barStyles()]
                  }
            />
        </View>
    }
    bars[bars.length] = <View key='bar_end'/>

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

  _barStyles() {
    return {
      width: this.state.barSize,
    }
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
  }
});
