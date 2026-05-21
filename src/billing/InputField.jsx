import React from 'react'

const InputField = ({label, placeholder}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-[14px] font-medium text-gray-800'>
        {label}
      </label>
      <input 
      type='text'
      placeholder={placeholder}
      className='border border-gray-300 rounded-md px-4 py-3 outline-none bg-[#f9f9f9] focus:border-blue-500' 
      />
    </div>
  )
}

export default InputField
