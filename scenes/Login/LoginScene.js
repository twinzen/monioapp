import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Keyboard
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import {DataAccess} from '../../server/DataAccess'

import WelcomeScene from '../Welcome/WelcomeScene';
import HomeScene from '../Home/HomeScene';

import LoginFormView from './LoginFormView';

export default class LoginScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'',
    });
    DataAccess.checkConnection();
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_BACK':
        return (
          <WelcomeScene />
        );
        break;
      case 'SCENE_DONE':
        return (
          <HomeScene />
        );
        break;
      default:
        return (
          <LoginForm
            screenProps={{
                    dispatch:(action, payload) => this.dispatch(action, payload),
                  }}
            />
        );
    }
  }

  dispatch(action, payload) {
    switch(action) {
      case 'BACK':
        this.setState({sceneState:'SCENE_BACK'})
        break;
      case 'DONE':
        this.setState({sceneState:'SCENE_DONE'})
        break;
    }
  }
}

const LoginForm = StackNavigator({
  LoginForm: { screen: LoginFormView },
});
