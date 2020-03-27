import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import TabBarIcon from '@expo/vector-icons/Ionicons';

import ResultsScreen from '../../screens/ResultsScreen';

// ResultStack
const screens = {
    Results: ResultsScreen,
  };

  const ResultsStack = createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    }
  );

export default ResultsStack;