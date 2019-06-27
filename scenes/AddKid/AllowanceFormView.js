import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import {
    Header2,
} from '../../components/Texts'

import {
  NavigationActions
} from 'react-navigation';

import {
  BaseView,
  NavigationView,
  ActivityIndicator
} from '../../components/Views';

import {
    Validator,
    Selector,
    NumberPad
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

export default class AllowanceFormView extends NavigationView {

  componentDidMount () {
    super.setParams({
            _headerRight: () => this._beforeNext(),
            _headerRightText: 'Next',
          });
    console.log(this.props.navigation.state.params);
  }

  render() {
    return (
      <BaseView>
        <View style={styles.topBox}>
          <Image
              style={styles.topIcon}
              source={require('../../imgs/icon_calendar_200_200.png')}
            />
          <Header2>How Much Can Get Every Week/Month?</Header2>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <Selector
                options={[
                  {key:'WEEKLY', value:'Weekly'},
                  {key:'MONTHLY', value:'Monthly'},
                ]}
                selected='WEEKLY'
                name='frequency'
                ref={(ref) => this.frequency = ref}
              />
            <NumberPad
              label='Allowance Amount'
              name='allowanceAmount'
              ref={(ref) => this.allowanceAmount = ref}
            />
          </Field0>
        </View>
      </BaseView>
    );
  }

  _beforeNext() {
    this._next();
  }

  _next() {
    let payload = this.props.navigation.state.params.payload?this.props.navigation.state.params.payload:{};
    payload[this.frequency.key()] = this.frequency.value();
    payload[this.allowanceAmount.key()] = this.allowanceAmount.value();
    const navigateAction = NavigationActions.navigate({
      routeName: this.props.screenProps.routeConfig[this.props.navigation.state.routeName].next,
      params: { 'payload': payload},
    })
    this.props.navigation.dispatch(navigateAction);
  }

}

const styles = StyleSheet.create({
  topBox: {
    height:130,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bottomBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    resizeMode: 'contain'
  },
  topIcon: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
