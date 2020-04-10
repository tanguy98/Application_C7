//IMPORTS 
import { createStackNavigator} from 'react-navigation';

import InfosScreen from '../../screens/InfosScreen';

// InfosStack
const screens = {
    Infos: InfosScreen,
  };

const InfosStack =  createStackNavigator(
  screens, 
  { defaultNavigationOptions: { header: null }
  }
);

export default InfosStack;