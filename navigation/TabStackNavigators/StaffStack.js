//IMPORTS
import React from 'react';
import { createStackNavigator} from 'react-navigation';
import StaffScreen from '../../screens/StaffScreen';
import PdfScreen from '../../screens/PdfScreen';

// Constants

const screens = {
  StaffHome: StaffScreen,
  PdfScreen: PdfScreen,
}

// StaffStack

const StaffStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
      header: null,
    }
  }
);

export default StaffStack;