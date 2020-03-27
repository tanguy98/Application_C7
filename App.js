import 'react-native-gesture-handler'; // nothing above this import

//IMPORTS

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './navigation/AppNavigator';


// COMPONENT
class App extends React.Component{

  constructor(props) {
    super(props);
    //State initializing
    this.state = {
      isLoadingComplete: false,
    };

    // Constants
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });

    //Binding des fonctions
    this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
    this.handleLoadingError = this.handleLoadingError.bind(this);
    this.handleFinishLoading = this.handleFinishLoading.bind(this);
  }

  async loadResourcesAsync() {
    await Promise.all([

      Asset.loadAsync([
        require('./assets/images/icon.png'),
      ]),

      Font.loadAsync({
        // This is the font that we are using for our tab bar
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      }),
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }
  
  handleFinishLoading() {
    this.setState({isLoadingComplete: true});
  }
  
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <AppNavigator />
      );
    }
  }
}

//EXPORT
export default App;
