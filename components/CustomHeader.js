//IMPORTS :

import React from 'react';
import {Image,StyleSheet, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Constants from 'expo-constants';
import {StatusBar} from 'react-native';

import icon from '../assets/images/icon.png';

//COMPONENTS :

class CustomHeader extends React.Component {

  render() {

    //description des props:
    // le titre : nom de l'onglet - this.props.title
    // un booléen isHome qui indique si on est dans la page d'acueil de l'onglet (true) ou bien si l'on est plus profond dans le stack navigator - this.props.isHome
    // this.props.navigation

    //StatusBar.setBarStyle("light-content");
    //StatusBar.setTranslucent(true);
  
    return (

        <Container>
            {/*<View style={{height: Constants.statusBarHeight}} />*/}
            <Header style={{ height: 65, backgroundColor:'#549E5E'}} androidStatusBarColor='#549E5E' >
                <Left>
                    {
                        this.props.isHome?
                        <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>:
                        <Button transparent onPress={()=> this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    }
                </Left>

                <Body>
                    <Title>{this.props.title}</Title>
                </Body>

                <Right>
                    <Image source={icon} style={{height:40, width:40, resizeMode: 'contain', tintColor: 'white'}} />
                </Right>

            </Header>
        </Container>
    );
  }
}

export default CustomHeader;