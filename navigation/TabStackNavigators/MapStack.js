import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import TabBarIcon from '@expo/vector-icons/Ionicons';

import MapScreen from '../../screens/MapScreen';

// PlanStack
const screens = {
    Plan: MapScreen,
  };

  const MapStack =  createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    }
  );

export default MapStack;