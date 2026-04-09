import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return <>
        <div className='bg-white text-white shadow-md'>
            <div className='flex justify-between items-center px-4 py-4 max-w-6xl mx-auto'>
             <h1 className='text-2xl font-bold text-blue-600'>E-shop</h1>
             <ul className='flex gap-6 text-gray-700 font-medium'>
                <li className='hover:text-blue-600 cursor-pointer'>
                    <Link to="/">Home</Link>
                </li>
                 <li className='hover:text-blue-600 cursor-pointer'>
                    <Link to="/about">About</Link>
                </li>
                 <li className='hover:text-blue-600 cursor-pointer'>
                    <Link to="/contact">Contact</Link>
                </li>
                 <li className='hover:text-blue-600 cursor-pointer'>
                    <Link to="/service">Service</Link>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                    <Link to="/products">Products</Link>
                </li>
             </ul>

            </div>

        </div>


    </>
}

export default Navbar