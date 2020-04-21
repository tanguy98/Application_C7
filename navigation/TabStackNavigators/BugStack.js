// IMPORTS
import { createStackNavigator} from 'react-navigation';
import BugScreen from '../../screens/BugScreen';

// Constants :

const screens = {
  Bug: BugScreen,
};


// BugStack
const BugStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);

export default BugStack;