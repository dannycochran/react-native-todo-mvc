/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import styles from './styles';

import AddButton from './AddButton';
import AddInput from './AddInput';
import Footer from './Footer';
import Todo from './Todo';

export default class App extends React.Component {
  state = {
    todos: [],
    input: '',
    selectedTab: 'active',
    loading: false,
    editing: false,
    scrollEnabled: true
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

  async onReleaseTodo(todoId, config) {
    this.scrollView.scrollTo({ y: 0, animate: true });
    const todoIndex = this.state.todos.findIndex(t => t.id === todoId);
    const todos = [ ...this.state.todos ];

    if (config.remove) {
      todos.splice(todoIndex, 1);
    } else if (config.complete) {
      todos[todoIndex].completed = !todos[todoIndex].completed;
    }

    await this.storeTodos(todos);
    this.setState({ scrollEnabled: true, todos });
  }

  onDragTodo(callback) {
    this.setState({ scrollEnabled: false });
  }

  onChangeTab(selectedTab) {
    this.setState({ selectedTab });
  }

  onFocusInput(editing) {
    this.setState({ editing });
  }

  onInput(input) {
    this.setState({ input });
  }

  getTodos() {
    return this.state.todos.filter(todo => {
      return this.state.selectedTab === 'active' ? todo.completed === false : todo.completed === true;
    });
  }

  componentDidMount() {
    this.fetchTodos();
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator style={styles.centered} animating={true} size='large'/>;
    }

    const todoHandlers = {
      onDragTodo: this.onDragTodo.bind(this),
      onReleaseTodo: this.onReleaseTodo.bind(this)
    };

    return (
      <View style={styles.appContainer}>
        <KeyboardAvoidingView style={styles.appWrapper} behavior='padding'>
          <Text style={styles.headerText}>todos</Text>
          <AddInput onFocus={this.onFocusInput.bind(this)} onInput={this.onInput.bind(this)} input={this.state.input}/>
          <View style={styles.scrollContainer}>
            <ScrollView ref={(ref) => this.scrollView = ref} style={{flex: 1}} scrollEnabled={this.state.scrollEnabled}>
              {this.getTodos().map(t => <Todo {...t} key={t.id} {...todoHandlers}/>)}
            </ScrollView>
          </View>
          {this.state.editing ? <AddButton addTodo={this.addTodo.bind(this)} disabled={this.state.input.length === 0}/> : null }
        </KeyboardAvoidingView>
        <Footer onChangeTab={this.onChangeTab.bind(this)} selectedTab={this.state.selectedTab} />
      </View>
    );
  }
}

AppRegistry.registerComponent('actual', () => App);
