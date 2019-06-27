import React, { Component } from 'react';

import KidDetailScene from '../KidDetail/KidDetailScene';

import AnalysisView from './AnalysisView'

export default class AnalysisScene extends Component {

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
          <AnalysisView
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
