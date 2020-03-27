//IMPORTS :

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import { List, ListItem } from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';
import iconC7 from '../assets/images/icon.png';

//COMPONENTS :

class DrawerComponent extends React.Component {

  render() {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height:150, alignItems:'center', justifyContent: 'center'}}>
                <Image source={iconC7} style={{height:120, width:120, borderRadius:60}} />
            </View>
            <ScrollView>
                <List>
                    <ListItem onPress={()=>this.props.navigation.navigate('Contacts')}>
                        <IconEntypo name="old-phone" size={30} />
                        <Text>Contacts</Text>
                    </ListItem>
                    <ListItem onPress={()=>this.props.navigation.navigate('Teams')}>
                        <IconEntypo name="slideshare" size={30} />
                        <Text>Teams</Text>
                    </ListItem>

                </List>
            </ScrollView>
        </SafeAreaView>
    );
  }
}

export default DrawerComponent;