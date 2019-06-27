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
} from './Texts';

import StylesConstant from '../styles/StylesConstant';

export class Bars extends Component {

  constructor(props) {
    super(props);
    this.state = {
          data: this.props.data,
          yLabel: (this.props.yLabel)?this.props.yLabel:<View/>,
          barSize: (this.props.barSize)?this.props.barSize:20,
          barMargin: (this.props.barMargin)?this.props.barMargin:4,
        };
  }

  render() {
    return (
      <View>
          <View style={styles.bars_yLable}>{this.state.yLabel}</View>
          <View style={styles.bars_box}>
              {this._printBars()}
          </View>
          <View style={styles.legends_box}>
              {this._printLegends()}
          </View>
      </View>
    )
  }

  _printBars() {
    let values = this.state.data.values;
    let colors = this.state.data.colors;
    let barHeights = [];
    let bars = [];
    let colorIndex = 0;

    // find biggest values
    let biggest = values[0];
    for (i=0; i<values.length; i++) {
      if (biggest < values[i]) {
        biggest = values[i];
      }
    }

    // cal height of each bar
    for (i=0; i<values.length; i++) {
      barHeights[i] = (values[i]/biggest)*220*0.9;
    }

    bars[0] = <View key='bar_start'/>
    for (i=0; i<values.length; i++) {
      bars[i+1]=<View key={'bar_'+i} ><View><Text>3.23k</Text></View><View style={[{backgroundColor: colors[i], height: barHeights[i]}, this._barStyles()]} /></View>
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

export class Waffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
          data: this.props.data,
          dotSize: (this.props.dotSize)?this.props.dotSize:20,
          dotMargin: (this.props.dotMargin)?this.props.dotMargin:4,
        };
  }

  render() {
    return (
      <View style={this._boxStyles()}>
        {this._printDots()}
      </View>
    )
  }

  _printDots() {
    let rows = []
    let colorIndex = 0;
    let k = 0;
    let percents = this.state.data.percents;
    let position=percents[0];
    let colors = this.state.data.colors;

    for (i=0; i<10; i++) {
      let dots = [];
      for (j=0; j<10; j++) {
        dots[j]=<View key={'dot_'+i+'_'+j} style={[{backgroundColor: colors[colorIndex]} , this._dotStyles()]}></View>
        if (k > position) {
          colorIndex++;
          position=position+percents[colorIndex];
        }
        k++;
      }
      rows[i]=<View key={'row_'+i} style={styles.waffle_row}>{dots}</View>
    }
    return rows;
  }

  _dotStyles() {
    return {
      height: this.state.dotSize,
      width: this.state.dotSize,
      margin: this.state.dotMargin
    }
  }

  _boxStyles() {
    return {
      height: this.state.dotSize*10+this.state.dotMargin*20,
      width: this.state.dotSize*10+this.state.dotMargin*20,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
    }
  }

}

const styles = StyleSheet.create({
  waffle_row: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  bars_box: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: StylesConstant.COLOR_1,
    width: 280,
    height: 220,
    flexDirection: 'row',
  },
  legends_box: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280,
    height: 50,
    flexDirection: 'row',
  },
  bars_yLable: {
    height: 30,
    justifyContent: 'flex-start',
  }
});
