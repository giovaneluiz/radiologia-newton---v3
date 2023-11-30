import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './login/LoginScreen';
import SignupScreen from './signup/SignupScreen';
import HomeScreen from './home/HomeScreen';
import MenuScreen from './menus/MenusScreen';
import XRayScreen from './xray/XRayScreen';
import TestScreen from './tests/TestScreen';
import ProfileScreen from './profile/ProfileScreen';
import AboutUsScreen from './aboutUs/AboutUsScreen';
import ContactScreen from './contact/ContactScreen';
import TermsOfUseScreen from './termsOfUse/TermsOfUseScreen'
import CreateScreen from './tests/CreateScreen'
import LogoutScreen from './login/LogoutScreen';
import LoginGoogleScreen from './login/LoginGoogleScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#27A4F2',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Drawer.Screen name="home" component={HomeScreen} options={homeOptions} />
      <Drawer.Screen name="perfil" component={ProfileScreen} options={profileOptions} />
      <Drawer.Screen name="sobre" component={AboutUsScreen} options={aboutUsOptions} />
      <Drawer.Screen name="contato" component={ContactScreen} options={contactOptions} />
      <Drawer.Screen name="testes" component={TestScreen} options={testOptions} />
      <Drawer.Screen name="Sair" component={LogoutScreen} options={logoutOptions} />
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#27A4F2',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={loginOptions}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={signupOptions}
        />
        <Stack.Screen
          name="termosDeUso"
          component={TermsOfUseScreen}
          options={termsOfUseOptions}
        />
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={mainOptions}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={menuOptions}
        />
        <Stack.Screen
          name="xray"
          component={XRayScreen}
          options={xRayOptions}
        />
        <Stack.Screen
          name="contato"
          component={ContactScreen}
          options={contactOptions}
        />
        <Stack.Screen
          name="criarQuestao"
          component={CreateScreen}
          options={createScreenOptions}
        />
        <Stack.Screen
          name='loginGoogle'
          component={LoginGoogleScreen}
          options={loginGoogleOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const loginOptions = {
  headerShown: false,
};

const loginGoogleOptions = {
  headerShown: false,
}

const mainOptions = {
  headerShown: false,
};

const signupOptions = {
  headerShown: false,
};

const termsOfUseOptions = {
  title: 'Termos de Uso',
};

const homeOptions = {
  title: 'Home',
};

const profileOptions = {
  title: 'Perfil',
};

const testOptions = {
  title: 'Testes',
};

const aboutUsOptions = {
  title: 'Sobre nós',
};

const contactOptions = {
  title: 'Contato',
};

const menuOptions = {
  title: 'Anatomia',
};

const xRayOptions = {
  title: 'Raio X',
};

const createScreenOptions = {
  title: 'Nova Questão'
}

const logoutOptions = {
  title: 'Sair'
};