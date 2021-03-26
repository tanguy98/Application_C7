// IPMORTS
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase'
import 'firebase/firestore';

import CustomHeader from '../components/CustomHeader';

// CONSTANTS :

const list = [
  {
    title: 'Equipe 1',
    icon: 'add-circle-outline'
  },
  {
    title: 'Equipe 2',
    icon: 'add-circle-outline'
  },
]

// COMPONENT :

class TeamScreen extends React.Component {

  constructor(props){
    super(props)
    this.state=({
      masculin:true,donnees:[],teamsF:[],loading:true
      })
  }

// Chargement des données
  componentDidMount(){
    this._loadData()
  }

  
  _loadData(){
    this.setState({donnees:[]},()=>{
        var that=this
        
        var db = firebase.firestore();
    
        var docRef = db.collection("Equipes").doc("Femmes").collection("Femmes")
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({donnees:that.state.donnees.concat(match)})
                
                
            });
        })
        .then(()=>this.loadTeams())
        .catch(function(error) {
            console.log("Error getting document:", error);
        })
        .then(()=>this.setState({loading:false}))
        
    }
    )
  }

  loadTeams(){
        
    var listeTeams=this.state.donnees
    longueur=listeTeams.length
    
    var teamsF=[]
    
    for (i=0;i<longueur;i++){
        
        var team=listeTeams[i]
        var teamName={name : team.Name}
         
        teamsF.push(teamName)
    }
    
    this.setState({teamsF:teamsF})
  }


  colorTab(){
    return('#549E5E')
  }
  colorBord(){
    return('#202421')
  }

  styleBox(genre){
    if (genre==='masculin'){
      if (this.state.masculin){
        return({flex:1,backgroundColor:'white',marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center'})
      }
      else{
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center'})
      }
    }
    else{
      if (this.state.masculin){
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center'})
      }
      else{
        return({flex:1,backgroundColor:'white',marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center'})
      }
    }
  }

  styleText(genre){
    if (genre==='masculin'){
      if(this.state.masculin){
        return({color:this.colorTab(), fontWeight:'bold'})
      }
      else{
      return({color:'white', fontWeight:'bold'})
      }
    }
    else{
      if (this.state.masculin){
        return({color:'white', fontWeight:'bold'})
      }
      else{
        return({color:this.colorTab(), fontWeight:'bold'})
      }
    }
  }

  changeMasculin1(){
    this.setState({masculin:true})
  }
  changeMasculin2(){
    this.setState({masculin:false})
  }
  displayVue(){
    if (this.state.masculin){
      return(
        <ScrollView >
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => this.props.navigation.navigate("PdfScreen",  {title:'Team Info', uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing'})}
                />
              ))
            }
        </ScrollView>
      )
    }
    else{
      return(
        <ScrollView >
            {
              this.state.teamsF.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                  leftIcon={{ name: 'add-circle-outline' }}
                  bottomDivider
                  chevron
                  onPress={() => this.props.navigation.navigate("PdfScreen", {title:'Team Info', uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing'})}
                />
              ))
            }

        </ScrollView>
      )
    }
  }


  render() {
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}}>
          <CustomHeader title="Teams" isHome={true} navigation={this.props.navigation} />
        </View>

        <View style={{flex:1, flexDirection:'row',height:50,}}>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin1()} style={this.styleBox('masculin')}>
            <Text style={this.styleText('masculin')}>MEN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin2()} style={this.styleBox('feminin')} >
            <Text style={this.styleText('feminin')}>WOMEN</Text>
          </TouchableOpacity>
          </View>
        </View>


        <View style={{flex:11}}>
          {this.displayVue()}
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

// EXPORT :
export default TeamScreen;
