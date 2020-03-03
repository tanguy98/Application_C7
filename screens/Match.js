import React from 'react';
import {Text, View, Image, Animated, Dimensions} from 'react-native'

//Rajouter les liaisons avec la base de donnée

const {width} = Dimensions.get('window')

export default class Match extends React.Component {

render () {

      return (
<View>
    <View style={{height:50,flexDirection:'row',margin:5,borderWidth:1,borderRadius:10,borderColor:'#dedede'}}>
            <View style={{flex:5,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Image source={"Stade-Toulousain-logo.jpg"} style={{height:30,width:30,marginRight:5,marginLeft:10,resizeMode:'contain'}}/>
                <Text style={{fontWeight:'bold',fontSize:11,flex:1,flexWrap:'wrap',textAlign:'center'}}>{"Equipe 1"}</Text>

            </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>{"15"} - {"18"}</Text>
            </View>
            <View style={{flex:5,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:11,flex:1,flexWrap:'wrap',textAlign:'center'}}>{"Equipe 2"}</Text>
                <Image source={"Stade-Toulousain-logo.jpg"} style={{height:30,width:30,marginLeft:5,marginRight:10,resizeMode:'contain'}}/>
            </View>
    </View>
</View>


        )
    }
}
