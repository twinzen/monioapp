import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    View
} from 'react-native';

import StylesConstant from '../styles/StylesConstant';

export class Button0 extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button0} onPress={this.props.onPress}>
        <Text style={styles.buttonText0}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

export class Button1 extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button1} onPress={this.props.onPress}>
        <Text style={styles.buttonText1}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

export class RigthButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.rigthButton} onPress={this.props.onPress}>
        <Text style={styles.rigthButtonText}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

export class LeftButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.leftButton} onPress={this.props.onPress}>
        <Text style={styles.leftButtonText}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

export class DotButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.dotButton} onPress={this.props.onPress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
          icon: (this.props.icon)?this.props.icon:require('../imgs/icon_bars_100_100.png'),
      };
  }
  render() {
    return (
      <TouchableOpacity style={styles.listItem} onPress={this.props.onPress}>
        <View style={styles.listItemIconBox}>
          <Image
              style={styles.listItemIcon}
              source={this.state.icon}
            />
        </View>
        <Text style={styles.listItemText}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  button0: {
    borderRadius: 50/4,
    borderWidth: 0,
    height: 50,
    width: 180,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_2,
  },
  buttonText0: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_1,
  },
  button1: {
    borderWidth: 0,
    height: 50,
    width: 180,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_0,
  },
  rigthButton: {
    borderWidth: 0,
    paddingRight: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rigthButtonText: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_0,
  },
  leftButton: {
    borderWidth: 0,
    paddingLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftButtonText: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_0,
  },
  dotButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 50/2,
    borderWidth: 3,
    borderColor: StylesConstant.COLOR_0,
    backgroundColor: StylesConstant.COLOR_10,
  },
  listItem: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: StylesConstant.COLOR_2,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  listItemText: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_4,
  },
  listItemIconBox: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listItemIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
