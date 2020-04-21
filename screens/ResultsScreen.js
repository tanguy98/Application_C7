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

  render() {
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}}>
          <CustomHeader title="Results" isHome={true} navigation={this.props.navigation} />
        </View>

        <View style={{flex:10}}>
          <ScrollView >
            <View style={styles.titleView2}>
              <Text style={styles.titleText}>Matchs</Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Femmes</Text>
            </View>
            <Match id1 = {1}
                  id2 = {2}
                  score1 = {18}
                  score2 = {12}
            />
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Hommes</Text>
            </View>
            <Match id1 = {1}
                  id2 = {2}
                  score1 = {18}
                  score2 = {12}
            />
          </ScrollView>
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
    backgroundColor:'lightgreen',
    justifyContent:'center',
    alignItems:'center',
  },
  titleView2: {
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

//EXPORTS
export default ResultsScreen;
