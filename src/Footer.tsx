import React from 'react';

import {
  TouchableHighlight,
  View,
  Text
} from 'react-native';

import styles, { buttonUnderlayLight } from './styles';
import { TabType } from './App';

const tabs = ['active', 'completed'];

interface FooterProps {
  selectedTab: TabType;
  onChangeTab: (tabName: TabType) => void;
}

export default class Footer extends React.Component<FooterProps, {}> {
  renderTab(tab: TabType) {
    const tabStyles = [
      styles.tabContainer,
      tab === this.props.selectedTab ? styles.selectedTab : {}
    ];
    return (
      <TouchableHighlight style={tabStyles} key={tab}
        underlayColor={buttonUnderlayLight}
        onPress={() => this.props.onChangeTab(tab)}>
        <Text style={styles.tabText}>{tab}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.footerContainer}>
        {tabs.map(this.renderTab.bind(this))}
      </View>
    );
  }
}
