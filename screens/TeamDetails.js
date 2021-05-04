import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View,FlatList,
} from 'react-native';
import { Icon} from 'native-base';
import {SearchBar, ListItem, Avatar} from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import TeamDetailsHeader from '../components/TeamDetailsHeader';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.jpg';

var cyril=require('../assets/images/PlayerPicture/Cyrille.jpg')
var varax=require('../assets/images/PlayerPicture/Varax.jpg')
var boquillon=require('../assets/images/PlayerPicture/Boquillon.jpeg')
var vianney=require('../assets/images/PlayerPicture/Vianney.jpeg')
var youss=require('../assets/images/PlayerPicture/Youss.jpeg')

const l=[
  {
  nom:'Cyril Douady',
  id:'1',
  icon:cyril,
  age:'20',
  poste:"Avant",
  },
  {
  nom:'Thibault De Varax',
  id:'2',
  icon:varax,
  age:'22',
  poste:"Arrière",
  },
  {
  nom:'Clément Boquillon',
  id:'3',
  icon:boquillon,
  age:'21',
  poste:"Demi de mêlée",
  },
  {
  nom:'Vianney Colliot',
  id:'4',
  icon:vianney,
  age:'21',
  poste:"Deuxième ligne",
  },
  {
  nom:'Youssef Irhboula',
  id:'5',
  icon:youss,
  age:'21',
  poste:"Ailiers",
  },
]

class TeamDetails extends React.Component {

  displayPlayer(){
    return(
      <ScrollView >
          {
            l.map((item, i) => (

              <ListItem key={i} title={item.nom} bottomDivider topDivider>
                <Avatar source={cyril}/>
              </ListItem>
            ))

          }


      </ScrollView>

    )
  }



  render() {
    return (
      <View style={{flex:1}}>
        <TeamDetailsHeader title="Stade Montois" isHome={true} navigation={this.props.navigation} logo={logo1}/>

        <ScrollView>
          {this.displayPlayer()}
        </ScrollView>
      </View>
    )
  }
}



export default TeamDetails
