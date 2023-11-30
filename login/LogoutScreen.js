import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'
import * as UserRepository from './UserRepository'

export default ({ navigation, route }) => {
  const handleLogout = async () => {
    await UserRepository.remove();
    navigation.replace('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deseja continuar?</Text>
      <View style={styles.botoes}>
        <Button
          mode="contained"
          buttonColor="#193073"
          style={styles.botaoSair}
          onPress={handleLogout}>
          Sair
        </Button>
        <Button
          mode="contained"
          buttonColor='#27A4F2'
          style={styles.botaoCancelar}
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 60,
    alignSelf: 'center',
    color: '#193073',
  },

  botoes: {
    alignItems: 'center'
  },
  botaoSair: {
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },

  botaoCancelar: {
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  }
})