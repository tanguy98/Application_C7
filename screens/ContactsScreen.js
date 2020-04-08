//IMPORTS

import React from 'react';
import {Text, View } from 'native-base';

import CustomHeader from '../components/CustomHeader';

// COMPONENTS :

class ContactsScreen extends React.Component {

  render () {
    return(
      <View>
        <CustomHeader title="Contacts" isHome={true} navigation={this.props.navigation} />
        <Text>Useful Contacts : buses, urgency,...</Text>
      </View>
    )
  }
}

// EXPORT :
export default ContactsScreen;
