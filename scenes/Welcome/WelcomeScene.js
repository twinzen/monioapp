import React, { Component } from 'react';

import SignUpScene from '../SignUp/SignUpScene';
import LoginScene from '../Login/LoginScene';
import HomeScene from '../Home/HomeScene';

import WelcomeView from './WelcomeView';

import {DataAccess} from '../../server/DataAccess'

export default class WelcomeScene extends Component {

  componentWillMount () {

    DataAccess.checkAuth()
      .then((user) => { this.dispatch({type:'LOGGED_IN'}); })
      .catch(() => { this.dispatch({type:'WELCOME'}); });

    this.dispatch({type:'LOADING'})
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_LOGGED_IN':
        return (
          <HomeScene needRefresh={true}/>
        );
        break;
      case 'SCENE_SIGN_UP':
        return (
          <SignUpScene />
        );
        break;
      case 'SCENE_LOGIN':
        return (
          <LoginScene />
        );
        break;
      default:
        return (
          <WelcomeView
            dispatch={(action, payload) => this.dispatch(action, payload)}
            isLoading={this.state.isLoading}
            />
        );
    }
  }

  dispatch(action, payload) {
    switch(action.type) {
      case 'LOADING':
        this.setState({sceneState:'SCENE_WELCOME', isLoading:true})
        break;
      case 'WELCOME':
        this.setState({sceneState:'SCENE_WELCOME', isLoading:false})
        break;
      case 'LOGGED_IN':
        this.setState({sceneState:'SCENE_LOGGED_IN'})
        break;
      case 'SIGN_UP':
        this.setState({sceneState:'SCENE_SIGN_UP'})
        break;
      case 'LOGIN':
        this.setState({sceneState:'SCENE_LOGIN'})
        break;
    }
  }
}
