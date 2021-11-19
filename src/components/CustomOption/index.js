import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const CustomOption = ({ setSelected, customSizes, isOpen, setIsOpen }) => {
  const [customWidth, setCustomWidth] = useState(null)
  const [customHeight, setCustomHeight] = useState(null)

  //Default the custom size
  useEffect(() => {
    if (customSizes) {
      const { maxHeight, maxWidth } = customSizes
      setCustomHeight(maxHeight / 2)
      setCustomWidth(maxWidth / 2)
    }
  }, [customSizes])

  const handleClose = (isCancel = false) => {
    if (isCancel) return setIsOpen(false)
    const customChoice = {
      label: `custom(${customWidth}x${customHeight}mm)`,
      value: { width: customWidth, height: customHeight },
    }
    setIsOpen(false)

    setSelected(customChoice)
  }

  Modal.setAppElement('#root')
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      // style={customStyles}
      contentLabel='Choose custom Size'
      shouldCloseOnEsc={true}
      style={{
        content: {
          backgroundColor: '#f58c08',
          height: '50vh',
        },
      }}
    >
      <>
        <h1 className='text-center text-xl font-bold'>Choose your custom sizes</h1>
        {customSizes && (
          <div className='flex flex-col content-between'>
            <div className='p-5'>
              <h2>Width</h2>
              <h2 className='text-lg  text-center m-3'>{customWidth + ' mm'}</h2>
              <Slider
                value={customWidth}
                min={customSizes.minWidth}
                max={customSizes.maxWidth}
                // step={this.state.step}
                onChange={(e) => setCustomWidth(e)}
              />
            </div>
            <div className='p-5'>
              <h2>Height</h2>
              <h2 className='text-lg  text-center m-3'>{customHeight + ' mm'}</h2>
              <Slider
                value={customHeight}
                min={customSizes.minHeight}
                max={customSizes.maxHeight}
                // step={this.state.step}
                onChange={(e) => setCustomHeight(e)}
              />
            </div>
            <div className='flex justify-center p-3'>
              <button
                className='bg-gray-100 text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-2'
                onClick={(e) => handleClose('cancel')}
              >
                Cancel
              </button>
              <button
                className='bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                onClick={(e) => handleClose()}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </>
    </Modal>
  )
}
export default CustomOption
