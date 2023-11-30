import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import * as QuestionsApi from './QuestionsApi';
import QuestionCard from './QuestionCard';

export default ({ navigation, router }) => {
  const [questoes, setQuestoes] = useState([]);

  const buscarQuestoes = async () => {
    try {
      console.log('Executou');
      const questoes = await QuestionsApi.findAll();
      setQuestoes(questoes);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    buscarQuestoes();
  }, []);

  const removerQuestao = async (id) => {
    await QuestionsApi.removeById(id);

    setQuestoes(questoes.filter((q) => q.id != id));

    alert('Questão excluida com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questões</Text>
      <FlatList
        data={questoes}
        renderItem={({ item }) => (
          <QuestionCard {...item} onDelete={() => removerQuestao(item.id)} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.botoes}>
        <Button
          mode="contained"
          buttonColor="#193073"
          style={styles.botaoAtualizar}
          onPress={buscarQuestoes}>
          Atualizar
        </Button>
        <Button
          mode="contained"
          buttonColor="#193073"
          style={styles.botaoCriarQuestao}
          onPress={() => navigation.navigate('criarQuestao', { buscarQuestoes })}>
          Nova Questão
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

  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#193073',
  },

  botoes: {
    alignItems: 'center'
  },

  botaoAtualizar: {
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },
  
  botaoCriarQuestao:{
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  }
});
