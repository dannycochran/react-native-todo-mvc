import * as React from 'react';
import {
  TouchableHighlight,
  Text
} from 'react-native';

import styles from './styles';

import AddInput from './AddInput';

export default class App extends React.Component<{}, {}> {
  render() {

    return (
      <TouchableHighlight style={styles.appContainer}>
        <Text>Add Todo</Text>
      </TouchableHighlight>
    );
  }
}
