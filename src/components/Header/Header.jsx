import React from 'react'
import logo from '../../Assets/logo.png'
import Button from '../Forms/Button/Button'
import { HeaderStyles, Titulo } from './styles'




const Header = ({abrirModalAlbum}) => {

  



  return (
    <HeaderStyles>
      <a href="/"><img src={logo} alt="Logo" /></a>
      <Button 
        backgroundColor="#56C482"
        color="white"
        padding=".6rem 1.2rem"
        fontSize="1rem"
        onClick={abrirModalAlbum}>Cadastrar Album</Button>
      <Titulo>Discografia</Titulo>
    </HeaderStyles>
  )
}

export default Header