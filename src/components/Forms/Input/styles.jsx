import styled from 'styled-components'


export const InputStyles = styled.input`

  width: 100%;
  display: block;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  border: 1px solid #fff;
  transition: .2s;
  background: ${props => props.backgroundColor};
  

  &:hover, &:focus {
    outline: none;
    border-color: #00d0fc;
    box-shadow: 0 0 0 2px #188CCD;
  }
`

export const Container = styled.div`
  width: 100%;
  padding-right: 1rem;
`
