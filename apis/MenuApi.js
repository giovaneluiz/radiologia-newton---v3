const URL = 'http://192.168.148.101:3333'

const getMenuHome = async (id) => {   
  
  const requestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },    
  }
  
  const response = await fetch(`${URL}/menu/${id}`, requestInit)    
  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

export {
  getMenuHome
}


