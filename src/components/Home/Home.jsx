import React from 'react'
import BuscarAlbum from '../BuscarAlbum/BuscarAlbum'
import MostrarAlbum from '../MostrarAlbum/MostrarAlbum'
import { Main } from './styles'

const Home = ({ abrirNovaModalFaixa, abrirExcluirModalFaixa, abrirExcluirModalAlbum }) => {
  return (
    <Main>
      <BuscarAlbum />
      <MostrarAlbum 
        abrirNovaModalFaixa={abrirNovaModalFaixa}
        abrirExcluirModalFaixa={abrirExcluirModalFaixa}
        abrirExcluirModalAlbum={abrirExcluirModalAlbum}
      />
    </Main>
  )
}

export default Home