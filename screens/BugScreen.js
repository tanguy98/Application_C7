import React from 'react';
import {View, WebView} from 'react-native';
import CustomHeader from '../components/CustomHeader';

class GgForm extends React.Component {

  constructor(props) {
        super(props)
    }

  render () {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <CustomHeader title="Signaler un bug" isHome={true} navigation={this.props.navigation} />
            </View>
            <View style={{flex:11}}>
                <WebView source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLScGUKMj5jPWLHVBYZDilwLR-j6jEzOQLsXTGt8kecuz4W6lsA/viewform?usp=sf_link'}} />
            </View>
        </View>
        
    )
  }
}

export default GgForm;

