import React from 'react'

import {FiSearch} from 'react-icons/fi'
import {HiOutlineMenu} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='bg-[#f7f7f7] border-b'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            {/* search */}
            <div className='relative w-full lg:flex-1 lg:max-w-xl'>
                <input 
                type='text' 
                placeholder='Find influencers to collaborate with'
                className='w-full border border-blue-400 rounded-lg py-3 px-4 pr-12 outline-none bg-white' 
                />
                <FiSearch
                className='absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-600'
                />

            </div>

            <div className='flex flex-wrap items-center gap-3 justify-center lg:justify-end'>
                <button className='bg-yellow-500 text-white px-4 py-2 rounded-md font-medium'>
                    Upgrade
                </button>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md font-medium'>
                    + Create Campaing
                </button>
                <div className='w-10 h-10 rounded-full bg-gray-300'></div>
                <HiOutlineMenu className='text-3xl' />
            </div>
        </div>
    </div>
  )
}

export default Navbar
