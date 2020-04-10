//IMPORTS :

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import { List, ListItem } from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';
import centrale7 from '../assets/images/centrale-7.png';
import Constants from 'expo-constants';

import {DrawerItems} from 'react-navigation-drawer';


//COMPONENTS :

class DrawerComponent extends React.Component {

    render() {


        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor: "#549E5E", height: Constants.statusBarHeight}} />
                <View style={{height:65,backgroundColor:'#549e5e', justifyContent:'flex-end', alignItems:'center'}}>
                    <Image source={centrale7} style={{height:50,width:200,resizeMode: 'contain',marginBottom:10,tintColor: 'white'}}/>
                </View>
                <ScrollView>
                    <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...this.props} />
                    </SafeAreaView>
                </ScrollView>
                <View style={{ justifyContent:'flex-end', alignItems:'center', marginBottom:10}}>
                    <Text style={{color:'#cdcdcd',}}>
                        © Pôle Info - Centrale7
                    </Text>
                </View>
            </View>

        );
    }
}

export default DrawerComponent;