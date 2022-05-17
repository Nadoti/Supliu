import React from 'react'
import {  Container, SubContainer, Titulo, Duracao, ExcluirFaixa, LoadingSpinner,Content, ContainerAlbumFaixa} from './styles'
import UseContext from '../../UserContext'
import BeatLoader from 'react-spinners/BeatLoader'
import Button from '../Forms/Button/Button'


const MostrarAlbum = ({ abrirNovaModalFaixa, abrirExcluirModalFaixa, abrirExcluirModalAlbum }) => {
  const {albuns, loading, error} = React.useContext(UseContext)

  function transformaMinutos(numero) {
    let hours = Math.floor(numero / 3600);
    let minutes = Math.floor((numero - (hours * 3600)) / 60);
    let seconds = numero - (hours * 3600) - (minutes * 60);
    const horario = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')

    return horario
  }
  

  

  function abrirCriarModalFaixa(event) {
    abrirNovaModalFaixa(event.target.id)
  }

  function abrirModalExcluirFaixa(event) {
    abrirExcluirModalFaixa(event.target.id, event.target.value)
  }

  function abrirModalExcluirAlbum(event) {
    abrirExcluirModalAlbum(event.target.id, event.target.value)
  }

  return ( loading 
    ? (<BeatLoader 
        loading={loading}
        css={LoadingSpinner}
        size={50}
      />)
    : (error 
      ? (<p className='erro_naoEncontrado'>{error}</p>) 
      : (<section>
        {albuns.map(album => (
          <Container key={album.id}>
            <ContainerAlbumFaixa>
              <Button
                  backgroundColor="red"
                  color="white"
                  padding=".2rem .5rem"
                  fontSize=".875rem"
                  onClick={abrirModalExcluirAlbum}
                  id={album.id}
                  value={album.name}
              >Excluir Album</Button>
              <Titulo>Album: {album.name}, {album.year}</Titulo>
              <Button
                backgroundColor="#F09069"
                color="white"
                padding=".5rem 1rem"
                fontSize=".875rem"
                onClick={abrirCriarModalFaixa}
                id={album.id}
              >Cadastrar Faixa</Button>
            </ContainerAlbumFaixa>
            <SubContainer>
              <Content >
                <div>
                  <p>Deletar</p>
                </div>
                <div className='numero'>
                  <p>N°</p>
                </div>
                <div className='faixa'>
                  <p>Faixa</p>
                </div>
              </Content>
              <div>
                <p>Duração</p>
              </div>
            </SubContainer>
            {album.tracks.map(track => (
              <SubContainer key={track.id}>
                <Content>
                  <div>
                  <ExcluirFaixa 
                    onClick={abrirModalExcluirFaixa} 
                    id={track.id}
                    value={track.title}
                  >
                    x
                  </ExcluirFaixa>
                  </div>
                  <div className='numero'>
                    <p>{track.number}</p>
                  </div>
                  <div className='faixa'>
                    <p>{track.title}</p>
                  </div>
                </Content>
                <div>
                  <Duracao>{transformaMinutos(track.duration)}</Duracao>
                </div>
              </SubContainer>
            ))}
          </Container>
        ))}
      </section>))
    
  )
}

export default MostrarAlbum








 /* 
<>
      {albuns.map(album => (
        <Container key={album.id}>
          <Titulo>Álbum: {album.name}, {album.year}</Titulo>
          <Content>
            <Info>
              <div>
                <p>N°</p>
                <p>Faixa</p>
              </div>
              <p>Excluir</p>
            </Info>
            <p>Duração</p>
          </Content>
          {album.tracks.map(track => (
            <Content key={track.id}>
              <Info>
                <div>
                  <p>{track.number}</p>
                  <p>{track.title}</p>
                </div>
                <ExcluirFaixa onClick={ola} value={track.id}>x</ExcluirFaixa>
              </Info>
              <Duracao>{track.duration}</Duracao>
            </Content>
          ))}
        </Container>
      ))}
    </>
 */