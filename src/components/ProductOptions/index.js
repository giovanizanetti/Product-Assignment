import Select from 'react-select'
import { removeStringUnderline, capitalize } from '../../helpers'
import { useRef, useEffect, useState } from 'react'
import Modal from 'react-modal'

const ProdutOptions = ({ options, index }) => {
  //TODO HANDLE CUSTOM OPTIONS
  const inputRef = useRef()
  const [selected, setSelected] = useState(null)
  const [customSizes, setCustomSizes] = useState(null)

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus()
    }
  }, [inputRef, index])

  const optionsNames = options.map((option, i) => {
    const { name, slug } = option || {}
    //TODODODOif customSizes pop modal to display options
    const optionName = name ? name : removeStringUnderline(slug.toString())
    return { label: capitalize(optionName), value: option }
  })

  const handleSelect = (option) => {
    const hasCustomSizes = option.value.hasOwnProperty('customSizes')
    if (hasCustomSizes) {
      const { customSizes } = option.value
      return setCustomSizes(customSizes)
    }
    setSelected(option)
  }
  Modal.setAppElement('#root')

  const displaySizes = (sizes) => {
    const sizesArray = []
    for (const size in sizes) {
      sizesArray.push({ [size]: sizes[size] })
    }
    console.log(sizes)
    return sizesArray
  }

  return (
    <>
      {customSizes && console.log(displaySizes(customSizes))}
      <Modal
        isOpen={customSizes ? true : false}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel='Choose custom Size'
        shouldCloseOnEsc={true}
        data={{ background: 'green' }}
      >
        {/* {console.log(customSizes)} */}
        {/* {customSizes && displaySizes(customSizes)} */}
        <p>Modal Content</p>
      </Modal>
      <Select
        onChange={(option) => handleSelect(option)}
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
    </>
  )
}

export default ProdutOptions
