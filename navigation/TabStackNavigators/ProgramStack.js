//IMPORTS

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import {TabBarIcon, Ionicons} from '@expo/vector-icons/Ionicons';
import {Button, View, Text} from 'react-native';

import ProgramScreen from '../../screens/ProgramScreen';
import Program2 from '../../screens/Program2';

//CONSTS

const screens = {

  Program1: {
    screen: ProgramScreen,
  },

  Program2: {
    screen: Program2,
  },

};

//STACK NAVIGATOR :

const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);

//EXPORTS :

export default ProgramStack;


/* const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      title: 'Centrale 7',
      headerStyle: {
        backgroundColor: '#006c00',
        height:60
      },
      headerTintColor: '#ffffff',
      /*headerLeft: () => {return(
        <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} />
      )} #fin commentaire
    }
  }
);
*/