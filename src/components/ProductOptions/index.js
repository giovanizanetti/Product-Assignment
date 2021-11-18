import Select from 'react-select'
import { useEffect } from 'react'

const ProdutOptions = ({ options }) => {
  //TODO HANDLE CUSTOM OPTIONS

  const optionsNames = options.map((option) => {
    const name = option.name ? option.name : 'Custom'
    return { label: name }
  })

  return (
    <Select
      className='mx-5 sm:mx-0 w-100'
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
