var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { ActivityIndicator, AsyncStorage, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import AddButton from './AddButton';
import AddInput from './AddInput';
import Footer from './Footer';
import Todo from './Todo';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            todos: [],
            input: '',
            selectedTab: 'active',
            loading: false,
            editing: false,
            scrollEnabled: true
        };
        this.scrollView = null;
    }
    addTodo() {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.storeTodos(todos);
            console.log('new todos:', todos);
            this.setState({
                todos,
                input: ''
            });
        });
    }
    storeTodos(todos) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AsyncStorage.setItem('todos', JSON.stringify(todos));
        });
    }
    fetchTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ loading: true });
            let todos = yield AsyncStorage.getItem('todos');
            todos = JSON.parse(todos) || [];
            this.setState(prevState => (Object.assign({}, prevState, { loading: false, todos })));
        });
    }
    onReleaseTodo(todoId, config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scrollView.scrollTo({ y: 0, animated: true });
            const todoIndex = this.state.todos.findIndex(t => t.id === todoId);
            const todos = [...this.state.todos];
            if (config.remove) {
                todos.splice(todoIndex, 1);
            }
            else if (config.complete) {
                todos[todoIndex].completed = !todos[todoIndex].completed;
            }
            yield this.storeTodos(todos);
            this.setState({ scrollEnabled: true, todos });
        });
    }
    onDragTodo() {
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
    componentDidMount() {
        this.fetchTodos();
    }
    renderTodos() {
        const todoHandlers = {
            onDragTodo: this.onDragTodo.bind(this),
            onReleaseTodo: this.onReleaseTodo.bind(this)
        };
        return this.state.todos.filter(todo => {
            return this.state.selectedTab === 'active' ? todo.completed === false : todo.completed === true;
        }).map(todo => (React.createElement(Todo, Object.assign({}, Object.assign({}, todo, todoHandlers), { key: todo.id }))));
    }
    render() {
        if (this.state.loading) {
            return React.createElement(ActivityIndicator, { style: styles.centered, animating: true, size: 'large' });
        }
        return (React.createElement(View, { style: styles.appContainer },
            React.createElement(KeyboardAvoidingView, { style: styles.appWrapper, behavior: 'padding' },
                React.createElement(Text, { style: styles.headerText }, "todos"),
                React.createElement(AddInput, { onFocus: this.onFocusInput.bind(this), onInput: this.onInput.bind(this), input: this.state.input }),
                React.createElement(View, { style: styles.scrollContainer },
                    React.createElement(ScrollView, { ref: (ref) => this.scrollView = ref, style: { flex: 1 }, scrollEnabled: this.state.scrollEnabled }, this.renderTodos())),
                this.state.editing ? React.createElement(AddButton, { addTodo: this.addTodo.bind(this), disabled: this.state.input.length === 0 }) : null),
            React.createElement(Footer, { onChangeTab: this.onChangeTab.bind(this), selectedTab: this.state.selectedTab })));
    }
}
//# sourceMappingURL=App.js.map