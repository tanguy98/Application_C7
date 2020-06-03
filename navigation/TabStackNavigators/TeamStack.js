//IMPORTS
import React from 'react';
import { createStackNavigator} from 'react-navigation';
import TeamScreen from '../../screens/TeamScreen';
import PdfScreen from '../../screens/PdfScreen';

// Constants

const screens = {
  TeamHome: TeamScreen,
  PdfScreen :PdfScreen,
}

// TeamStack

const TeamStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null,
  }
  }
);

export default TeamStack;