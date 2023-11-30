import AsyncStorage from '@react-native-async-storage/async-storage'

const save = async (data) => {
  const jsonValue = JSON.stringify(data.user)
  await AsyncStorage.setItem('@user', jsonValue)  
}

const find = async () => {
  const jsonValue = await AsyncStorage.getItem('@user')        
  return jsonValue ? JSON.parse(jsonValue) : null
}

const remove = async () => {
  await AsyncStorage.removeItem('@user')
}

export {
  save,
  find,
  remove
}