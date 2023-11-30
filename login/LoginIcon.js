import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import LogoGoogle from '../assets/logoGoogle.png'

export default ({ navigation, route, onPress }) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Image source={LogoGoogle} style={styles.logoGoogle} />
      <Text style={styles.textGoogle}>Entrar com o Google</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 60,
    width: 220,
    backgroundColor: '#193073',
    borderRadius: 25,
    padding: 10,
    elevation: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logoGoogle: {
    width: 30,
    height: 30,
  },

  textGoogle: {
    color: 'white',
    fontWeight: 'bold',
  },
})
