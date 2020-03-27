//IMPORTS
import React from 'react';
import {  createBottomTabNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {TabBarIcon, Ionicons} from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

import {Text, Dimensions } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo';

// Custom Components :
import DrawerComponent from '../components/DrawerComponent';

// On importe tous les stacks navigators : 1 par onglet
import ContactsStack from './TabStackNavigators/ContactsStack';
import InfosStack from './TabStackNavigators/InfosStack';
import MapStack from './TabStackNavigators/MapStack';
import ProgramStack from './TabStackNavigators/ProgramStack';
import ResultsStack from './TabStackNavigators/ResultsStack';
import TeamStack from './TabStackNavigators/TeamStack';

// NAVIGATION :

// Bottom Tab Navigator (qui regroupe les onglets les plus utilisés - surtout ceux adressés au public)

const BottomTabNavigator = createBottomTabNavigator({

  Infos: {
    screen: InfosStack,
    navigationOptions: {
      tabBarLabel: 'Latest',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo
          name="home"
          size={30}
          color={tintColor} />
      )},
    },
  },
  
  Program: {
    screen: ProgramStack,
    navigationOptions: {
      tabBarLabel: 'Programme',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo name="calendar" size={30} color={tintColor} />
      )},
    }
  },

  Results: {
    screen: ResultsStack,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo name="trophy" size={30} color={tintColor} />
      )},
    },
  },

  Map: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo name="map" size={30} color={tintColor} />
      )},
    },
  },
/*
  More: {
    screen: ()=> <Text> MORE INCOMING !</Text>,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo name="dots-three-horizontal" size={30} color={tintColor} />
      )},
    }
  },*/
}
);


// Mise ne place du Drawer Navigator

const MainStack = createStackNavigator(
  {
    Home : {
      screen: BottomTabNavigator,
    },
    Teams : {
      screen: TeamStack,
    },
    Contacts: {
      screen: ContactsStack,
    }
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Home'
  }
);

const DrawerNavigator = createDrawerNavigator(
  {drawer: MainStack},
  {
    contentComponent: ({ navigation }) => <DrawerComponent navigation={navigation} />,
    drawerWidth: Dimensions.get('window').width*3/4
  }

)



// Drawer navigator : 19'15''
// https://www.youtube.com/watch?v=0VfzgFZt-AI&t=982s

/*
// DrawerNavigator (contient tous les onglets qui ne sont pas dans la barre d'onglets du bas)
const DrawerNavigator = createDrawerNavigator({
  Team: TeamStack,
  Contacts: ContactsStack
});

// MainDrawer (Contient la barre d'onglet et le drawer des onglets aditionnels)
const MainDrawerNavigator = createDrawerNavigator({
  BottomTabNavigator: BottomTabNavigator,
  DrawerNavigator: DrawerNavigator
});
*/

// EXPORT :
export default createAppContainer(
  DrawerNavigator
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
);