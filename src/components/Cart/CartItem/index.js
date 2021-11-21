import { useState, useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Store } from '../../../globalState/Store'

const CartItem = ({ item, addProductToCart }) => {
  const { deleteProductFromCart } = useContext(Store)
  const { name, choosenOptions } = item || {}
  const [productCount, setProductCount] = useState(1)

  //TODO
  //DELETE ITEM FROM THE CART
  //SAVE ITEMS TO THE LOCAL STORAGE
  //ADD PAY BUTTOM AND GIT -> YOU DID IT!
  //CHECK FOR BUGS
  //COMPARE EXCLUDES
  //CLEAR CONSOLE.LOGS
  //MAKE A README FILE
  //CHECK IF STYLE IS RESPONSIVE

  const handleReduceQuantity = () => {
    if (productCount === 1) {
      //TODO: ASK IF THE USER WANTS TO REMOVE THE ITEM FROM THE CART
      //THE USER CONFIRM OR CANCEL
      //FIELTER OUT THE PRODUCT IF YES
      // setProductCount(productCount - 1)
    } else if (productCount > 1) {
      setProductCount(productCount - 1)
    } else {
      return
    }
  }

  const handleIncreaseQuantity = () => {
    setProductCount((previousCount) => previousCount + 1)
  }

  return (
    <li className='flex flex-col sm:flex-row justify-between py-3 items-center border-b border-solid border-gray-400'>
      <div className='custom-number-input w-32'>
        <div className='flex flex-row w-full rounded-lg relative bg-transparent mt-1'>
          <button
            data-action='decrement'
            className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none'
          >
            <span onClick={handleReduceQuantity} className='m-auto text-2xl font-thin text-xs'>
              −
            </span>
          </button>
          <input
            onChange={(e) => {
              console.log(e.target)
            }}
            type='number'
            className='outline-none focus:outline-none text-center w-7 bg-gray-200 font-bold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
            name='custom-input-number'
            value={productCount}
          ></input>
          <button
            data-action='increment'
            className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 px-2 rounded-r cursor-pointer'
          >
            <span onClick={handleIncreaseQuantity} className='m-auto text-2xl font-thin' text-xs>
              +
            </span>
          </button>
        </div>
      </div>

      <span className='px-3'>
        <h2 className='uppercase text-2xl p-2'>{name}</h2>
        <h3 className='font-bold underline p-3 pt-3'>Product Properties</h3>
        <ul>
          {choosenOptions &&
            choosenOptions.map(({ label, property }, index) => {
              return (
                <li key={index} className='text-left'>
                  <div className='font-bold' text>
                    {property}
                  </div>
                  <div className='text-sm ml-5'> {label}</div>
                </li>
              )
            })}
        </ul>
      </span>
      <span className='px-3'>
        <span> &euro;</span> <span>0,00</span>
      </span>
      <span
        onClick={() => deleteProductFromCart(item.id)}
        className='px-3 text-3xl text-red-600 hover:text-red-800 cursor-pointer'
      >
        <RiDeleteBin6Line />
      </span>
    </li>
  )
}

export default CartItem
