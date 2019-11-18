import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TeamScreen from '../screens/TeamScreen';
import ResultsScreen from '../screens/ResultsScreen';
import InfosScreen from '../screens/InfosScreen';
import PlanScreen from '../screens/PlanScreen';
import ProgramScreen from '../screens/ProgramScreen';

const TeamStack = createStackNavigator({
  Team: TeamScreen,
});

TeamStack.navigationOptions = {
  tabBarLabel: 'Equipes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star${focused ? '' : '-outline'}`
          : 'md-star'
      }
    />
  ),
};

const ProgramStack = createStackNavigator({
  Program: ProgramScreen,
});

ProgramStack.navigationOptions = {
  tabBarLabel: 'Programme',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  ),
};

const PlanStack = createStackNavigator({
  Plan: PlanScreen,
});

PlanStack.navigationOptions = {
  tabBarLabel: 'Plan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-globe${focused ? '' : '-outline'}`
          : 'md-globe'
      }
    />
  ),
};

const ResultsStack = createStackNavigator({
  Results: ResultsScreen,
});

ResultsStack.navigationOptions = {
  tabBarLabel: 'Résultats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
    />
  ),
};

const InfosStack = createStackNavigator({
  Infos: InfosScreen,
});

InfosStack.navigationOptions = {


  tabBarLabel: 'Infos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
  tabBarOptions : {
    activeTintColor :'#15BB4E',
  }

};

export default createBottomTabNavigator({
  ProgramStack,
  InfosStack,
  ResultsStack,
  PlanStack,
  TeamStack,
});
