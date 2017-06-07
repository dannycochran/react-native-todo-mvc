import * as React from 'react';
import {
  TouchableHighlight,
  Text
} from 'react-native';

import styles from './styles';

import AddInput from './AddInput';

interface AddButtonProps {
  addTodo: () => void;
}

export default class App extends React.Component<AddButtonProps, {}> {
  render() {

    return (
      <TouchableHighlight style={styles.addButton}
        onPress={this.props.addTodo}>
        <Text style={styles.addText}>Add Todo</Text>
      </TouchableHighlight>
    );
  }
}
