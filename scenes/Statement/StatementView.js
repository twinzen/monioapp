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
    TopBarView,
} from '../../components/Views';

import {
    Header0,
    Header1,
    Header2,
    AmountLabel,
    AmountLabelLarge,
} from '../../components/Texts';

import HorizonLine from '../../components/HorizonLine'

import {
    DotButton,
} from '../../components/Buttons';

import {
    BarPie,
} from '../../components/Charts';

import SubTotal from './SubTotal';
import Transaction from './Transaction';

import StylesConstant from '../../styles/StylesConstant';

const {height, width} = Dimensions.get('window');

export default class StatementView extends Component {

  render() {
    let barData = {values: [1000, 2000], colors:['#6aa84f', '#e06666']};
    const title= <Header1>Statement</Header1>;
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
            <View style={styles.monthBox}>
              <TouchableOpacity style={styles.monthButton}>
                <Image
                    style={{flex:1, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_left_triangle_100_100.png')}
                  />
              </TouchableOpacity>
              <View><Text style={styles.month}>June</Text></View>
              <TouchableOpacity style={styles.monthButton}>
                <Image
                    style={{flex:1, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_right_triangle_100_100.png')}
                  />
              </TouchableOpacity>
            </View>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Portfolio Total</Header2>
              <SubTotal subject='Opening' amount='12345.00'/>
              <SubTotal subject='Closing' amount='12345.00'/>
              <HorizonLine/>
              <SubTotal subject='' amount='-12345.00'/>
            </View>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Income & Expense</Header2>
              <BarPie data={barData} barSize={50} />
            </View>
            <View style={styles.cardListRow} >
              <Header2 color={StylesConstant.COLOR_1}>Transactions</Header2>
              <HorizonLine/>
              <Transaction remark='abc test 2017 Happy Birthday' tradeDate='01-01-2017' amount='12345.00' />
              <HorizonLine/>
              <Transaction remark='abc' tradeDate='01-01-2017' amount='12345.00' />
              <HorizonLine/>
              <Transaction remark='abc' tradeDate='01-01-2017' amount='12345.00' />
              <HorizonLine/>
              <Transaction remark='abc' tradeDate='01-01-2017' amount='12345.00' />
              <HorizonLine/>
              <Transaction remark='abc' tradeDate='01-01-2017' amount='12345.00' />
              <HorizonLine/>
            </View>
          </ScrollView>
        </TopBarView>
    )
  }
}


const styles = StyleSheet.create({
  monthBox: {
    justifyContent: 'space-between',
    flexDirection:'row',
    height: 40,
    padding: 10,
  },
  monthButton: {
    height: 35,
    width: 35,
    borderRadius: 35/2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_2,
  },
  month: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: StylesConstant.TEXT_SIZE_BIGGEST,
    color: StylesConstant.COLOR_0,
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
});
