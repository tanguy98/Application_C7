//IMPORTS

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { Icon} from 'native-base';
import {SearchBar} from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader';


//CONSTANTS :
const listeStaffeurs = [
  {
    "staffeur": 'Tancrède de Guigné',
    "icon": 'person',
    "idStaffeur" : '1'
  },
  {
    "staffeur": 'Saad Chtouki',
    "icon": 'person',
    "idStaffeur" : '2'
  },
  {
    "staffeur": 'Corentin Delloye',
    "icon": 'person',
    "idStaffeur" : '3'
  },
  {
    "staffeur": 'Pascal Raillé',
    "icon": 'person',
    "idStaffeur" : '4'
  },
  {
    "staffeur": 'Tanguy Houette',
    "icon": 'person',
    "idStaffeur" : '5'
  },
  {
    "staffeur": 'François Pinard',
    "icon": 'person',
    "idStaffeur" : '6'
  },
  {
    "staffeur": 'Antoine Beauvois',
    "icon": 'person',
    "idStaffeur" : '7'
  },
  {
    "staffeur": 'Aude Gadenne',
    "icon": 'person',
    "idStaffeur" : '8'
  },
  {
    "staffeur": 'Adrein Mitard',
    "icon": 'person',
    "idStaffeur" : '9'
  },
  {
    "staffeur": 'Romain Merle',
    "icon": 'person',
    "idStaffeur" : '10'
  },
  {
    "staffeur": 'Anaïs Chossegros',
    "icon": 'person',
    "idStaffeur" : '11'
  },
  {
    "staffeur": 'Marc Grasser',
    "icon": 'person',
    "idStaffeur" : '12'
  },
  {
    "staffeur": 'Kawtar Rifi',
    "icon": 'person',
    "idStaffeur" : '13'
  },
  {
    "staffeur": 'Matthieu de Cibeins',
    "icon": 'person',
    "idStaffeur" : '14'
  }
]

listeStaffeurs.sort(function(a, b) {
  var textA = a.staffeur.toUpperCase();
  var textB = b.staffeur.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});


//COMPONENT :

class StaffScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      valueSearch:'',
      listeStaffeurs:listeStaffeurs,
      listeStaffeursRecherches:[],
      onResearch:false,
      recherchesRecentes:['','','']
    };
    this.listeStaffeurs=listeStaffeurs
  }

  triDonnes(){
    var text=this.state.valueSearch.toUpperCase()
    var tableau = this.state.listeStaffeurs.filter(function(staffeur){
      staffeurNom=staffeur.staffeur.toUpperCase()
      return((staffeurNom.indexOf(text)!=-1)&&(staffeurNom!='NOM'))})
    this.setState({listeStaffeursRecherches:tableau})
  }

  changeText(text){
    if (text.length==0){
      this.setState({onResearch:false})
    }
    else{
      this.setState({valueSearch:text,onResearch:true},()=>this.triDonnes())
    }
  }

  pressStaffeur(staffeur,idStaffeur){

    this.props.navigation.navigate("PdfScreen", {
      title:'Staffeur X',
      uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing',
    });

  }

  displayStaffeurs(){

    if (this.state.onResearch){
      return(
        <View>
            <FlatList
              data={this.state.listeStaffeursRecherches}
              keyExtractor={(item)=>item.staffeur.toString()}
              renderItem={({item})=>
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressStaffeur(item.staffeur,item.idStaffeur)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.staffeur}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name='person'/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            />
        </View>

      )
    }

    if ((!this.state.onResearch)&&!((this.state.recherchesRecentes[0].length>0)||(this.state.recherchesRecentes[1].length>0)||(this.state.recherchesRecentes[2].length>0))){
      return(
        <View>
            <FlatList
              data={listeStaffeurs}
              keyExtractor={(item)=>item.staffeur.toString()}
              renderItem={({item})=>
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressStaffeur(item.staffeur,item.idStaffeur)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.staffeur}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name='person'/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            />
        </View>

      )
    }
  }


  render() {
    const {search} = this.state;
    return (
      <View style={{flex:1}}>
        
        <View style={{flex:1}}>
          <CustomHeader title="Espace Staffeurs" isHome={true} navigation={this.props.navigation}/>
        </View>

        <View style={{flex:10}} >

          <SearchBar
            placeholder='Rechercher'
            onClearText={()=>
          this.setState({onResearch:false,valueSearch:''})}
            onChangeText={(text)=>this.changeText(text)}
            value={this.state.valueSearch}
            lightTheme = {true}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: '#e5e5e5'}}/>

          <ScrollView>
          {this.displayStaffeurs()}
          </ScrollView>

        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  teamScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  pdf: {
    flex:1
  },
  titleView: {
    height:50,
    backgroundColor:'darkgreen',
    justifyContent:'center',
    alignItems:'center',
  },
  titleText: {
    fontSize: 35,
    color:'white'
  }
});

//EXPORTS :
export default StaffScreen;