import Select from 'react-select'
import { removeStringUnderline, capitalize } from '../../helpers'
import { useRef, useEffect, useState, useContext } from 'react'
import CustomOption from '../CustomOption'
import 'rc-slider/assets/index.css'
import { Store } from '../../globalState/Store'

const ProdutOptions = ({ options, index, property }) => {
  const { addProductOption, cart } = useContext(Store)
  const inputRef = useRef()
  const [selected, setSelected] = useState(null)
  const [customSizes, setCustomSizes] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  //test
  useEffect(() => {
    setSelected(null)
  }, [cart])

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus()
    }
  }, [inputRef, index, customSizes])

  const selectableOptions = options.map((option, i) => {
    const { name, slug } = option || {}
    const optionName = name ? name : removeStringUnderline(slug.toString())
    return { label: capitalize(optionName), value: option }
  })

  const handleSelect = (option) => {
    //add property name to the option object

    if (!option) return setSelected(null)

    const hasCustomSizes = option.value.hasOwnProperty('customSizes')
    if (hasCustomSizes) {
      option.property = property
      const { customSizes } = option.value
      setIsOpen(true)
      return setCustomSizes(customSizes)
    }
    option.property = property
    setSelected(option)

    addProductOption(option)
  }
  return (
    <>
      <CustomOption setSelected={setSelected} customSizes={customSizes} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Select
        onChange={(option) => handleSelect(option)}
        ref={inputRef}
        className='mx-5 sm:mx-0 w-100 border-green-300'
        classNamePrefix='select'
        defaultValue={{ label: `select an option...` }}
        isClearable={true}
        isSearchable={true}
        name='options'
        options={selectableOptions}
        styles={{ background: 'green' }}
        value={selected}
      />
    </>
  )
}

export default ProdutOptions
