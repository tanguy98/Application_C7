// IMPORTS
import { createStackNavigator} from 'react-navigation';

import ContactsScreen from '../../screens/ContactsScreen';
import BarreMenu from '../../components/BarreMenu';
// Constants :

const screens = {
  Contacts: ContactsScreen,
};


// ContactsStack
const ContactsStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null,
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Classement'} logo={'ios-podium'}/>
    )
  }
  }
);

export default ContactsStack;