import Select from 'react-select'
import { removeStringUnderline, capitalize } from '../../helpers'
import { useRef, useEffect } from 'react'

const ProdutOptions = ({ options, index }) => {
  //TODO HANDLE CUSTOM OPTIONS
  const inputRef = useRef()

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus()
    }
  }, [inputRef, index])

  const optionsNames = options.map((option) => {
    const { name, slug } = option || {}
    const optionName = name ? name : removeStringUnderline(slug.toString())
    return { label: capitalize(optionName) }
  })

  return (
    <Select
      ref={inputRef}
      className='mx-5 sm:mx-0 w-100'
      classNamePrefix='select'
      defaultValue={{ label: `select options...` }}
      isClearable={true}
      isSearchable={true}
      name='options'
      options={optionsNames}
    />
  )
}

export default ProdutOptions
