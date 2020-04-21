// IMPORTS
import { createStackNavigator} from 'react-navigation';
import SatisfactionScreen from '../../screens/SatisfactionScreen';

// Constants :

const screens = {
  Satisfaction: SatisfactionScreen,
};


// BugStack
const SatisfactionStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);

export default SatisfactionStack;