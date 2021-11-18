import React from 'react'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = ({ cartCount = 0 }) => {
  return (
    <header className=' md:px-10 mb-2 bg-green-200 lg:px-20'>
      <nav
        data-testid='header-component'
        className='flex items-center justify-between flex-wrap p-6 sm:p-3 lg:mx-5  xl:mx-20 lg:py-8'
      >
        <Link
          href='#responsive-header'
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        >
          Home
        </Link>

        <Link className='hover:text-white mr-4' data-testid='shopping-cart-link' to=''>
          {cartCount < 1 ? <BsCart size={25} /> : <BsCartFill size={25} />}
        </Link>
      </nav>
    </header>
  )
}

export default Header
