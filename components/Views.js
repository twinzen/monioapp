import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import StylesConstant from '../styles/StylesConstant';

import Drawer from 'react-native-drawer'

import {
    Header0,
    Header1,
} from './Texts';

const {height, width} = Dimensions.get('window');

import {
    RigthButton,
    LeftButton
} from '../components/Buttons'

export class BaseView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainBox}>
      <StatusBar
          backgroundColor={StylesConstant.Color_0}
          barStyle='light-content'
       />
        {this.props.children}
      </ScrollView>
    )
  }
}

export class NavigationView extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params = {} } = navigation.state;
    let options = { headerStyle: {backgroundColor: StylesConstant.MONIO_BLUE},
                    headerTintColor: StylesConstant.COLOR_0,
                    };
    if (params._headerLeft) {
      options.headerLeft = <LeftButton onPress={() => params._headerLeft()}>{params._headerLeftText}</LeftButton>;
    }
    if (params._headerRight) {
      options.headerRight = <RigthButton onPress={() => params._headerRight()}>{params._headerRightText}</RigthButton>;
    }
    if (params._hideHeader) {
      options.header = null;
    }
    return options;
  }

  setParams (params ) {
    this.props.navigation.setParams(params);
  }

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

export class TopBarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
          leftButton: (this.props.leftButton)?this.props.leftButton:<View/>,
          rightButton: (this.props.rightButton)?this.props.rightButton:<View/>,
          leftButtonOnPress: (this.props.leftButtonOnPress)?this.props.leftButtonOnPress:()=>{},
          rightButtonOnPress: (this.props.rightButtonOnPress)?this.props.rightButtonOnPress:()=>{},
          title: (this.props.title)?this.props.title:<Header1>Title</Header1>,
          barColor: (this.props.barColor)?this.props.barColor:StylesConstant.COLOR_10,
        };
  }
  render() {
    return (
      <BaseView>
        <View style={[styles.topBarBox, {backgroundColor: this.state.barColor}]}>
          <TouchableOpacity style={styles.topBarButton} onPress={this.state.leftButtonOnPress}>
            {this.state.leftButton}
          </TouchableOpacity>
          <View style={styles.topBarTitleBox}>
            {this.state.title}
          </View>
          <TouchableOpacity style={styles.topBarButton} onPress={this.state.rightButtonOnPress}>
            {this.state.rightButton}
          </TouchableOpacity>
        </View>
        <View style={styles.mainBox}>
          {this.props.children}
        </View>
      </BaseView>
    )
  }
}

export class DrawerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
          content: (this.props.content)?this.props.content:<View/>,
        };
  }

  render() {
    return (
      <Drawer
          type="overlay"
          ref={(ref) => this._drawer = ref}
          content={this.state.content}
          tapToClose={true}
          openDrawerOffset={0.1} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          tweenDuration={150}
        >
        {this.props.children}
      </Drawer>
    )
  }

  open() {
    this._drawer.open();
  }

  close() {
    this._drawer.close();
  }

}

export class ActivityIndicator extends Component {
  render () {
    return (
      <View style={styles.overlayBox}>
        <View style={styles.indicatorBox}>
          <Image
              style={{height:70, width:70}}
              source={require('../imgs/loading.gif')}
            />
        </View>
      </View>
    )
  }
}

export class LoadingIndicator extends Component {
  render () {
    return (
      <View style={styles.indicatorBox}>
        <Image
            style={{height:70, width:70}}
            source={require('../imgs/loading.gif')}
          />
      </View>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    width: width,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.MONIO_BLUE,
  },
  topBarBox: {
    height:55,
    paddingTop: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_10,
  },
  topBarButton: {
    height:40,
    width: 50,
    padding: 3,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBarTitleBox: {
    height:40,
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  overlayBox: {
    position:'absolute',
    height: height,
    width: width,
    top: 0,
    left: 0,
    alignItems: 'center',
    paddingTop: height/4,
    zIndex: 999999998,
  },
  indicatorBox: {
    height: 100,
    width: 150,
    zIndex: 999999999,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_97,
  }
});
