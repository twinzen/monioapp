import React, { Component } from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';


import {
  BaseView,
  NavigationView,
  ActivityIndicator
} from '../../components/Views';

import {
    Header1,
} from '../../components/Texts'

import {
    LineInput,
    Selector,
    Picker,
    Validator
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

export default class AboutFormView extends NavigationView {
  componentDidMount () {
    super.setParams({
            _headerLeft: () => {/*avoid user back to previous page*/},
            _headerLeftText: '',
            _headerRight: () => this.props.screenProps.dispatch('DONE'),
            _headerRightText: 'Save',
          });
  }
  render() {
    return (
      <BaseView>
        <View style={styles.topBox}>
          <Header1>About You And Your Bank</Header1>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <LineInput label='Your Name'/>
            <Selector
                options={[
                  {key:'MAMMY', value:'Mammy'},
                  {key:'DADDY', value:'Daddy'},
                  {key:'GURAD', value:'Guardian'},
                ]}
                selected='DADDY'
              />
            <Picker
                label='Base Currency'
                options={[
                  { key: 0, label: true, label: 'USD' },
                  { key: 1, label: true, label: 'GBP' },
                  { key: 2, label: true, label: 'EUR' },
                  { key: 3, label: true, label: 'HKD' },
                  { key: 4, label: true, label: 'SGD' },
                  { key: 5, label: true, label: 'TWD' },
                  { key: 6, label: true, label: 'AUD' },
                  { key: 7, label: true, label: 'JPY' },
                  { key: 8, label: true, label: 'CAD' },
                  { key: 9, label: true, label: 'NOK' },
                ]}
                selected='DADDY'
              />
          </Field0>
        </View>
      </BaseView>
    );
  }
}


const styles = StyleSheet.create({
  topBox: {
    height:130,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarBox: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
