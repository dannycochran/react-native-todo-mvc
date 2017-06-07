import React from 'react';
import { Animated, View, Text, PanResponder } from 'react-native';
import styles, { width, shadowProps } from './styles';
const backgroundColors = {
    default: '#ccc',
    deleting: '#ef5350',
    completing: '#66bb6a'
};
const actionThreshold = width / 4;
const minDragThreshold = 2;
export default class Todo extends React.Component {
    constructor() {
        super(...arguments);
        this.panX = 0;
        this.translateX = new Animated.Value(0);
        this.panResponder = this.createPanResponder();
        this.state = {
            backgroundColor: backgroundColors.default,
            dragging: false
        };
    }
    onReleaseTodo() {
        this.setState({ dragging: false });
        const complete = this.panX > actionThreshold;
        const remove = this.panX < -actionThreshold;
        const finalValue = remove ? -width : complete ? width : 0;
        Animated.timing(this.translateX, { toValue: finalValue, useNativeDriver: true }).start(() => {
            this.setState({ backgroundColor: backgroundColors.default });
            this.props.onReleaseTodo(this.props.id, { remove, complete });
            this.translateX.setValue(0);
        });
    }
    onDragTodo(dx) {
        if (Math.abs(dx) > minDragThreshold || this.panX > 0) {
            if (this.panX === 0) {
                this.props.onDragTodo();
            }
            this.panX = dx;
            this.translateX.setValue(this.panX);
            this.setState({
                backgroundColor: this.panX > 0 ? backgroundColors.completing : backgroundColors.deleting,
                dragging: true
            });
        }
    }
    createPanResponder() {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: () => { this.panX = 0; },
            onPanResponderMove: (evt, gestureState) => this.onDragTodo(gestureState.dx),
            onPanResponderTerminationRequest: () => { this.onReleaseTodo(); return true; },
            onPanResponderRelease: () => this.onReleaseTodo()
        });
    }
    render() {
        const animatedStyles = [
            {
                transform: [
                    { translateX: this.translateX }
                ]
            },
            styles.todoWrapper,
            this.state.dragging ? shadowProps : {}
        ];
        return (React.createElement(View, Object.assign({ style: [styles.todoContainer, {
                    backgroundColor: this.state.backgroundColor
                }] }, this.panResponder.panHandlers),
            React.createElement(Animated.View, { style: animatedStyles },
                React.createElement(Text, { style: styles.todoText }, this.props.description))));
    }
}
//# sourceMappingURL=Todo.js.map