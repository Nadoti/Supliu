import React from 'react'
import { BUSCAR_ALBUM, CARREGAR_ALBUM } from './api/api'

export const UserContext = React.createContext()


export const UserStorage = ({children}) => {
  const token = 'dodo_nadoti@hotmail.com'
  const [albuns, setAlbuns] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  async function buscarAlbum(name) {
    try {
      setError(null)
      setLoading(true)
      const {url, option} = BUSCAR_ALBUM(token, name)
      const response = await fetch(url,option)
      const result = await response.json()
      if(!result.data.length) setError('Nenhum Album Encontrado')
      setAlbuns(result.data)
    } catch(err) {
      setError('Não foi possivel encontrar o album')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    async function carregarAlbum() {
      try {
        setError(null)
        setLoading(true)
        const {url, option} = CARREGAR_ALBUM(token)
        const response = await fetch(url,option)
        if(response.status !== 200) throw new Error('Erro para Carregar os Albuns')
        const result = await response.json()
        setAlbuns(result.data)
      } catch(err) {
        setError('Erro para Carregar os Albuns, reinicia a página')
      } finally {
        setLoading(false)
      }
    }
    carregarAlbum()
  }, [])




  return (
    <UserContext.Provider value={{albuns, loading, buscarAlbum, error}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext