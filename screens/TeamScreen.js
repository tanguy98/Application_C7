// IPMORTS
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import { ListItem } from 'react-native-elements';

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


  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <CustomHeader title="Teams" isHome={true} navigation={this.props.navigation} />
        </View>

        <View style={{flex:11}}>
          <ScrollView>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Femmes</Text>
            </View>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => this.props.navigation.navigate("PdfScreen")}
                />
              ))
            }
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Hommes</Text>
            </View>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => this.props.navigation.navigate("PdfScreen")}
                />
              ))
            }
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

// EXPORT :
export default TeamScreen;
