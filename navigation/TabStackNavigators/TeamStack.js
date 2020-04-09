//IMPORTS
import { createStackNavigator} from 'react-navigation';
import TeamScreen from '../../screens/TeamScreen';

// Constants

const screens = {
  TeamHome: TeamScreen,
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