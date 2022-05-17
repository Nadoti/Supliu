export const apiUrl = 'https://tiao.supliu.com.br/api'



export function CARREGAR_ALBUM(token) {
  return {
    url: apiUrl + '/album',
    option: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
  }
}

export function BUSCAR_ALBUM(token, name) {
  return {
    url: apiUrl + '/album?keyword='+name+'&limit=10&page=1',
    option: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
  }
}

export function CRIAR_ALBUM(dados,token) {
  return {
    url: apiUrl + '/album',
    option: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(dados)
    }
  }
}

export function DELETAR_ALBUM(id,token) {
  return {
    url: apiUrl + `/album/${id}`,
    option: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
  }
}

export function CRIAR_FAIXA(dados,token) {
  return {
    url: apiUrl + '/track',
    option: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(dados)
    }
  }
}

export function DELETAR_FAIXA(id,token) {
  return {
    url: apiUrl + `/track/${id}`,
    option: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
  }
}
