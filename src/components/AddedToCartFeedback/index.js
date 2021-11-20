import React from 'react'
import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'

const AddedToCartFeedback = ({ productName, showFeedback, handleFeedback }) => {
  const history = useHistory()
  const handleClose = (e) => {
    const value = e.target.innerText
    const checkout = 'GO TO CHECKOUT'

    value === checkout ? history.push('/cart') : history.push('/')
    handleFeedback()
  }
  Modal.setAppElement('#root')

  return (
    <Modal
      isOpen={showFeedback}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      // style={customStyles}
      contentLabel={`${productName} was added to the cart`}
      shouldCloseOnEsc={true}
      style={{
        content: {
          backgroundColor: '#f58c08',
          height: '25vh',
          // width: '30vw',
        },
      }}
    >
      <p className='text-center'>{`${productName} was added to the cart`}</p>
      <p className='text-center'>You Cart has 1 product</p>
      <div className='flex justify-center p-3'>
        <button
          className='bg-gray-100 bg-blue-500 text-white  font-bold uppercase text-sm sm:px-6 sm:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none p-2 ease-linear transition-all duration-150 mr-2'
          onClick={(e) => handleClose(e)}
        >
          go to products
        </button>
        <button
          className='bg-gray-100 font-bold uppercase text-blue-500 text-sm sm:px-6 sm:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none p-2 ease-linear transition-all duration-150'
          onClick={(e) => handleClose(e)}
        >
          go to checkout
        </button>
      </div>
    </Modal>
  )
}

export default AddedToCartFeedback
