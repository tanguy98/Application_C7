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
import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader';

const list = [
  {
    title: 'Tancrède de Guigné',
    icon: 'person'
  },
  {
    title: 'Saad Chtouki',
    icon: 'person'
  },
  {
    title: 'Corentin Delloye',
    icon: 'person'
  },
  {
    title: 'Pascal Raillé',
    icon: 'person'
  },
  {
    title: 'Tanguy Houette',
    icon: 'person'
  },
]

class StaffScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={{flex:1}} >
        <ScrollView>

        <CustomHeader title="Staffeurs" isHome={true} navigation={this.props.navigation}/>
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
