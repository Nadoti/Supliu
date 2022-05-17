import React from 'react'
import Modal from 'react-modal'
import { CRIAR_FAIXA } from '../../api/api'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button/Button'
import Input from '../Forms/Input/Input'
import { toast } from 'react-toastify';
import UserContext from '../../UserContext'

const AdicionarFaixa = ({isOpen, onRequestClose, pegaIdFaixa}) => {
  const token = 'dodo_nadoti@hotmail.com'
  const numeroFaixa = useForm()
  const nomeDaMusica = useForm()
  const duracaoDaFaixa = useForm()

  const { buscarAlbum } = React.useContext(UserContext)
  const [loading, setLoading] = React.useState(false) 

  async function cadastrarNovaFaixa() {
    const dados = {
      album_id: pegaIdFaixa,
      number: numeroFaixa.value,
      title: nomeDaMusica.value,
      duration: duracaoDaFaixa.value
    }
    try {
      setLoading(true)
      const {url, option} = CRIAR_FAIXA(dados, token)
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
      toast.success('Faixa Cadastrada com Sucesso',{
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      onRequestClose()
      numeroFaixa.setValue('')
      nomeDaMusica.setValue('')
      duracaoDaFaixa.setValue('')
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className='btnFecharAlbumModal' onClick={onRequestClose}>X</button>
      <h4>Cadastrar Nova Faixa</h4>
      <Input 
          value={numeroFaixa.value} 
          onChange={numeroFaixa.onChange}
          placeholder="Número da Faixa"
          backgroundColor="#C8CBCA"
          type="number"
        />
        <Input
          value={nomeDaMusica.value} 
          onChange={nomeDaMusica.onChange}
          placeholder="Nome da Música"
          backgroundColor="#C8CBCA"
          type="text"
        />
        <Input
          value={duracaoDaFaixa.value} 
          onChange={duracaoDaFaixa.onChange}
          placeholder="Tempo de Duração em segundos"
          backgroundColor="#C8CBCA"
          type="number"
        />
        {loading 
          ? (<Button
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={cadastrarNovaFaixa}
            disabled
          > Cadastrar
          </Button>)
          : (<Button
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={cadastrarNovaFaixa}
          > Cadastrar
          </Button>)}

    </Modal>
  )
}

export default AdicionarFaixa