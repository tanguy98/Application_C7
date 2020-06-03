// IMPORTS :
import React from 'react';
import {Text, View, Image, Animated, Dimensions} from 'react-native'
import { MatchData } from "../assets/data/MatchData.js"
import { Equipe } from "../assets/data/EquipeData.js"
//Rajouter les liaisons avec la base de donnée

//CONSTANTS :
const {width} = Dimensions.get('window')

//COMPONENTS :

class Match extends React.Component {

  imageEquipe(id){
        switch (id){
            case 1:
                return(require('../assets/images/logo1.png'))
                break;
            case 2:
                return(require('../assets/images/logo2.jpg'))
                break;

            default:
                return(require('../assets/images/icon.png'))

        }
    }

nomEquipe(id){
        switch (id){
            case 1:
                return("Stade Montois")
                break;
            case 2:
            return("Stade Toulousain")
            break;

            default:
            return("CRC")

        }
    }

render () {

      return (
<View>
    <View style={{height:50,flexDirection:'row',margin:5,borderWidth:1,borderRadius:10,borderColor:'#dedede'}}>
            <View style={{flex:5,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Image source={this.imageEquipe(this.props.id1)} style={{height:30,width:30,marginRight:5,marginLeft:10,resizeMode:'contain'}}/>
                <Text style={{fontWeight:'bold',fontSize:11,flex:1,flexWrap:'wrap',textAlign:'center'}}>{this.nomEquipe(this.props.id1)}</Text>

            </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>{this.props.score1} - {this.props.score2}</Text>
            </View>
            <View style={{flex:5,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:11,flex:1,flexWrap:'wrap',textAlign:'center'}}>{this.nomEquipe(this.props.id2)}</Text>
                <Image source={this.imageEquipe(this.props.id2)} style={{height:30,width:30,marginLeft:5,marginRight:10,resizeMode:'contain'}}/>
            </View>
    </View>
</View>


        )
    }
}

//EXPORTS :
export default Match;