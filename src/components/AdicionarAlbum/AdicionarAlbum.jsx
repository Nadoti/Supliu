import React from 'react'
import Modal from 'react-modal'
import useForm from '../../Hooks/useForm'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'
import { CRIAR_ALBUM } from '../../api/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../../UserContext'



const AdicionarAlbum = ({isOpen, onRequestClose}) => {
  const token = 'dodo_nadoti@hotmail.com'
  const nomeAlbum = useForm()
  const anoAlbum = useForm()

  const { buscarAlbum } = React.useContext(UserContext)
  const [loading, setLoading] = React.useState(false)

  async function cadastrarNovoAlbum() {
    const dados = {
      name: nomeAlbum.value,
      year: anoAlbum.value
    }
    try {
      setLoading(true)
      const {url, option} = CRIAR_ALBUM(dados, token)
      const response = await fetch(url, option)
      const result = await response.json()
      if(!response.ok) {
        toast.error(result.error,{
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
        return
      }
      toast.success('Album Cadastrado com Sucesso',{
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      onRequestClose()
      nomeAlbum.setValue('')
      anoAlbum.setValue('')
      buscarAlbum('')
    } catch(err) {
        toast.error(err.error,{
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
    } finally {
      setLoading(false)
    }
    
    
  }



  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button className='btnFecharAlbumModal' onClick={onRequestClose}>X</button>
        <h4>Cadastrar Novo Album</h4>
        <Input 
          value={nomeAlbum.value} 
          onChange={nomeAlbum.onChange}
          placeholder="Nome do Album"
          backgroundColor="#C8CBCA"
        />
        <Input 
          value={anoAlbum.value} 
          onChange={anoAlbum.onChange}
          placeholder="Ano do Album"
          backgroundColor="#C8CBCA"
          type="number"
        />
        {loading 
          ? (<Button 
            disabled
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={cadastrarNovoAlbum}
          > Cadastrar
          </Button>) 
          : (<Button 
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={cadastrarNovoAlbum}
          > Cadastrar
          </Button>)}
      </Modal>
    </>
  )
}

export default AdicionarAlbum