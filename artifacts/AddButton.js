import * as React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles, { buttonUnderlay } from './styles';
export default class AddButton extends React.Component {
    render() {
        return (React.createElement(TouchableHighlight, { style: styles.addButton, onPress: this.props.addTodo, disabled: this.props.disabled, underlayColor: buttonUnderlay },
            React.createElement(Text, { style: styles.addText }, "Add Todo")));
    }
}
//# sourceMappingURL=AddButton.js.map