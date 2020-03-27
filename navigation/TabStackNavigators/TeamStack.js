//IMPORTS
import { createStackNavigator} from 'react-navigation';
import TeamScreen from '../../screens/TeamScreen';

// Constants

const screens = {
  TeamHome: TeamScreen,
}


// TeamStack
const TeamStack = createStackNavigator(screens);

export default TeamStack;