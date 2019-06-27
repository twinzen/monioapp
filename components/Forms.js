import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import {
    FormLabel,
} from './Texts'

import StylesConstant from '../styles/StylesConstant';

import { FadeInField } from './Fields'

const {height, width} = Dimensions.get('window');

export class Validator {

  static NOT_EMPTY = {message: 'This field cannot be empty.', regex: /^[^]+$/};
  static ALPHANUMERIC = {message: 'This field must be alphanumberic.', regex: /^[a-zA-Z0-9-_]+$/};

  /* Assert the given form components
   * You can put multiple form components to assert
   * It will assert all given components and return a error message List, if any.
   */
  static assert () {

    let fields = arguments;

    return new Promise(function(resolve, reject){
      let result = true;

      for (var i = 0; i < fields.length; ++i) {
        let field = fields[i];

        if (field.props.validations) {
          for (var j = 0; j < field.props.validations.length; ++j) {
            let validation = field.props.validations[j];
            if (validation.regex.test(field.value())) {
              field.normal();
            } else {
              result = false;
              field.error(validation.message);
              break; // assert next field
            }
          }
        }
      }

      if (result) {
        resolve();
      } else {
        throw {
                'code':'validation/failed',
                'message':'one or more fields failed in validation.'
              }
      }
    });
  }

}

class FormField extends Component {
  focus() {
    this.textInput.focus();
  }

  key() {
    return this.props.name;
  }

  value() {
    return this.state.value;
  }

  keyValue() {
    return {'name': this.props.name, 'value': this.state.value};
  }

  error(message) {
    this.setState({
        warning: message,
        showWarning: true,
      });
  }

  normal() {
    this.setState({
        warning: '',
        showWarning: false,
      });
  }

}

export class LineInput extends FormField {
  constructor(props) {
    super(props);
    this.state = {
          defaultValue: (this.props.defaultValue)?this.props.defaultValue:'',
          label: (this.props.label)?this.props.label:'label',
          value: (this.props.defaultValue)?this.props.defaultValue:'',
          showWarning: false,
        };
  }

  render() {
    return (
      <View style={styles.textInput_outter}>
        <FormLabel>{this.state.label}</FormLabel>
        <View style={styles.textInput_inner}>
          <TextInput
              ref={(ref) => this.textInput = ref}
              style={styles.textInput_box}
              onChangeText={(text) => this.setState({value:text})}
              defaultValue={this.state.defaultValue}
            />
        </View>
        {this._renderWarningMessage()}
      </View>
    )
  }

  _renderWarningMessage () {
    if (this.state.showWarning) {
      return (
        <FadeInField>
          <View style={styles.warning_outter}>
            <View style={styles.warning_arrow}></View>
            <View style={styles.warning_box}>
              <FormLabel styles={{color: StylesConstant.COLOR_99}}>{this.state.warning}</FormLabel>
            </View>
          </View>
        </FadeInField>
      );
    }
  }

}

export class EmailInput extends FormField {
  constructor(props) {
    super(props);
    this.state = {
          defaultValue: (this.props.defaultValue)?this.props.defaultValue:'',
          label: (this.props.label)?this.props.label:'label',
          value: (this.props.defaultValue)?this.props.defaultValue:'',
        };
  }

  render() {
    return (
      <View style={styles.textInput_outter}>
        <FormLabel>{this.state.label}</FormLabel>
        <View style={styles.textInput_inner}>
          <TextInput
              ref={(ref) => this.textInput = ref}
              style={styles.textInput_box}
              keyboardType='email-address'
              onChangeText={(text) => this.setState({value:text})}
              defaultValue={this.state.defaultValue}
            />
        </View>
        {this._renderWarningMessage()}
      </View>
    )
  }

  _renderWarningMessage () {
    if (this.state.showWarning) {
      return (
        <FadeInField>
          <View style={styles.warning_outter}>
            <View style={styles.warning_arrow}></View>
            <View style={styles.warning_box}>
              <FormLabel styles={{color: StylesConstant.COLOR_99}}>{this.state.warning}</FormLabel>
            </View>
          </View>
        </FadeInField>
      );
    }
  }

}

export class PasswordInput extends FormField {
  constructor(props) {
    super(props);
    this.state = {
          defaultValue: (this.props.defaultValue)?this.props.defaultValue:'',
          label: (this.props.label)?this.props.label:'label',
          value: (this.props.defaultValue)?this.props.defaultValue:'',
        };
  }

  render() {
    return (
      <View style={styles.textInput_outter}>
        <FormLabel>{this.state.label}</FormLabel>
        <View style={styles.textInput_inner}>
          <TextInput
              ref={(ref) => this.textInput = ref}
              style={styles.textInput_box}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({value:text})}
              defaultValue={this.state.defaultValue}
            />
        </View>
        {this._renderWarningMessage()}
      </View>
    )
  }

  _renderWarningMessage () {
    if (this.state.showWarning) {
      return (
        <FadeInField>
          <View style={styles.warning_outter}>
            <View style={styles.warning_arrow}></View>
            <View style={styles.warning_box}>
              <FormLabel styles={{color: StylesConstant.COLOR_99}}>{this.state.warning}</FormLabel>
            </View>
          </View>
        </FadeInField>
      );
    }
  }

}

export class Selector extends FormField {
  constructor(props) {
    super(props);
    this.state = {
          options: this.props.options,
          value: this.props.selected,
      };
  }

