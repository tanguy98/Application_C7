import React from 'react'
import {Text, View, WebView, StyleSheet, ActivityIndicator } from 'react-native'

export default class PdfScreen extends React.Component {

  constructor(props) {
        super(props)
    }

  render () {
    return(
      <WebView source={{uri: 'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing'}} />
    )
  }
}
