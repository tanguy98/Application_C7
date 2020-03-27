import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import TabBarIcon from '@expo/vector-icons/Ionicons';

import InfosScreen from '../../screens/InfosScreen';

// InfosStack
const screens = {
    Infos: InfosScreen,
  };

const InfosStack =  createStackNavigator(
  screens, 
  { defaultNavigationOptions: { header: null }
  }
);

export default InfosStack;