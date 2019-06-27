import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import {
    TopBarView,
} from '../../components/Views';

import {
    Header0,
    Header1,
    Header2,
    AmountLabel,
    AmountLabelLarge,
} from '../../components/Texts';

import {
    DotButton,
} from '../../components/Buttons';

import {
    Waffle,
    Bars
} from '../../components/Charts';

import StylesConstant from '../../styles/StylesConstant';

const {height, width} = Dimensions.get('window');

export default class AnalysisView extends Component {

  render() {
    let waffleData = {percents: [21, 29, 43, 7], colors:['#fff2cc', '#b6d7a8', '#a4c2f4', '#ea9999']};
    let barData = {values: [456.12, 1245.92, 99.344], legends: ['Aug', 'Sep', 'Oct']};
    const yLabel = <AmountLabelLarge/>;
    const title= <Header1>Analysis</Header1>;
    const leftButton= <Image
              style={{flex:1, resizeMode: 'contain'}}
              source={require('../../imgs/icon_left_arrow_100_100.png')}
            />;
    return (
        <TopBarView
            title={title}
            leftButton={leftButton}
            leftButtonOnPress={()=>this.props.dispatch('BACK')}
          >
          <ScrollView style={styles.cardList}>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Portfolio Total</Header2>
              <AmountLabelLarge>2,012,012.00</AmountLabelLarge>
            </View>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Money Up and Down</Header2>
              <Bars yLabel={yLabel} color='#ffe599' data={barData} barSize={40} barMargin={10} />
            </View>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Where was money from?</Header2>
              <Waffle data={waffleData} dotSize={20} dotMargin={2}>
              </Waffle>
              <AmountLabel>2,012,012.00</AmountLabel>
            </View>
          </ScrollView>
        </TopBarView>
    )
  }
}


const styles = StyleSheet.create({
  addButton: {
    position:'absolute',
    top: 20,
    right: 10,
  },
  cardList: {
    width: width,
  },
  cardListRow: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: StylesConstant.COLOR_0,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
  },
  titleImage: {
    height: 30,
    width: 92,
    resizeMode: 'contain'
  },
});
