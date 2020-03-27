//IMPORTS
import React from 'react';
import {View, Text, Button} from 'native-base';

import CustomHeader from '../components/CustomHeader';

//COMPONENT :
class ProgramScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}} >
          <CustomHeader title="Program" isHome={true} navigation={this.props.navigation} style={{flex:1}} />
        </View>
        <View style={{flex:6}} >
          <Text>
            This page will contain the planning for the matchs (horaire, terrain, phase du tournois, en cours/ joué, résultat si joué, score live sinon)
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Program2')}>
            <Text>Access sub layer of the program tab</Text>
          </Button>
        </View>
        
      </View>
    );
  }
}

//EXPORTS:
export default ProgramScreen;
