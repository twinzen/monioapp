import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import {
    TopBarView,
    DrawerView
} from '../../components/Views';

import {
    Header1,
    Header2,
    AmountLabel,
} from '../../components/Texts';

import {
    DotButton,
} from '../../components/Buttons';

import StylesConstant from '../../styles/StylesConstant';

import SettingView from './SettingView';

const {height, width} = Dimensions.get('window');

export default class HomeView extends Component {
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
              <ScrollView style={styles.homeList}>
                <TouchableOpacity style={styles.homeListRow} onPress={()=> this.props.dispatch('KID_DETAIL')}>
                  <Image
                      style={styles.avatar}
                      source={require('../../imgs/avatar_polar_bear_200_200.png')}
                    />
                  <Header1 color={StylesConstant.COLOR_1}>Chloe</Header1>
                  <AmountLabel>2,012,012.00</AmountLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeListRow} onPress={()=> this.props.dispatch('KID_DETAIL')}>
                  <Image
                      style={styles.avatar}
                      source={require('../../imgs/avatar_polar_bear_200_200.png')}
                    />
                  <Header1 color={StylesConstant.COLOR_1}>Josh</Header1>
                  <AmountLabel>200.00</AmountLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeListRow} onPress={()=> this.props.dispatch('KID_DETAIL')}>
                  <Image
                      style={styles.avatar}
                      source={require('../../imgs/avatar_polar_bear_200_200.png')}
                    />
                  <Header1 color={StylesConstant.COLOR_1}>Sane</Header1>
                  <AmountLabel>200.00</AmountLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeListRow} onPress={()=> this.props.dispatch('KID_DETAIL')}>
                  <Image
                      style={styles.avatar}
                      source={require('../../imgs/avatar_polar_bear_200_200.png')}
                    />
                  <Header1 color={StylesConstant.COLOR_1}>Chloe</Header1>
                  <AmountLabel>200.00</AmountLabel>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeListRow} onPress={()=> this.props.dispatch('KID_DETAIL')}>
                  <Image
                      style={styles.avatar}
                      source={require('../../imgs/avatar_polar_bear_200_200.png')}
                    />
                  <Header1 color={StylesConstant.COLOR_1}>Chloe</Header1>
                  <AmountLabel>200.00</AmountLabel>
                </TouchableOpacity>
              </ScrollView>
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
  homeList: {
    width: width,
  },
  homeListRow: {
    height: 200,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: StylesConstant.COLOR_0,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
  },
  titleImage: {
    height: 30,
    width: 92,
    resizeMode: 'contain'
  },
  avatarBox: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    resizeMode: 'contain'
  },
});
