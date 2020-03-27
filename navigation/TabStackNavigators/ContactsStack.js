import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import ContactsScreen from '../../screens/ContactsScreen';

// Constants :

const screens = {
  Infos: ContactsScreen,
}


// ContactsStack
const ContactsStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: { header: null }
  }
);

export default ContactsStack;