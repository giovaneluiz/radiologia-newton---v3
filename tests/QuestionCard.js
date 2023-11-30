import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default ({enunciado, A, B, C, D, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.conteudo}>
          <Text style={styles.enunciado}>{enunciado}</Text>
          <Text style={styles.alternativa}>A) {A}</Text>
          <Text style={styles.alternativa}>B) {B}</Text>
          <Text style={styles.alternativa}>C) {C}</Text>
          <Text style={styles.alternativa}>D) {D}</Text>
        </View>
        <View style={styles.containerExcluir}>
          <TouchableOpacity onPress={onDelete}>
            <FontAwesome name="remove" size={24} color="red" style={styles.excluir} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    elevation: 10,
    backgroundColor: '#27A4F2',
    borderRadius: 15,
    marginBottom: 10,
  }, 

  border:{
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    flexDirection: 'row'
  },

  conteudo: {
    flex: 1, 
    padding: 20,
  }, 

  enunciado: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  alternativa: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'justify'
  },
  
  excluir:{
    margin: 10
  }
})