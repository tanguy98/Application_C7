//IMPORTS
import { createStackNavigator} from 'react-navigation';
import StaffScreen from '../../screens/StaffScreen';

// Constants

const screens = {
  StaffHome: StaffScreen,
}

// StaffStack

const StaffStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
      header: null,
      drawerLabel : ({tintColor})=>(
        <BarreMenu couleur={tintColor} titre={'Staff'} logo={'ios-podium'}/>
      )
    }
  }
);

export default StaffStack;