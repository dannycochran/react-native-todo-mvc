import * as React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

import AddInput from './AddInput';
import AddButton from './AddButton';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.headerText}>todos</Text>
        <AddInput />
        <AddButton />
      </View>
    );
  }
}
