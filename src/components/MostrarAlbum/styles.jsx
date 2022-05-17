import styled, { css } from 'styled-components'

export const Container = styled.div`

  margin-bottom: 2rem;

`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 0;
  font-family: Arial;
`

export const Titulo = styled.h3`
  margin-bottom: .5rem;
  font-family: Arial;
  padding-left: 1rem;
  margin-left: -1rem;
`


export const Content = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 50px;
    &.faixa{
      display: block;
      margin-right: 1rem;
      width: 250px;
    }
    &.numero{
      margin-left: 1.5rem;
    }
  }
`

export const Duracao = styled.p`
  display: block;
  margin-right: 1.3rem;
  font-family: Arial;
`
export const ExcluirFaixa = styled.button`
  border: none;
  background: #FA575D;
  padding: 0.3rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: .2s;
  &:hover {
    transform: scale(1.1);
  }
`

export const LoadingSpinner = css`

  display: block;
  text-align: center;
  margin-top: 10rem;

`

export const ContainerAlbumFaixa = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    margin-bottom: .5rem;
  }

`















/*
export const Container = styled.section`
  padding: 0 1rem;
  p {
    font-family: Arial;
  }
`
export const Titulo = styled.h3`
  margin-bottom: 1rem;
  font-family: Arial;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 300px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-family: Arial;
    &:nth-child(2) {
    }
    
  }
`

export const Duracao = styled.p`
  display: block;
  margin-right: 1.6rem;
  font-family: Arial;
`

export const ExcluirFaixa = styled.button`
  border: none;
  background: red;
  padding: .5rem;
  //margin-left: 2rem;

`

*/