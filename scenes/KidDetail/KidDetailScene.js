import React, { Component } from 'react';

import HomeScene from '../Home/HomeScene';
import KidTeenScene from '../KidTeen/KidTeenScene'
import AnalysisScene from '../Analysis/AnalysisScene'
import StatementScene from '../Statement/StatementScene'

import KidDetailView from './KidDetailView'

export default class KidDetailScene extends Component {

  componentWillMount () {
    this.setState({
      sceneState:'',
    });
  }

  render() {
    switch(this.state.sceneState) {
      case 'SCENE_BACK':
        return (
          <HomeScene needRefresh={true}/>
        );
        break;
      case 'SCENE_TEEN':
        return (
          <KidTeenScene />
        );
        break;
      case 'SCENE_ANALYSIS':
        return (
          <AnalysisScene />
        );
        break;
      case 'SCENE_STATEMENT':
        return (
          <StatementScene />
        );
      default:
        return (
          <KidDetailView
              dispatch={(action, payload)=>this.dispatch(action, payload)}
            />
        );
    }
  }

  dispatch(action, payload) {
    switch(action) {
      case 'BACK':
        this.setState({sceneState:'SCENE_BACK'})
        break;
      case 'TEEN':
        this.setState({sceneState:'SCENE_TEEN'})
        break;
      case 'ANALYSIS':
        this.setState({sceneState:'SCENE_ANALYSIS'})
        break;
      case 'STATEMENT':
        this.setState({sceneState:'SCENE_STATEMENT'})
        break;
    }
  }

}
