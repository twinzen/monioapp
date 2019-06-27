import React, { Component } from 'react';

import KidDetailScene from '../KidDetail/KidDetailScene';

import StatementView from './StatementView'

export default class StatementScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'',
    });
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_BACK':
        return (
          <KidDetailScene />
        );
        break;
      default:
        return (
          <StatementView
            dispatch={(action, payload)=>this.dispatch(action, payload)}/>
        );
    }
  }

  dispatch(action, payload) {
    switch(action) {
      case 'BACK':
        this.setState({sceneState:'SCENE_BACK'})
        break;
    }
  }

}
