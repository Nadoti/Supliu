import React from 'react'

const useForm = () => {
  const [value, setValue] = React.useState('')


  function onChange({ target}) {
    setValue(target.value)
  }

  return ({
    value,
    onChange,
    setValue
  })
}

export default useForm