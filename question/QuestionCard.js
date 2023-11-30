import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default ({enunciado, A, B, C, D}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.enunciado}>{enunciado}</Text>
      <Text style={styles.alternativa}>A) {A}</Text>
      <Text style={styles.alternativa}>B) {B}</Text>
      <Text style={styles.alternativa}>C) {C}</Text>
      <Text style={styles.alternativa}>D) {D}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    
    backgroundColor: '#d5d5d5',
    borderRadius: 15,
    marginBottom: 10
  },  
  enunciado: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 5
  },
  alternativa: {
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'justify'
  }
})