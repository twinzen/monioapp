import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    LayoutAnimation,
} from 'react-native';

import {
  BaseView,
  LoadingIndicator
} from '../../components/Views';

import {
    Header0,
    FormLabel,
} from '../../components/Texts';

import {
    Button0,
    Button1,
} from '../../components/Buttons';

export default class WelcomeView extends Component {

  componentWillMount () {
    LayoutAnimation.spring();
    this.setState({isLoading: this.props.isLoading})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({isLoading: nextProps.isLoading})
  }

  render() {
    return (
      <BaseView>
        <View style={styles.topBox}>
          <Header0>Welcome</Header0>
          <Header0>To</Header0>
        </View>
        <View style={styles.midBox}>
          <Image
            style={styles.logoImage}
            source={require('../../imgs/monio_662_427.png')}
          />
        </View>
        <View style={styles.bottomBox}>
          {
            this.state.isLoading?
              <LoadingIndicator/>:
              <View>
                <Button0 onPress={() => this.props.dispatch({type:'SIGN_UP'})}>Sign Up</Button0>
                <Button1 onPress={() => this.props.dispatch({type:'LOGIN'})}>Login</Button1>
              </View>
          }
        </View>
        <View style={styles.footerBox}>
          <FormLabel>Presented By monio Team</FormLabel>
        </View>
      </BaseView>
    )
  }
}

const styles = StyleSheet.create({
  topBox: {
    height:150,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
  },
  midBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  bottomBox: {
    height:250,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerBox: {
    height:50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImage: {
    flex: 1,
    resizeMode: 'contain'
  },
});
