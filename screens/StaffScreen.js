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
import { WebBrowser } from 'expo';
import { ListItem } from 'react-native-elements'
import {SearchBar} from 'react-native-elements'


import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader';

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
]

class StaffScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  constructor(props) {
        super(props)
        this.state={
          valueSearch:'',
          listeStaffeurs:listeStaffeurs,
          listeStaffeursRecherches:[],
          onResearch:false,
          recherchesRecentes:['','','']
        }
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

      this.props.navigation.navigate("PdfScreen")


    }

    displayStaffeurs(){

      if (this.state.onResearch){
        return(
          <View style={{flex:1}}>
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
          <View style={{flex:1}}>
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


/*      <View style={{flex:1}} >
        <ScrollView>
        <CustomHeader title="Staffeurs" isHome={true} navigation={this.props.navigation}/>
        <SearchBar
        platform="ios"
        cancelButtonTitle="Cancel"
        placeholder='Rechercher'
        onClearText={()=>
      this.setState({onResearch:false,valueSearch:''})}
        onChangeText={(text)=>this.changeText(text)}
        value={this.state.valueSearch}/>
            {
              listeStaffeurs.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.staffeur}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => this.props.navigation.navigate("PdfScreen")}
                />
              ))
            }
        </ScrollView>

      </View>*/
      <View style={{flex:1}} >
        <SearchBar
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder='Rechercher'
          onClearText={()=>
        this.setState({onResearch:false,valueSearch:''})}
          onChangeText={(text)=>this.changeText(text)}
          value={this.state.valueSearch}/>
        <ScrollView>

        {this.displayStaffeurs()}
        </ScrollView>
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

export default StaffScreen;
