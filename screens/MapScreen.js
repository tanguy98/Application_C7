// IMPORTS
import React from 'react';
import {Text,  View,} from 'native-base';

import CustomHeader from '../components/CustomHeader';

// COMPONENT
class PlanScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <CustomHeader title="Map" isHome={true} navigation={this.props.navigation} />
        </View>
        <View style={{flex:6}}>
          <Text>
            This tab will present a map for the palyers, public and staff to find their way.
          </Text> 
        </View>
        </View>               
    );
  }

}

// EXPORTS
export default PlanScreen;
