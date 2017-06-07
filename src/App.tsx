import * as React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class App extends React.Component<{}, {}> {
  render() {

    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
      </View>
    );
  }
}
