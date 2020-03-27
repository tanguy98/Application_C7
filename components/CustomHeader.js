//IMPORTS :

import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import icon from '../assets/images/icon.png';

//COMPONENTS :

class CustomHeader extends React.Component {

  render() {

    //description des props:
    // le titre : nom de l'onglet - this.props.title
    // un booléen isHome qui indique si on est dans la page d'acueil de l'onglet (true) ou bien si l'on est plus profond dans le stack navigator - this.props.isHome
    // this.props.navigation

    return (

        <Container >
            <Header style={{ height: 50+ StatusBar.currentHeight, backgroundColor:'#549e5e', }} >
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

        {/*<View style={{ height: 50+ StatusBar.currentHeight, backgroundColor:'#549e5e'}}>
            <View>
                {
                    this.props.isHome?
                    <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>:
                    <Button transparent onPress={()=> this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                }
            </View>
            <View>
                <Title>{this.props.title}</Title>
            </View>
            <View>
                <Image source={icon} style={{height:40, resizeMode: 'contain', tintColor: 'white'}} />
            </View>
        </View>*/}