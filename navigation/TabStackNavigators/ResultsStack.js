// IMPORTS :
import { createStackNavigator} from 'react-navigation';

import ResultsScreen from '../../screens/ResultsScreen';

// ResultStack
const screens = {
    Results: ResultsScreen,
  };

  const ResultsStack = createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    },
  );

export default ResultsStack;