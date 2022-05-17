import React from 'react'
import UserContext from '../../UserContext'
import Button from '../Forms/Button/Button'
import Input from '../Forms/Input/Input'
import Label from '../Forms/Label/Label'
import useForm from '../../Hooks/useForm'
import { Container, Content } from './styles'

const BuscarAlbum = () => {

  const album = useForm()
  const { buscarAlbum, loading } = React.useContext(UserContext)

  function procurarAlbum() {
    buscarAlbum(album.value)
  }

  return (
    <Container>
      <Label>Digite uma palavra chave</Label>
      <Content>
        <Input 
          type="text"
          name="buscar"
          placeholder="Buscar"
          value={album.value}
          onChange={album.onChange}
        />
        {loading 
          ? (<Button 
            backgroundColor="#188CCD"
            color="white"
            padding="1rem 4rem"
            fontSize="1rem"
            disabled
          > Procurar
          </Button>)
          : (<Button 
            backgroundColor="#188CCD"
            color="white"
            padding="1rem 4rem"
            fontSize="1rem"
            onClick={procurarAlbum}
          >
            Procurar
          </Button>)
        }
        
      </Content>
    </Container>
  )
}

export default BuscarAlbum