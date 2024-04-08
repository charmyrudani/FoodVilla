import React, { useState } from 'react'
import cart_icon from '../utils/cart_icon.png'
import resLogo from '../utils/resLogo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginbtn,setLoginbtn] = useState('Login'); 
    return (
        <>
            <div className='sticky top-0 bg-white flex justify-around  p-4 border-4'>
                <div className='flex items-center space-x-4'>
                    <img className='w-16' src={resLogo} alt="logo" />
                    <h1 className='font-bold'>FOOD VILLA</h1>
                </div>
                <div className='flex px-52'>
                    <ul className='flex space-x-11'>
                        <li className='flex items-center cursor-pointer' ><Link to="/">Home</Link></li>
                        <li className='flex items-center cursor-pointer' ><Link to="/about">About</Link></li>
                        <li className='flex items-center cursor-pointer' ><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='flex items-center space-x-5'>

                    <button onClick={()=> loginbtn==='Login' ? setLoginbtn('Logout') : setLoginbtn('Login')} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2">{loginbtn}</button>

                    <img className='w-7 cursor-pointer' src={cart_icon} alt="cart_icon" />
                </div>
            </div>
        </>
    )
}

export default Header
