import React, { Component } from 'react';

import SignUpScene from '../SignUp/SignUpScene';
import WelcomeScene from '../Welcome/WelcomeScene';
import AddKidScene from '../AddKid/AddKidScene';
import KidDetailScene from '../KidDetail/KidDetailScene'

import {DataAccess} from '../../server/DataAccess'

import HomeView from './HomeView';
import HomeEmptyView from './HomeEmptyView';

export default class HomeScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'NOT-EMPTY',
    });
  }

  render() {
    switch(this.state.sceneState) {
      case 'EMPTY':
        return (
          <HomeEmptyView
              dispatch={(action, payload) => this.dispatch(action, payload)}
            />
        );
        break;
      case 'SCENE_LOGOUT':
        return (
          <WelcomeScene />
        );
        break;
      case 'SCENE_ADD_KID':
        return (
          <AddKidScene />
        );
      case 'SCENE_KID_DETAIL':
        return (
          <KidDetailScene />
        );
        break;
      default:
        return (
          <HomeView
              dispatch={(action, payload) => this.dispatch(action, payload)}
            />
        );
    }
  }

  _logout() {
    DataAccess.logout().then(
      () => {this.setState({sceneState:'SCENE_LOGOUT'})}
    );
  }

  dispatch(action, payload) {
    switch(action) {
      case 'LOGOUT':
        this._logout();
        break;
      case 'ADD_KID':
        this.setState({sceneState:'SCENE_ADD_KID'})
        break;
      case 'KID_DETAIL':
        this.setState({sceneState:'SCENE_KID_DETAIL'})
        break;
    }
  }

}
