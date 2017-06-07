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
}

export default class App extends React.Component<{}, AppState> {
  state = {
    loading: false,
    todos: []
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

  async addItem(description: string) {
    const timestamp = Date.now();
    const todos = [
      {
        timestamp,
        description,
        id: timestamp + description,
        completed: false
      },
      ...this.state.todos
    ];

    await this.storeTodos(todos);
    this.setState(prevState => ({
      ...prevState,
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
        <AddButton />
      </View>
    );
  }
}
