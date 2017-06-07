/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, AsyncStorage, StyleSheet, Text, View } from 'react-native';

import styles from './styles';

import AddButton from './AddButton';
import AddInput from './AddInput';

export default class App extends React.Component {
  state = {
    todos: [],
    input: '',
    loading: false,
    editing: false
  }

  async addTodo() {
    const timestamp = Date.now();
    const todos = [
      {
        id: timestamp + this.state.input,
        timestamp,
        completed: false,
        description: this.state.input
      },
      ...this.state.todos
    ];

    await this.storeTodos(todos);
    console.log('new todos:', todos);
    this.setState({
      todos,
      input: ''
    });
  }

  async storeTodos(todos) {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  }

  async fetchTodos() {
    this.setState({ loading: true });
    let todos = await AsyncStorage.getItem('todos');
    todos = JSON.parse(todos) || [];
    this.setState(prevState => ({
      ...prevState,
      loading: false,
      todos
    }));
  }

  onFocusInput(editing) {
    this.setState({ editing });
  }

  onInput(input) {
    this.setState({ input });
  }

  componentDidMount() {
    this.fetchTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>todos</Text>
        <AddInput onFocus={this.onFocusInput.bind(this)} onInput={this.onInput.bind(this)} input={this.state.input}/>
        {this.state.editing ? <AddButton addTodo={this.addTodo.bind(this)}/> : null }
      </View>
    );
  }
}

AppRegistry.registerComponent('actual', () => App);
