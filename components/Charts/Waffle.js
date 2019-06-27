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

import StylesConstant from '../../styles/StylesConstant';

export default class Waffle extends Component {
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
});
