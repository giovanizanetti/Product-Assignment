import { useContext } from 'react'
import { useHistory } from 'react-router'
import CartItem from './CartItem'
import { Store } from '../../globalState/Store'

const Cart = () => {
  const history = useHistory()
  const { cart, emptyCart } = useContext(Store)

  const handleCheckout = () => {
    emptyCart()
    history.push('/cart/checkout')
  }
  const uniqueProducts = [...new Set(cart.map((item) => item))]

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
            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t items-center'>
              <h3 className='sm:text-xl md:3xl font-semibold'>Shopping Cart</h3>
              <button
                onClick={() => history.goBack()}
                className='p-1 ml-auto bg-transparent border-0 float-right text-3xl tex- leading-none font-semibold outline-none focus:outline-none hover:text-purple-500'
              >
                &times;
              </button>
            </div>
            {/*body*/}
            {cart && !cart.length ? (
              <strong className='p-10 sm:m-10'>The shopping cart is empty</strong>
            ) : (
              <div className='relative p-6 flex-auto '>
                <ul>
                  {uniqueProducts && uniqueProducts.map((cartItem) => <CartItem key={cartItem?.id} item={cartItem} />)}
                </ul>
              </div>
            )}
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
                className={`${
                  !cart.length && 'cursor-not-allowed opacity-50'
                } disabled bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                type='button'
                onClick={handleCheckout}
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
