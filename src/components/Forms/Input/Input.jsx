import React from 'react'
import { InputStyles, Container } from './styles'

const Input = ({type, name, value, onChange, placeholder, backgroundColor}) => {
  return (
    <Container>
      <InputStyles 
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
      />
    </Container>
  )
}

export default Input