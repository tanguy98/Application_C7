// IMPORTS
import { createStackNavigator} from 'react-navigation';
import ContactsScreen from '../../screens/ContactsScreen';

// Constants :

const screens = {
  Contacts: ContactsScreen,
};


// ContactsStack
const ContactsStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }
  }
);

export default ContactsStack;