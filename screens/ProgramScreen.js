import React, {Component} from 'react';

import { AppRegistry, Text, StyleSheet } from 'react-native';

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Cette page contiendra le détail du programme des matchs",
      bodyText: 'Avec les horaires de début de matchs, ainsi que le terrain sur lequel le match sera joué'
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
