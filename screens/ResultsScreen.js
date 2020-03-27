//IMPORTS
import React from 'react';
import {View, Text} from 'native-base';


import CustomHeader from '../components/CustomHeader';

//COMPONENTS
class ResultsScreen extends React.Component {

  render() {
    return (
      <View>
        <CustomHeader title="Results" isHome={true} navigation={this.props.navigation} />
        <Text> Results of the past games + of the games currently played</Text>
      </View>

    );
  }
}

//EXPORTS
export default ResultsScreen;
