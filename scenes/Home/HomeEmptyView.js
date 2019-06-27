import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

import {
    BaseView,
    TopBarView,
    DrawerView
} from '../../components/Views';

import {
    Header2,
} from '../../components/Texts';

import {
    Button0,
    DotButton,
} from '../../components/Buttons';

import StylesConstant from '../../styles/StylesConstant';

import SettingView from './SettingView';

export default class HomeEmptyView extends Component {
  render() {
    title= <Image
              style={styles.titleImage}
              source={require('../../imgs/title.png')}
            />;
    leftButton= <Image
              style={{flex:1, resizeMode: 'contain'}}
              source={require('../../imgs/icon_bars_100_100.png')}
            />;
    return (
      <DrawerView
          ref={(ref) => this._drawer = ref}
          content={
              <SettingView
                  close={() => this._drawer.close()}
                  logout={() => this.props.dispatch('LOGOUT')}
                />
            }
        >
          <View style={{flex:1}}>
            <TopBarView
                title={title}
                leftButton={leftButton}
                leftButtonOnPress={()=>this._drawer.open()}
              >
              <View style={styles.homeEmptyTopBox}>
                <Image
                    style={{height: 200, resizeMode: 'contain'}}
                    source={require('../../imgs/home_empty.png')}
                  />
              </View>
              <View style={styles.homeEmptyBottomBox}>
                <Header2>Your bank is created successfully!!</Header2>
                <Header2>Add your kids to bank now.</Header2>
              </View>
              <View style={styles.homeEmptyFooterBox}>
                <Button0 onPress={() => this.props.dispatch('ADD_KID')}>Add Kid</Button0>
              </View>
            </TopBarView>
            <View style={styles.addButton}>
              <DotButton onPress={() => this.props.dispatch('ADD_KID')}>
                <Image
                    style={{height: 25, resizeMode: 'contain'}}
                    source={require('../../imgs/icon_plus_300_300.png')}
                  />
              </DotButton>
            </View>
          </View>
      </DrawerView>
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    position:'absolute',
    top: 20,
    right: 10,
  },
  homeEmptyTopBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
  },
  homeEmptyBottomBox: {
    height:50,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homeEmptyFooterBox: {
    height:250,
    paddingTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleImage: {
    height: 30,
    width: 92,
    resizeMode: 'contain'
  },
});
