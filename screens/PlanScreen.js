// IMPORTS
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

// COMPONENT
class PlanScreen extends React.Component {

  render() {
    return (
          <Text>
            Cet onglet contiendra le plan du tournoi, avec les lieux importants
          </Text>
    );
  }

}

// EXPORTS
export default PlanScreen;
