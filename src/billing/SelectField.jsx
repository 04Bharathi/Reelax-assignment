import React from 'react'

const SelectField = ({label}) => {
  return (
    <div className='flex flex-col gap-4'>
      <label className='text-[14px] font-medium text-gray-500'>
        {label}
      </label>
      <select
      className='border border-gray-300 rounded-md px-4 py-3 outline-none bg-[#f9f9f9] focus:border-blue-500'
      >
        <option>Select {label.toLowerCase()}</option>
      </select>
    </div>
  )
}

export default SelectField
