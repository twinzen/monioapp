import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import {
    Waffle
} from '../../components/Charts';

export default class ChartView extends Component {



  render() {
    let data = {percents: [21, 29, 43, 7], colors:['#fff2cc', '#b6d7a8', '#a4c2f4', '#ea9999']};
    return (
      <Waffle data={data} dotSize={15} dotMargin={2}>
      </Waffle>
    );
  }
}
