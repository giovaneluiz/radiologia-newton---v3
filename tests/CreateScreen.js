import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import * as QuestionApi from './QuestionsApi'

export default ({navigation, route}) => {
  const [enunciado, setEnunciado] = useState('')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [d, setD] = useState('')
  const [resposta, setResposta] = useState('')

  const salvar = async () => {
    const questao = {enunciado, A: a, B: b, C: c, D: d, resposta}

    const novaQuestao = await QuestionApi.insert(questao)
    
    alert('Questão inserida com sucesso!')
    await route.params.buscarQuestoes()
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastre uma nova questão</Text>
      <View style={styles.inputs}>
        <TextInput 
          mode='outlined'
          label='Enunciado'
          value={enunciado}
          style={styles.input}
          onChangeText={(text) => setEnunciado(text)}
        />
        <TextInput 
          mode='outlined'
          label='Alternativa A'
          value={a}
          style={styles.input}
          onChangeText={(text) => setA(text)}
        />
        <TextInput 
          mode='outlined'
          label='Alternativa B'
          value={b}
          style={styles.input}
          onChangeText={(text) => setB(text)}
        />
        <TextInput 
          mode='outlined'
          label='Alternativa C'
          value={c}
          style={styles.input}
          onChangeText={(text) => setC(text)}
        />
        <TextInput 
          mode='outlined'
          label='Alternativa D'
          value={d}
          style={styles.input}
          onChangeText={(text) => setD(text)}
        />
        <TextInput 
          mode='outlined'
          label='Resposta Correta'
          value={resposta}
          style={styles.input}
          onChangeText={(text) => setResposta(text)}
        />
      </View>
      <View style={styles.botoes}>
        <Button
          mode="contained"
          buttonColor="#193073"
          style={styles.botaoSalvar}
          onPress={salvar}>
          Salvar
        </Button>
        <Button
          mode="contained"
          buttonColor="#193073"
          style={styles.botaoCancelar}
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
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

  inputs:{
    marginBottom: 40,
  },

  botoes: {
    alignItems: 'center'
  },
  botaoSalvar: {
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },
  
  botaoCancelar:{
    marginTop: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  }
})