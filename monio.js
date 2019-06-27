import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import WelcomeScene from './scenes/Welcome/WelcomeScene';
import ChartPoc from './scenes/Chart/ChartPoc';

export default class monio extends Component<{}>  {

  render() {
    return (
      <WelcomeScene />
    );
  }
}
