import React from 'react'
import { ButtonStyles } from './styles'

const Button = ({children,backgroundColor, color, disabled, padding, fontSize, ...props}) => {
  return (
    <ButtonStyles 
      fontSize={fontSize} 
      padding={padding} 
      backgroundColor={backgroundColor} 
      color={color} 
      disabled={disabled}
      type="button"
      {...props}
    > {children}
    </ButtonStyles>
  )
}

export default Button