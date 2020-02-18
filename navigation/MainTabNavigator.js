import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import TabBarIcon from '../components/TabBarIcon';
import TeamScreen from '../screens/TeamScreen';
import ResultsScreen from '../screens/ResultsScreen';
import InfosScreen from '../screens/InfosScreen';
import PlanScreen from '../screens/PlanScreen';
import PdfScreen from '../screens/PdfScreen';
import ProgramScreen from '../screens/ProgramScreen';
import SecondBar from '../components/SecondBar';
import ContactsScreen from '../screens/ContactsScreen';
import StaffScreen from '../screens/StaffScreen';

const TeamStack = createStackNavigator({
  Team: TeamScreen,
  PdfScreen : PdfScreen,
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

const ContactsStack = createStackNavigator({
  Infos: ContactsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} />
        )
      };
    }
  }
);

const StaffStack = createStackNavigator({
  Infos: StaffScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} />
        )
      };
    }
  }
);


const MainTabNavigator = createBottomTabNavigator({
  ProgramStack,
  InfosStack,
  ResultsStack,
  PlanStack,
  TeamStack,
});

const MainStackNavigator = createStackNavigator(
  {
    MainTabNavigator: MainTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  MainStackNavigator: MainStackNavigator,
  Contacts : ContactsStack,
  Staff : StaffStack
});



export default createAppContainer(AppDrawerNavigator)
