/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import styles from './styles';

import AddInput from './AddInput';

export default class App extends React.Component {
  state = {
    input: '',
    editing: false
  }

  onFocusInput(editing) {
    this.setState({ editing });
  }

  onInput(input) {
    this.setState({ input });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>todos</Text>
        <AddInput onFocus={this.onFocusInput.bind(this)} onInput={this.onInput.bind(this)} input={this.state.input}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('actual', () => App);
