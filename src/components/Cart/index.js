import { useHistory } from 'react-router'

const Cart = () => {
  const history = useHistory()

  return (
    <>
      <div
        data-testid='cart-component'
        onClick={(e) => {
          if (e.currentTarget !== e.target) return
          history.goBack()
        }}
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >
        <div className='relative w-auto my-6  max-w-3xl m-6'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Shopping Cart</h3>
              <button
                onClick={() => history.goBack()}
                className='p-1 ml-auto bg-transparent border-0 float-right text-3xl tex- leading-none font-semibold outline-none focus:outline-none hover:text-purple-500'
              >
                &times;
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their
                perception of themselves! They're slowed down by their perception of themselves. If you're taught you
                can’t do anything, you won’t do anything. I was taught I could do everything.
              </p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
              <button
                // className='border-light-blue-500 text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm shadow hover:shadow-lg mx-3 rounded ease-linear transition-all duration-150'
                className='bg-transparent text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-2'
                type='button'
                onClick={() => history.goBack()}
              >
                Close
              </button>
              <button
                className='bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => history.goBack()}
              >
                Buy it
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

export default Cart
