import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Keyboard
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import {
  BaseView,
  NavigationView,
  ActivityIndicator
} from '../../components/Views';

import {
    Header0,
    Header1,
    Header2,
} from '../../components/Texts'

import {
    Form,
    Validator,
    LineInput,
    PasswordInput,
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

export default class KidTeenFormView extends NavigationView {

  componentDidMount () {
    super.setParams({
              _headerLeft: () => this.props.screenProps.dispatch('BACK'),
              _headerLeftText: 'Cancel',
              _headerRight: () => this._next(),
              _headerRightText: 'Save',
          });
    this.username.focus();
  }

  render() {
    return (
      <BaseView>
        <View style={styles.topBox}>
          <Image
              style={styles.topIcon}
              source={require('../../imgs/icon_monio_t_200_200.png')}
            />
          <Header2>monio Teen Logon Profile</Header2>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <LineInput
                ref={(ref) => this.username = ref}
                label='Username'
                validations={[Validator.NOT_EMPTY, Validator.ALPHANUMERIC]}
              />
            <LineInput
                ref={(ref) => this.passcode = ref}
                label='Pass Code'
                validations={[Validator.NOT_EMPTY, Validator.ALPHANUMERIC]}
              />
          </Field0>
        </View>
      </BaseView>
    );
  }

  _beforeNext() {
    Keyboard.dismiss();
    if (!this.state.loading) {
      this.setState({loading: true});

      Validator.assert(this.username, this.passcode)
      .then(
        () => {this._next(); }// null mean email never used before
      ).catch(
        (error) => {
          console.log(error)
        }
      ).then(
        () => {this.setState({loading: false});}
      );
    }
  }

  _next() {
    this.setState({loading: false});
    this.props.screenProps.dispatch('DONE')
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
  topIcon: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
