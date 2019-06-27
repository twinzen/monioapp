import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import StylesConstant from '../../styles/StylesConstant';

import { BaseView, TopBarView} from '../../components/Views';

import {
    Header0,
    Header1,
    Header2,
    AmountLabel,
    AmountLabelLarge,
    FormLabel
} from '../../components/Texts'

import {
    Button0,
    Button1,
} from '../../components/Buttons';

import { Field0 } from '../../components/Fields'

export default class KidDetailView extends Component {

  constructor(props) {
    super(props);
    this.state ={loading: false};
  }

  render() {
    title=<Header1></Header1>;
    leftButton= <Image
                    style={{flex:1, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_left_arrow_100_100.png')}
                  />;
    return (
      <TopBarView
          title={title}
          leftButton={leftButton}
          leftButtonOnPress={()=>this.props.dispatch('BACK')}
          barColor={StylesConstant.MONIO_BLUE}
        >
        {this.state.loading?<ActivityIndicator/>:<View/>}
        <View style={styles.topBox}>
          <View style={styles.topLeftBox}>
            <Image
                style={styles.avatar}
                source={require('../../imgs/avatar_polar_bear_200_200.png')}
              />
          </View>
          <View style={styles.topRightBox}>
            <Header0>Chloe</Header0>
            <AmountLabel>30 per week</AmountLabel>
            <Header2>Next Allowance 3 Days Later</Header2>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <View style={styles.bottomUpBox}>
              <FormLabel>Account Total</FormLabel>
              <AmountLabelLarge>2,000,000.00</AmountLabelLarge>
            </View>
            <View style={styles.bottomMiddleBox}>
              <View style={styles.creditButton}>
                <Image
                    style={{height: 25, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_minus_300_300.png')}
                  />
              </View>
              <View style={styles.debitButton}>
                <Image
                    style={{height: 25, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_plus_300_300.png')}
                  />
              </View>
            </View>
            <View style={styles.bottomDownBox}>
              <View style={styles.bottomDownRow}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.dispatch('STATEMENT')}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/statement_200_200.png')}
                    />
                  <FormLabel>Statement</FormLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.dispatch('ANALYSIS')}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/analysis_200_200.png')}
                    />
                  <FormLabel>Analysis</FormLabel>
                </TouchableOpacity>
                <View style={styles.button}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/auto_200_200.png')}
                    />
                  <FormLabel>Auto</FormLabel>
                </View>
              </View>
              <View style={styles.bottomDownRow}>
                <TouchableOpacity style={styles.button}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/rate_200_200.png')}
                    />
                  <FormLabel>Rate</FormLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/profile_200_200.png')}
                    />
                  <FormLabel>Profile</FormLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.dispatch('TEEN')}>
                  <Image
                      style={styles.buttonImage}
                      source={require('../../imgs/teen_200_200.png')}
                    />
                  <FormLabel>Teen</FormLabel>
                </TouchableOpacity>
              </View>
            </View>
          </Field0>
        </View>
      </TopBarView>
    )
  }
}

const styles = StyleSheet.create({
  topBox: {
    height:150,
    padding: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftBox: {
    flex: 0.4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topRightBox: {
    flex: 0.6,
    paddingTop: 25,
    paddingBottom: 25,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  bottomBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomUpBox: {
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomMiddleBox: {
    flex: 1,
    paddingLeft: 80,
    paddingRight: 80,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomDownBox: {
    height: 220,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomDownRow: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  button: {
    height: 85,
    width: 85,
    borderRadius: 10,
    padding: 4,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_2
  },
  buttonImage: {
    height: 65,
    width: 85,
    resizeMode: 'contain',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    resizeMode: 'contain'
  },
  creditButton: {
    height: 64,
    width: 64,
    borderRadius: 64/2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_11,
  },
  debitButton: {
    height: 64,
    width: 64,
    borderRadius: 64/2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_12,
  }
});
