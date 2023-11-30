import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import Logo from '../assets/logo_odonto.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as AuthApi from '../login/AuthApi';

export default ({ navigation, route }) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [ra, setRa] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSelected, setSelection] = useState(false);


  const signup = async () => {
    const user = await AuthApi.signup(
      name,
      email,
      ra,
      password,
      passwordConfirmation
    );

    if (user && isSelected) {
      navigation.navigate('main', { user });
    } else {
      alert('Confira todos os dados informados e tente novamente!');
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
      <Text style={styles.text}>Digite seus dados</Text>
      <View style={styles.inputs}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#193073"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#193073"
        />
        <TextInput
          value={ra}
          onChangeText={(text) => setRa(text)}
          style={styles.input}
          placeholder="RA"
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
        <View style={styles.passwordContainer}>
          <TextInput
            value={passwordConfirmation}
            onChangeText={(text) => setPasswordConfirmation(text)}
            secureTextEntry={!showPassword}
            style={styles.senha}
            placeholder="Confirmar Senha"
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
        <View style={styles.checkboxContainer}>
          <CheckBox
            center
            checked={isSelected}
            uncheckedColor="#193073"
            checkedColor="#193073"
            onPress={() => setSelection(!isSelected)}
            containerStyle={{
              backgroundColor: '#27A4F2',
              alignSelf: 'center',
            }}
            style={styles.checkbox}
          />
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => navigation.navigate('termosDeUso')}>
            <Text style={styles.checkboxText}>
              Li e aceito Termos de Uso do aplicativo
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained"
          buttonColor="#193073"
          textColor="white"
          style={styles.botaoFinalizar}
          onPress={signup}>
          FINALIZAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27A4F2',
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 110,
    height: 110,
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#193073',
  },

  inputs: {
    alignItems: 'center',
  },

  input: {
    marginBottom: 10,
    width: 300,
    height: 55,
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

  checkboxContainer: {
    width: 330,
    flexDirection: 'row',
  },

  checkboxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginTop: 16,
  },

  botaoFinalizar: {
    marginTop: 15,
    width: 300,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});
