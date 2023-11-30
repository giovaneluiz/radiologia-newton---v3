import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';


export default ({ navigation, route }) => {

  const slides = [
  {
    id: '1',
    title: 'A Empresa',
    image: require('../assets/logo_odonto.png'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum nisl. Fusce aliquet orci sit amet enim pretium hendrerit at et ligula. Etiam non erat ex. Proin et neque nec est varius dignissim sed sed felis.',
  },
  {
    id: '2',
    title: 'A Equipe',
    image: require('../assets/logo_odonto.png'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum nisl. Fusce aliquet orci sit amet enim pretium hendrerit at et ligula. Etiam non erat ex. Proin et neque nec est varius dignissim sed sed felis.',
  },
  {
    id: '3',
    title: 'Entre em Contato',
    image: require('../assets/logo_odonto.png'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum nisl. Fusce aliquet orci sit amet enim pretium hendrerit at et ligula. Etiam non erat ex. Proin et neque nec est varius dignissim sed sed felis.',
    component: (
      <Button
        mode="contained"
        buttonColor="#193073"
        style={{
          height: 50,
          width: 120,
          marginTop: 30,
          justifyContent: 'center',
          elevation: 10,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('contato')}>
        Contato
      </Button>
    ),
  },
];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Image style={styles.slideImage} source={item.image} />
        <Text style={styles.slideText}>{item.text}</Text>
        {item.component}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        activeDotStyle={{
          backgroundColor: '#27A4F2',
          width: 20,
        }}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#193073',
    alignSelf: 'center',
    marginBottom: 20,
  },

  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },

  slideTitle: {
    fontSize: 25,
    color: '#193073',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },

  slideImage: {
    width: 200,
    height: 200,
  },

  slideText: {
    fontSize: 18,
    color: '#193073',
    textAlign: 'center',
  },
});
