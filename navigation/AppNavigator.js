//IMPORTS
import React from 'react';
import {  createBottomTabNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { AntDesign,FontAwesome ,Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';

import {Text, Dimensions } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo';

// Custom Components :
import DrawerComponent from '../components/DrawerComponent';
import BarreMenu from '../components/BarreMenu';

// On importe tous les stacks navigators : 1 par onglet
import ContactsStack from './TabStackNavigators/ContactsStack';
import InfosStack from './TabStackNavigators/InfosStack';
import MapStack from './TabStackNavigators/MapStack';
import ProgramStack from './TabStackNavigators/ProgramStack';
import ResultsStack from './TabStackNavigators/ResultsStack';
import TeamStack from './TabStackNavigators/TeamStack';
import StaffStack from './TabStackNavigators/StaffStack';
import TestStack from './TabStackNavigators/TestStack';


// NAVIGATION :

// Bottom Tab Navigator (qui regroupe les onglets les plus utilisés - surtout ceux adressés au public)

const BottomTabNavigator = createBottomTabNavigator(
  {
    Infos: {
      screen: InfosStack,
      navigationOptions: {
        tabBarLabel: 'Latest',
        tabBarIcon: ({ focused, color, size, tintColor}) => {return(
          <FontAwesome
            name="info-circle"
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
          <FontAwesome name="calendar" size={30} color={tintColor} />
        )},
      }
    },

    Results: {
      screen: ResultsStack,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarIcon: ({tintColor}) => {return(
          <FontAwesome name="trophy" size={30} color={tintColor} />
        )},
      },
    },

    Map: {
      screen: MapStack,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({tintColor}) => {return(
          <FontAwesome name="map" size={30} color={tintColor} />
        )},
      },
    },
  },
  {
    tabBarOptions: { activeTintColor:'#549E5E'}
  }
);

  {/*More: {
    screen: ()=> {}},
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <IconEntypo name="dots-three-horizontal" size={30} color={tintColor} />
      )},
    }
  },*/}


// Mise ne place du Drawer Navigator

const screens = {
    Home : {
      screen: BottomTabNavigator,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Home'} iconName={'home'} type="AntDesign"/>
        )
      },
    },
    Teams : {
      screen: TeamStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Teams'} iconName={'team'} type="AntDesign"/>
        )
      },
    },
    Contacts: {
      screen: ContactsStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor}  title={'Contacts'} iconName={'phone'} type="AntDesign"/>
        )
      },
    },
    Staff :{
      screen: StaffStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Staff'} iconName={'idcard'} type="AntDesign" />
        )
      }
    },
    Test :{
      screen: TestStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Test'} iconName={'idcard'} type="AntDesign" />
        )
      }
    },
  };

const DrawerNavigator = createDrawerNavigator(
  screens,
  {
    contentComponent: DrawerComponent,
    drawerWidth: Dimensions.get('window').width*3/4,
    contentOptions:{
      activeTintColor:'#549e5e',
      activeBackgroundColor:'#ececec'
    }
  }

)

// EXPORT :
export default createAppContainer(
  DrawerNavigator
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
);
