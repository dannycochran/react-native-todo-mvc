import * as React from 'react';

import {
  Text,
  TouchableHighlight
} from 'react-native';

import styles, { buttonUnderlay } from './styles';

interface AddButtonProps {
  addTodo: () => void;
  disabled: boolean;
}

export default class AddButton extends React.Component<AddButtonProps, {}> {
  render() {
    return (
      <TouchableHighlight style={styles.addButton}
        onPress={this.props.addTodo}
        disabled={this.props.disabled}
        underlayColor={buttonUnderlay}>
        <Text style={styles.addText}>Add Todo</Text>
      </TouchableHighlight>
    );
  }
}
