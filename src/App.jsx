import React from 'react'
import AdicionarAlbum from "./components/AdicionarAlbum/AdicionarAlbum";
import AdicionarFaixa from './components/AdicionarFaixa/AdicionarFaixa';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserStorage } from "./UserContext";
import { ToastContainer } from 'react-toastify';
import ExcluirFaixa from './components/ExcluirFaixa/ExcluirFaixa';
import ExcluirAlbum from './components/ExcluirAlbum/ExcluirAlbum';

function App() {
  const [novoAlbumModal, setNovoAlbumModal] = React.useState(false)
  const [novaFaixaModal, setNovaFaixaModal] = React.useState(false)
  const [excluirFaixaModal, setExcluirFaixaModal] = React.useState(false)

  const [pegaIdExcluirFaixa, setPegaIdExcluirFaixa] = React.useState(null)
  const [pegaCriarIdFaixa, setPegaCriarIdFaixa] = React.useState(null)

  const [pegaExcluirNameFaixa, setPegaExcluirNameFaixa] = React.useState(null)

  const [excluirAlbumModal, setExcluirAlbumModal] = React.useState(false)
  const [pegaExcluirIdAlbumModal, setPegaExcluirIdAlbumModal] = React.useState(null)
  const [pegaExcluirNameAlbumModal, setPegaExcluirNameAlbumModal] = React.useState(null)

  function handleAbrirNovoAlbumModal() {
    setNovoAlbumModal(true)
  }
  function handleFecharNovoAlbumModal() {
    setNovoAlbumModal(false)
  }


  function handleAbrirNovaFaixaModal(id) {
    setPegaCriarIdFaixa(id)
    setNovaFaixaModal(true)
  }
  function handleFecharNovaFaixaModal() {
    setNovaFaixaModal(false)
  }

  function handleAbrirExcluirFaixaModal(id, name) {
    setPegaExcluirNameFaixa(name)
    setPegaIdExcluirFaixa(id)
    setExcluirFaixaModal(true)
  }
  function handleFecharExcluirFaixaModal() {
    setExcluirFaixaModal(false)
  }

  function handleAbrirExcluirAlbumModal(id, name) {
    setPegaExcluirNameAlbumModal(name)
    setPegaExcluirIdAlbumModal(id)
    setExcluirAlbumModal(true)
  }
  function handleFecharExcluirAlbumModal() {
    setExcluirAlbumModal(false)
  }

  return (
    <>
      <UserStorage>
        <Header abrirModalAlbum={handleAbrirNovoAlbumModal}/>
        <Home 
          abrirNovaModalFaixa={handleAbrirNovaFaixaModal}
          abrirExcluirModalFaixa={handleAbrirExcluirFaixaModal}
          abrirExcluirModalAlbum={handleAbrirExcluirAlbumModal}
        />
        <AdicionarAlbum 
          isOpen={novoAlbumModal}
          onRequestClose={handleFecharNovoAlbumModal}
        />
        <AdicionarFaixa 
          isOpen={novaFaixaModal}
          onRequestClose={handleFecharNovaFaixaModal}
          pegaIdFaixa={pegaCriarIdFaixa}
        />
        <ExcluirFaixa 
          isOpen={excluirFaixaModal}
          onRequestClose={handleFecharExcluirFaixaModal}
          pegaIdExcluirFaixa={pegaIdExcluirFaixa}
          pegaExcluirNameFaixa={pegaExcluirNameFaixa}
        />
        <ExcluirAlbum 
          isOpen={excluirAlbumModal}
          onRequestClose={handleFecharExcluirAlbumModal}
          pegaExcluirIdAlbumModal={pegaExcluirIdAlbumModal}
          pegaExcluirNameAlbumModal={pegaExcluirNameAlbumModal}
        />
      </UserStorage>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
}

export default App;
