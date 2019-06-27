import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Keyboard
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
    LineInput,
    PasswordInput
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

import {DataAccess} from '../../server/DataAccess'
import {kidEmail} from '../../helpers/KidEmailFormatter'

export default class JuniorFormView extends NavigationView {

  constructor(props) {
    super(props);
    this.state ={loading: false};
  }

  componentDidMount () {
    super.setParams({
              _headerRight: () => this._beforeNext(),
              _headerRightText: 'Add Kid',
          });
    this.username.focus();
  }

  render() {
    return (
      <BaseView>
        {this.state.loading?<ActivityIndicator/>:<View/>}
        <View style={styles.topBox}>
          <Image
              style={styles.topIcon}
              source={require('../../imgs/icon_monio_t_200_200.png')}
            />
          <Header2>monio tee Logon Profile</Header2>
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <LineInput
                ref={(ref) => this.username = ref}
                label='Username'
                name='username'
                validations={[Validator.NOT_EMPTY, Validator.ALPHANUMERIC]}
              />
            <PasswordInput
                ref={(ref) => this.password = ref}
                label='Password'
                name='password'
                validations={[Validator.NOT_EMPTY, Validator.ALPHANUMERIC]}
              />
          </Field0>
        </View>
      </BaseView>
    );
  }

  _beforeNext() {
    Keyboard.dismiss();

    let payload = this.props.navigation.state.params.payload?this.props.navigation.state.params.payload:{};
    payload[this.username.key()] = this.username.value();
    payload[this.password.key()] = this.password.value();

    if (!this.state.loading) {
      this.setState({loading: true});
      Validator.assert(this.username, this.password)
      .then(() => DataAccess.checkAuth())
      //.then((user) => DataAccess.signUpNewUser(kidEmail(payload.username, user.email), payload.password))
      /* If sign up user for kid here, the current user would be kicked out......
        */
      .then(() => DataAccess.addKid(payload))
      .then(() => this._next())
      .catch(
        (error) => {console.log(error)}
      ).then(
        () => {this.setState({loading: false})}
      )
    }
  }

  _next() {
      this.props.screenProps.dispatch('DONE', this.props.navigation.state.params.payload);
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
