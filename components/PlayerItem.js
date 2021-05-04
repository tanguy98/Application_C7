import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class PlayerItem extends React.Component {
  render() {
    const joueur=this.props.joueur
   return (
     <View style={styles.main_container}>
       <Image
        style={styles.image}
        source={{uri: joueur.icon}}
       />
       <View style={styles.content_container}>

        <View style={styles.header_container}
          <Text>{joueur.nom}</Text>
          <Image style={styles.drapeau} source={{uri:"dreapeau_id"}}
        </View>
        <Text>{joueur.age}</Text>
        <Text>{joueur.poste}</Text>
       </View>

     </View>
   )
 }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
   flexDirection: 'row'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container:{
    flex: 3,
    flexDirection: 'row'
  },
  drapeau:{
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: 'blue'
  },
  image:{
    width: 120,
    height: 180,
    margin: 5
  }
})
export default PlayerItem
