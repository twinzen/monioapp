import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Keyboard
} from 'react-native';

import {
  NavigationActions
} from 'react-navigation';

import {
  BaseView,
  NavigationView,
  ActivityIndicator
} from '../../components/Views';

import {
    Validator,
    LineInput,
    Selector,
} from '../../components/Forms'

import { Field0 } from '../../components/Fields'

export default class ProfileFormView extends NavigationView {

  constructor(props) {
    super(props);
    this.state ={loading: false};
  }

  componentDidMount () {
    super.setParams({
            _headerLeft: () => this.props.screenProps.dispatch('BACK'),
            _headerLeftText: 'Cancel',
            _headerRight: () => this._beforeNext(),
            _headerRightText: 'Next',
          });
    this.kidName.focus();
  }

  render() {
    return (
      <BaseView>
        {this.state.loading?<ActivityIndicator/>:<View/>}
        <View style={styles.topBox}>
          <Image
              style={styles.avatar}
              source={require('../../imgs/avatar_polar_bear_200_200.png')}
            />
        </View>
        <View style={styles.bottomBox}>
          <Field0>
            <LineInput
                label='Kid Name'
                name='kidName'
                ref={(ref) => this.kidName = ref}
                validations={[Validator.NOT_EMPTY]}
              />
            <LineInput
                label='Date Of Birth'
                name='dateOfBirth'
                ref={(ref) => this.dateOfBirth = ref}
                validations={[Validator.NOT_EMPTY, Validator.ALPHANUMERIC]}
              />
            <Selector
                name='gender'
                ref={(ref) => this.gender = ref}
                options={[
                  {key:'GIRL', value:'Girl'},
                  {key:'BOY', value:'Boy'},
                ]}
                selected='BOY'
              />
          </Field0>
        </View>
      </BaseView>
    );
  }

  _beforeNext() {
    Keyboard.dismiss();
    if (!this.state.loading) {
      this.setState({loading: true});
      Validator.assert(this.kidName, this.dateOfBirth)
      .then(
        () => {this._next()}
      ).catch(
        (error) => {console.log(error)}
      ).then(
        () => {this.setState({loading: false})}
      )
    }
  }

  _next() {
    this.setState({loading: false});
    let payload = this.props.navigation.state.params.payload?this.props.navigation.state.params.payload:{};
    payload[this.kidName.key()] = this.kidName.value();
    payload[this.dateOfBirth.key()] = this.dateOfBirth.value();
    payload[this.gender.key()] = this.gender.value();

    const navigateAction = NavigationActions.navigate({
      routeName: this.props.screenProps.routeConfig[this.props.navigation.state.routeName].next,
      params: { 'payload': payload }
    })

    this.props.navigation.dispatch(navigateAction);
  }

}

const styles = StyleSheet.create({
  topBox: {
    height:130,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bottomBox: {
    flex: 1,
    alignSelf: 'stretch',
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
  topIcon: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
