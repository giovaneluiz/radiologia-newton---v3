const URL = 'http://192.168.148.101:3333'

const login = async (email, password) => {
  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }

  const response = await fetch(`${URL}/signin`, requestInit)

  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

const loginGoogle = async () => {
  const requestInit = {
    method: 'GET'    
  }
  await fetch(`${URL}/auth/google`, requestInit)

}

const signup = async (name, email, ra, password, passwordConfirmation) => {  
  if(password !== passwordConfirmation){
    alert('Senhas não conferem.')
    return null
  } 

  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, ra, password})
  }
  
  const response = await fetch(`${URL}/signup`, requestInit)

  console.log(response)

  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

export {
  login,
  signup,
  loginGoogle
}
