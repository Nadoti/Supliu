import React from 'react'
import { LabelStyles } from './styles'

const Label = ({children}) => {
  return (
    <LabelStyles>{children}</LabelStyles>
  )
}

export default Label