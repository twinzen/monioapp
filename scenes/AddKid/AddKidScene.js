import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScene from '../Home/HomeScene';

import ProfileFormView from './ProfileFormView'
import InitialFormView from './InitialFormView'
import AllowanceFormView from './AllowanceFormView'
import InterestRateFormView from './InterestRateFormView'
import JuniorFormView from './JuniorFormView'

export default class AddKidScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'',
    });
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_BACK':
        return (
          <HomeScene />
        );
        break;
      case 'SCENE_DONE':
        return (
          <HomeScene />
        );
        break;
      default:
        return (
          <AddKidForm
            screenProps={{
                    dispatch:(action, payload) => this.dispatch(action, payload),
                    routeConfig: routeConfig
                  }}
            />
        );
    }
  }

  dispatch(action, payload) {
    console.log(payload);
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

const routeConfig = {
                      ProfileForm: { screen: ProfileFormView, next: 'InitialForm' },
                      InitialForm: { screen: InitialFormView, next: 'AllowanceForm' },
                      AllowanceForm: { screen: AllowanceFormView, next: 'InterestRateForm' },
                      InterestRateForm: { screen: InterestRateFormView, next: 'JuniorForm' },
                      JuniorForm: { screen: JuniorFormView },
                    }

const AddKidForm = StackNavigator(routeConfig);
