import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Keyboard
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
    EmailInput,
    PasswordInput,
    Validator
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

import {DataAccess} from '../../server/DataAccess'

export default class ProfileFormView extends NavigationView {

  constructor(props) {
    super(props);
    this.state ={loading: false};
  }

  componentDidMount () {
    super.setParams({
            _headerLeft: () => this.props.screenProps.dispatch('BACK'),
            _headerLeftText: 'Cancel',
            _headerRight: () => this._beforeNext(),
            _headerRightText: 'Sign Up',
          });
  }

  render() {
    return (
      <BaseView>
        {this.state.loading?<ActivityIndicator/>:<View/>}
        <View style={styles.topBox}>
          <Header1>Login Email And Password</Header1>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <EmailInput
                label='Email'
                name='email'
                ref={(ref) => this.email = ref}
                validations={[Validator.NOT_EMPTY]}
              />
            <PasswordInput
                label='Password'
                name='password'
                ref={(ref) => this.password = ref}
                validations={[Validator.NOT_EMPTY]}
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

      Validator.assert(this.email, this.password)
      .then(
        () => DataAccess.signUpNewUser(this.email.value(), this.password.value())
      ).then(
        () => {this._next(); }// null mean email never used before
      ).catch(
        (error) => {
          switch(error.code) {
            case 'auth/email-already-in-use':
              this.email.error('Email is already in use by another account.');
              break;
            case 'auth/invalid-email':
              this.email.error('Email is badly formatted.');
              break;
            case 'auth/weak-password':
              this.password.error('Password should be at least 6 characters.');
              break;
          }
          //console.log(error)
        }
      ).then(
        () => {this.setState({loading: false});}
      );

    }
  }

  _next() {
    this.setState({loading: false});
    this.props.navigation.navigate('AboutForm')
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
});
