import Select from 'react-select'
import { removeStringUnderline, capitalize } from '../../helpers'
import { useRef, useEffect, useState } from 'react'

const ProdutOptions = ({ options, index }) => {
  //TODO HANDLE CUSTOM OPTIONS
  const inputRef = useRef()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus()
    }
  }, [inputRef, index])

  const optionsNames = options.map((option) => {
    const { name, slug } = option || {}
    //if customSizes pop modal to display options
    const optionName = name ? name : removeStringUnderline(slug.toString())
    return { label: capitalize(optionName), value: slug }
  })

  return (
    <Select
      onChange={(item) => setSelected(item)}
      ref={inputRef}
      className='mx-5 sm:mx-0 w-100 border-green-300'
      classNamePrefix='select'
      defaultValue={{ label: `select an option...` }}
      isClearable={true}
      isSearchable={true}
      name='options'
      options={optionsNames}
      styles={{ background: 'green' }}
      value={selected}
    />
  )
}

export default ProdutOptions
