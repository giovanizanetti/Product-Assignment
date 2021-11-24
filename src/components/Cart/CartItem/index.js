import { useState, useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Store } from '../../../globalState/Store'

const CartItem = ({ item }) => {
  const { deleteProductFromCart } = useContext(Store)
  const { name, choosenOptions } = item || {}
  const [productCount, setProductCount] = useState(1)

  const handleReduceQuantity = () => {
    if (productCount === 1) {
      const isDelete = window.confirm('D you want to delete this product?')
      if (isDelete) {
        deleteProductFromCart(item.id)
      }
    } else if (productCount > 1) {
      setProductCount(productCount - 1)
    } else {
      return
    }
  }

  const handleIncreaseQuantity = (product) => {
    setProductCount((previousCount) => previousCount + 1)
    delete product.id
    setProductCount((count) => count++)
  }

  return (
    <li className='flex flex-col sm:flex-row justify-between py-3 pb-8 items-center border-b border-solid border-gray-400'>
      <div className='custom-number-input w-32'>
        <div className='flex justify-center flex-row w-full rounded-lg relative bg-transparent mt-1'>
          <button
            data-action='decrement'
            className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none'
          >
            <span onClick={handleReduceQuantity} className='m-auto text-2xl font-thin text-xs'>
              −
            </span>
          </button>

          <span className=' pl-2.5 outline-none focus:outline-none text-center w-7 bg-gray-200 font-bold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'>
            {productCount}
          </span>
          <button
            data-action='increment'
            className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 px-2 rounded-r cursor-pointer'
          >
            <span onClick={() => handleIncreaseQuantity(item)} className='m-auto text-2xl font-thin'>
              +
            </span>
          </button>
        </div>
      </div>

      <span className='px-3'>
        <h2 className='uppercase text-2xl p-2 pt-7 sm:pt-2'>{name}</h2>
        <h3 className='font-bold underline p-3 pt-3'>Product Properties</h3>
        <ul>
          {choosenOptions &&
            choosenOptions.map(({ label, property }, index) => {
              return (
                <li key={index} className='text-left'>
                  <div className='font-bold'>{property}</div>
                  <div className='text-sm ml-5'> {label}</div>
                </li>
              )
            })}
        </ul>
      </span>
      <span className='p-3 font-bold text-lg'>
        <span> &euro;</span> <span>0,00</span>
      </span>
      <span
        onClick={() => deleteProductFromCart(item.id)}
        className='p-3 text-3xl text-red-600 hover:text-red-800 cursor-pointer'
      >
        <RiDeleteBin6Line />
      </span>
    </li>
  )
}

export default CartItem
