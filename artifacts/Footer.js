import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import styles, { buttonUnderlayLight } from './styles';
const tabs = ['active', 'completed'];
export default class Footer extends React.Component {
    renderTab(tab) {
        const tabStyles = [
            styles.tabContainer,
            tab === this.props.selectedTab ? styles.selectedTab : {}
        ];
        return (React.createElement(TouchableHighlight, { style: tabStyles, key: tab, underlayColor: buttonUnderlayLight, onPress: () => this.props.onChangeTab(tab) },
            React.createElement(Text, { style: styles.tabText }, tab)));
    }
    render() {
        return (React.createElement(View, { style: styles.footerContainer }, tabs.map(this.renderTab.bind(this))));
    }
}
//# sourceMappingURL=Footer.js.map