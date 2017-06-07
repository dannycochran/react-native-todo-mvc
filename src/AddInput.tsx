import * as React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import styles from './styles';

export default class AddInput extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
}
