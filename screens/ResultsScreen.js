//IMPORTS
import React from 'react';
import {Text} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

//COMPONENTS
class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    return (
      <Text> Onglet de résultats des matchs</Text>
    );
  }
}

//EXPORTS
export default ResultsScreen;
