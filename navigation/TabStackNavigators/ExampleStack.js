//IMPORTS
import { createStackNavigator} from 'react-navigation';

import ExampleScreen from '../../screens/ExampleScreen';

//CONSTS

const screens = {

  Example1: {
    screen: ExampleScreen, //screen de la page d'accueil de cet onglet
  },

  Example2: {
    screen: ExampleScreen, // insérer ici le screen correspondant à une page inférieure
  },

};

//STACK NAVIGATOR :

const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      header: null, // Le Header est déjà affiché dans le screen comme default component
    }
  }
);

//EXPORTS :

export default ProgramStack;