import * as React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

interface AddInputProps {
  input: string;
  onFocus: (focused: boolean) => void;
  onInput: (input: string) => void;
}

export default class AddInput extends React.Component<AddInputProps, {}> {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={this.props.input.length > 0 ? styles.textInputFocused : styles.textInput}
          onFocus={() => this.props.onFocus(true)}
          onBlur={() => this.props.onFocus(false)}
          placeholder={'What needs to be done?'}
          value={this.props.input}
          onChangeText={this.props.onInput} />
      </View>
    );
  }
}
