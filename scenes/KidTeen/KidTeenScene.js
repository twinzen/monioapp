import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';


import KidDetailScene from '../KidDetail/KidDetailScene';

import KidTeenFormView from './KidTeenFormView'

export default class KidTeenScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'',
    });
    this.formCtx = [];
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_BACK':
        return (
          <KidDetailScene />
        );
        break;
      case 'SCENE_DONE':
        return (
          <KidDetailScene />
        );
        break;
      default:
        return (
          <KidTeenForm
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

const KidTeenForm = StackNavigator({
  KidTeenForm: { screen: KidTeenFormView },
});
