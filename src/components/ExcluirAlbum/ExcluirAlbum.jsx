import React from 'react'
import Modal from 'react-modal'
import Button from '../Forms/Button/Button'
import { toast } from 'react-toastify';
import { DELETAR_ALBUM } from '../../api/api';
import UserContext from '../../UserContext';

const ExcluirAlbum = ({isOpen, onRequestClose, pegaExcluirIdAlbumModal, pegaExcluirNameAlbumModal}) => {
  const token = 'dodo_nadoti@hotmail.com'
  const [loading, setLoading] = React.useState(false)

  const { buscarAlbum } = React.useContext(UserContext)

  async function handleExcluirAlbum() {
    setLoading(true)
    try {
      const {url, option} = DELETAR_ALBUM(pegaExcluirIdAlbumModal, token)
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
      toast.success(`Album ${pegaExcluirNameAlbumModal} Excluida com Sucesso`,{
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      onRequestClose()
      buscarAlbum('')
    } catch (err) {
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
      <p style={{fontSize:"1.3rem"}}>Tem Certeza que deseja excluir esse Album ?</p>
      {loading 
        ? (<Button
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={handleExcluirAlbum}
            disabled
          >Sim</Button>)
        : (<Button
            backgroundColor="#56C482"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={handleExcluirAlbum}
          >Sim</Button>)}

      {loading 
        ? (<Button
            backgroundColor="#FA575D"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={onRequestClose}
            disabled
          >Não</Button>)
        : (<Button
            backgroundColor="#FA575D"
            color="white"
            padding=".6rem 1.2rem"
            fontSize="1rem"
            onClick={onRequestClose}
          >Não</Button>)}

    </Modal>
  )
}

export default ExcluirAlbum