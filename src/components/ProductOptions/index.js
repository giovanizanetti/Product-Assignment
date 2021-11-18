import Select from 'react-select'
import { useEffect } from 'react'

const ProdutOptions = ({ options }) => {
  useEffect(() => {
    options.forEach((option) => console.log(option.name))
  }, [options])

  const optionsNames = options.map((option) => {
    return { label: option.name }
  })

  return (
    <Select
      className='basic-single'
      classNamePrefix='select'
      // defaultValue={colourOptions[0]}
      isClearable={true}
      isSearchable={true}
      name='options'
      options={optionsNames}
    />
  )
}

export default ProdutOptions
