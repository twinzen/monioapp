import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {DataAccess} from '../../server/DataAccess'

import WelcomeScene from '../Welcome/WelcomeScene';
import HomeScene from '../Home/HomeScene';

import AboutFormView from './AboutFormView';
import ProfileFormView from './ProfileFormView';


export default class SignUpScene extends Component {

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
          <SignUpForm
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

const SignUpForm = StackNavigator({
  ProfileForm: { screen: ProfileFormView },
  AboutForm: { screen: AboutFormView },
});