  _onPress (newKey) {
    if (this.state.value != newKey) {
        this.setState({value:newKey});
    }
  }

  render() {

    selections = this.state.options.map((option,i) => {
      return (
        <TouchableOpacity
            key={i}
            style={
                (this.state.value==option.key)?
                  styles.selection_selected:styles.selection
              }
            onPress={() => this._onPress(option.key)}
          >
          <Text
              style={
                  (this.state.value==option.key)?
                    styles.selection_box_selected:styles.selection_box
                }
            >
            {option.value}
        </Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.selector_outter}>
        <View style={styles.selector}>
        { selections }
        </View>
      </View>
    ); // end return
  }
}

export class Picker extends FormField {
  constructor(props) {
    super(props);
    this.state = {
            value:'',
            label: (this.props.label)?this.props.label:'label',
            options: (this.props.options)?this.props.options:[],
        }; // end this.state
  }
  render() {
    return (
      <View style={styles.textInput_outter}>
        <FormLabel>{this.state.label}</FormLabel>

      </View>
    );
  }
}

export class NumberPad extends FormField {
  constructor(props) {
    super(props);
    this.state = {defaultValue: (this.props.defaultValue)?this.props.defaultValue:'0',
                  value: (this.props.defaultValue)?this.props.defaultValue:'0',
                  label: (this.props.label)?this.props.label:'',
                }; // end this.state

  }

  render() {
      return (
      <View style={styles.numberPadBox}>
        <FormLabel>{this.state.label}</FormLabel>
        <View style={styles.textInput_inner}>
          <TextInput
              style={styles.textInput_box}
              editable={false}
              value={this.state.value}
            />
        </View>
        <View style={styles.numPadBox}>
          <View style={styles.numPadRow}>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('1')}>
              <FormLabel>1</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('2')}>
              <FormLabel>2</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('3')}>
              <FormLabel>3</FormLabel>
            </TouchableOpacity>
          </View>
          <View style={styles.numPadRow}>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('4')}>
              <FormLabel>4</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('5')}>
              <FormLabel>5</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('6')}>
              <FormLabel>6</FormLabel>
            </TouchableOpacity>
          </View>
          <View style={styles.numPadRow}>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('7')}>
              <FormLabel>7</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('8')}>
              <FormLabel>8</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('9')}>
              <FormLabel>9</FormLabel>
            </TouchableOpacity>
          </View>
          <View style={styles.numPadRow}>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('.')}>
              <FormLabel>.</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('0')}>
              <FormLabel>0</FormLabel>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numPadButton} onPress={()=> this._onButtonPressed('backspace')}>
              <FormLabel>B</FormLabel>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ); // end return
  } // end render

  _onButtonPressed (val) {
    let newValue = this.state.value;
    if (val == 'backspace') {
      newValue = this.state.value.substring(0, this.state.value.length - 1);
    } else if (val != '.' && this.state.value == '0') {
      newValue = val;
    } else if (val == '.' && this.state.value.indexOf('.') > 0){
      //ignore the input
    } else {
      newValue = this.state.value+val;
    }
    // Not allow empty
    if (!newValue) {
      newValue='0';
    }

    this.setState({value: newValue});
  } //End _onButtonPressed
}

const styles = StyleSheet.create({
  textInput_outter: {
    height: 85,
    width: 300,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textInput_inner: {
    height: 35,
    width: 300,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: StylesConstant.COLOR_3,
  },
  textInput_box: {
    alignSelf: 'stretch',
    width: 300,
    height: 35,
    color: StylesConstant.COLOR_3,
  },
  selector: {
    height: 35,
    width: 300,
    flexDirection: 'row',
  },
  selector_outter: {
    height: 40,
    width: 300,
    marginBottom: 25,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: StylesConstant.COLOR_3,
  },
  selection_selected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: StylesConstant.COLOR_3,
    backgroundColor: StylesConstant.COLOR_3,
  },
  selection_box: {
    color: StylesConstant.COLOR_3,
  },
  selection_box_selected: {
    color: StylesConstant.COLOR_0,
  },
  pickerOverlay: {
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  pickerOption: {
    padding: 20,
  },
  pickerOptionText: {
    textAlign: 'center',
    fontSize: StylesConstant.TEXT_SIZE_NORML,
    color: StylesConstant.COLOR_3
  },
  pickerCancel: {
    borderRadius: 50/4,
    borderWidth: 0,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StylesConstant.COLOR_2,
  },
  pickerCancelText: {
    fontSize: StylesConstant.TEXT_SIZE_BIGGER,
    color: StylesConstant.COLOR_1,
  },
  numberPadBox: {
    height: 320,
    width: 300,
  },
  numPadBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  numPadRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  numPadButton: {
    height: 55,
    width: 65,
    borderRadius: 55/2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: StylesConstant.COLOR_3,
  },
  warning_outter: {
    height: 25,
  },
  warning_arrow: {
    marginLeft: 10,
    width: 0,
     height: 0,
     backgroundColor: 'transparent',
     borderStyle: 'solid',
     borderLeftWidth: 5,
     borderRightWidth: 5,
     borderBottomWidth: 8,
     borderLeftColor: 'transparent',
     borderRightColor: 'transparent',
     borderBottomColor: StylesConstant.COLOR_98,
  },
  warning_box: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: StylesConstant.COLOR_98,
  }
});
