import React from 'react'
import { HiHome } from 'react-icons/hi'
import { BiBus } from 'react-icons/bi'
import { IoLogOutOutline  } from 'react-icons/io5'
import { DiJoomla  } from 'react-icons/di'
import { Link } from 'react-router-dom'

export default function Template(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className='w-full grid grid-cols-12 items-center text-white bg-blue-500 text-xl'>
        <div className='col-span-2'></div>
        <div className='col-span-8 text-xl text-center'>
          <Link to="/">
          Aplikasi Pendaftaran
            </Link>
          </div>
        <div className='col-span-2 cursor-pointer text-white hover:bg-gray-500 p-3 right-4'>
        <Link to="/new" className='cursor text-white hover:bg-gray-500 p-3 text-center'>
          Login
        </Link>
        </div>
      </div>
      {props.children}
      <footer className="bg-blue-500 grid grid-cols-3 ">
        <Link to="/" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
          <HiHome className='text-xl' />
        </Link>
        <Link to="/bus" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
          <BiBus className='text-xl' />
        </Link>
        <Link to="/form" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
          <IoLogOutOutline className='text-xl' />
        </Link>
      </footer>
    </div>
  )
}