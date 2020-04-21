//IMPORTS

import React from 'react';
import {View,TouchableOpacity,Dimensions,Image,ScrollView,Linking} from 'react-native';

import CustomHeader from '../components/CustomHeader';

//CONSTANTS :
const {width} = Dimensions.get('window');

//COMPONENT
class PartnersScreen extends React.Component {

  render() {
    return(
      <View style={{flex:1}}>
            <View style={{flex:1}}>
                <CustomHeader title="Partners" isHome={true} navigation={this.props.navigation} />
            </View>
        
            <View style={{flex:11}}>
                <ScrollView style={{}}>
                    {/* <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Partenaires offficiels</Text>
                    </View> */}
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.edf.fr/edf-recrute')}} style={{width:width,height:1*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.mazars.fr/')}} style={{width:width,height:1*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://france.devoteam.com/')}} style={{width:width,height:1.3296*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.bouygues-es.com/')}} style={{width:width,height:1.2963*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://lydia-app.com/fr/')}} style={{width:width,height:1.574*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://mabanque.bnpparibas/')}} style={{width:width,height:0.8333*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </TouchableOpacity>
                  
                    <View activeOpacity={0.8} style={{width:width,height:0.648*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/centrale-7.png')}/>
                    </View>
                   
                    
                </ScrollView>
            </View>
      </View>
    )
  }
}

export default PartnersScreen;