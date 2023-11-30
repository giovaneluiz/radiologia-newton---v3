import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import Logo from '../assets/logo_odonto.png';
import LogoGoogle from './LoginIcon.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as AuthApi from './AuthApi';
import * as UserRepository from './UserRepository';

export default ({ navigation, route }) => {
  const [email, setEmail] = useState('lucas@email.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    const user = await AuthApi.login(email, password);
    if (user) {
      await UserRepository.save(user);
      navigation.navigate('main', { user });
    } else {
      alert('Usuário ou senha inválido');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.email}
        placeholder="E-mail"
        placeholderTextColor="#193073"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
          style={styles.senha}
          placeholder="Senha"
          placeholderTextColor="#193073"
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#193073"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <Button
        mode="contained"
        buttonColor="#193073"
        textColor="white"
        style={styles.botaoEntrar}
        onPress={login}>
        ENTRAR
      </Button>
      <Text style={styles.entradas}>──────── Ou continue com ────────</Text>
      <View style={styles.entradaGoogle}>
        <LogoGoogle onPress={()=> navigation.navigate('loginGoogle')}></LogoGoogle>
      </View>
      <View style={styles.cadastro}>
        <Text style={styles.novoMembro}> Novo Membro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.criarConta}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#27A4F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 60,
    width: 170,
    height: 170,
  },

  email: {
    marginBottom: 10,
    width: 300,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
  },

  passwordContainer: {
    width: 300,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  senha: {
    width: 266,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    fontSize: 14,
  },

  icon: {
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },

  botaoEntrar: {
    marginTop: 10,
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },

  entradas: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 30,
    marginBottom: 25,
    color: '#193073',
  },

  entradaGoogle: {
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#193073',
  },

  cadastro: {
    flexDirection: 'row',
  },

  novoMembro: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#193073',
    alignSelf: 'center',
    marginTop: 35,
  },

  criarConta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EBF7FD',
    alignSelf: 'center',
    marginTop: 35,
    marginLeft: 5,
  },
});
