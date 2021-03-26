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
} from 'react-native';
import { WebBrowser } from 'expo';
import { ListItem } from 'react-native-elements'
import Match from '../components/Match';
import CustomHeader from '../components/CustomHeader';
import { MonoText } from '../components/StyledText';

// CONSTANTS :


//COMPONENT :

class ResultsScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={masculin:true}
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
        return({flex:1,backgroundColor:'white',marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
      else{
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorTab(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
    }
    else{
      if (this.state.masculin){
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorTab(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
      else{
        return({flex:1,backgroundColor:'white',marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
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
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
        </ScrollView>
      )
    }
    else{
      return(
        <ScrollView >
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />

        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}}>
          <CustomHeader title="Match Results" isHome={true} navigation={this.props.navigation} />
        </View>
        <View style={{flex:1, flexDirection:'row',height:50, margin : 5}}>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin1()} style={this.styleBox('masculin')}>
            <Text style={this.styleText('masculin')}>MASCULIN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin2()} style={this.styleBox('feminin')} >
            <Text style={this.styleText('feminin')}>FEMININ</Text>
          </TouchableOpacity>
          </View>
        </View>




        <View style={{flex:10}}>
          {this.displayVue()}
        </View>

      </View>

    );
  }
}

// Styles :
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
    height:40,
    backgroundColor:'#6ce17b',
    justifyContent:'center',

    alignItems:'center',
  },
  titleText: {
    fontSize: 35,
    marginVertical: 100,
    color:'white'
  }
});

//EXPORTS
export default ResultsScreen;
