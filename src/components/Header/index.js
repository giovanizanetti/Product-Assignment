import { useContext } from 'react'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Store } from '../../globalState/Store'

const Header = ({ cartCount = 0, setCartCount, ShowModal, setShowModal }) => {
  const { cart } = useContext(Store)
  return (
    <header className=' md:px-10 mb-2 bg-green-200 lg:px-20'>
      <nav
        data-testid='header-component'
        className='flex items-center justify-between flex-wrap p-6 sm:p-3 lg:mx-5  xl:mx-20 lg:py-8'
      >
        <Link to='/' className='block my-2 lg:inline-block lg:my-0 text-teal-200 hover:text-white mr-4'>
          Home
        </Link>

        <div className='flex items-center'>
          <Link
            onClick={() => setShowModal(!ShowModal)}
            to='/cart'
            className='hover:text-white mr-1'
            data-testid='shopping-cart-link'
          >
            {cart.length < 1 ? <BsCart size={35} /> : <BsCartFill size={35} />}
          </Link>
          <span className='font-bold bg-green-500 p-2 text-gray-200 rounded-full h-6 w-8 flex items-center justify-center mr-4'>
            {cart.length}
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header
