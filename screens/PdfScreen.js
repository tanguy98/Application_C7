//IMPORTS
import React from 'react';
import {View, WebView} from 'react-native';
import CustomHeader from '../components/CustomHeader';

//COMPONENTS
class PdfScreen extends React.Component {

  render () {
    return(
      <View style={{flex:1}}>
          <View style={{flex:1}}>
              <CustomHeader title="Staffeur" isHome={false} navigation={this.props.navigation} />
          </View>
          <View style={{flex:11}}>
              <WebView source={{uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing'}} />
          </View>
      </View>
    )
  }
}

//EXPORTS
export default PdfScreen;
