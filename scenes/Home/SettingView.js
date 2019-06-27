import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import {
    ListItem
} from '../../components/Buttons';

import StylesConstant from '../../styles/StylesConstant';

export default class SettingView extends Component {
  render () {
    return (
      <View style={styles.settingMainBox}>
        <View style={styles.settingHeader}/>
        <ListItem
            icon={require('../../imgs/icon_cross_100_100.png')}
            onPress={this.props.close}
          >
        </ListItem>
        <ListItem>My Bank</ListItem>
        <ListItem>My Profile</ListItem>
        <ListItem>Language</ListItem>
        <ListItem onPress={this.props.logout}>Logout</ListItem>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  settingMainBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  settingItemBox: {
    height: 200,
    paddingLeft: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: StylesConstant.COLOR_2,
  },
  settingHeader: {
    height: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_2,
  },
});
