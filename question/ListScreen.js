import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'

import * as QuestionsApi from './QuestionsApi'
import QuestionCard from './QuestionCard'

export default () => {
  const [questoes, setQuestoes] = useState([])

  const buscarQuestoes = async () => {
    try {
      const questoes = await QuestionsApi.findAll()
      setQuestoes(questoes)
    } catch(err) {
      alert(err.message)
    }
  }

  useEffect (() => {
    buscarQuestoes()
  }, [])

  return (
    <View style={styles.view}>
      <FlatList 
        data={questoes}
        renderItem={({item}) => <QuestionCard {...item} />}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={buscarQuestoes}>Atualizar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      padding: 10
  }
})
