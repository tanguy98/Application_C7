// IMPORTS
import { createStackNavigator} from 'react-navigation';

import TestScreen from '../../screens/TestScreen';
import BarreMenu from '../../components/BarreMenu';
// Constants :

const screens = {
  Test: TestScreen,
};


// ContactsStack
const TestStack = createStackNavigator(
  screens,
  { defaultNavigationOptions: {
    header: null,
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Test'} logo={'ios-podium'}/>
    )
  }
  }
);

export default TestStack;
