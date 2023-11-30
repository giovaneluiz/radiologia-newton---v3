const URL = 'https://questions-api.tarleylana.repl.co/questions'

const findAll = async () => {
  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '12114651'
    }
  }

  const responseHttp = await fetch(URL, init)

  if(responseHttp.ok) {
    const responseBody = await responseHttp.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao solicitar questões')
  }
}

const findById = (id) => {

}

const insert = (question) => {

}

const removeById = (id) => {

}

const update = (id, question) => {

}

export {
  findAll,
  findById,
  insert,
  removeById,
  update
}