import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Text,
  View
} from 'react-native';

import styles from './styles';

import AddInput from './AddInput';
import AddButton from './AddButton';

interface TodoItem {
  description: string;
  timestamp: number;
  id: string;
  completed: boolean;
}

interface AppState {
  todos: TodoItem[];
  loading: boolean;
  input: string;
}

export default class App extends React.Component<{}, AppState> {
  state = {
    loading: false,
    todos: [],
    input: ''
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

  async addTodo() {
    const timestamp = Date.now();
    const todos = [
      {
        timestamp,
        description: this.state.input,
        id: timestamp + this.state.input,
        completed: false
      },
      ...this.state.todos
    ];

    await this.storeTodos(todos);
    console.log('new items', todos);
    this.setState(prevState => ({
      ...prevState,
      input: '',
      todos
    }));
  }

  componentDidMount() {
    this.fetchTodos();
  }

  render() {
    if (this.state.loading === true) {
      return <ActivityIndicator style={styles.centered} size='large' animating={true} />
    }

    return (
      <View style={styles.appContainer}>
        <Text style={styles.headerText}>todos</Text>
        <AddInput />
        <AddButton addTodo={this.addTodo.bind(this)}/>
      </View>
    );
  }
}
