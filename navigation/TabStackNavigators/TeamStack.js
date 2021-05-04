//IMPORTS
import React from 'react';
import { createStackNavigator} from 'react-navigation';
import TeamDetails from '../../screens/TeamDetails';
import PdfScreen from '../../screens/PdfScreen';

// Constants

const screens = {
  TeamHome: TeamDetails,
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
