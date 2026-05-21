import React from 'react'

const CouponSection = () => {
  return (
    <div className='border rounded-xl overflow-hidden'>
      <div className='border-b px-6 py-5 flex items-center justify-between'>
        <div className='flex gap-[12px] items-center'>
        <img src='..\assets\iconify-icon.png' className='h-[12px]' />
        <h3 className='text-[14px, #111827] font-bold'>Apply Coupon</h3>
        </div>
        <span className='text-[#6B7280] h-[4px] w-[8px]'>^</span>
      </div>

      <div className='p-6 space-y-5'>

        <div className='flex gap-2'>
            <input 
            type='text'
            placeholder='Enter coupon code'
            className='flex-1 border font-normal text-[14px, #6B7280] rounded-md px-[12px] py-[8px] outline-none' 
            />
            <button className='border border-blue-300 text-[12px] text-[#1977F2] px-[12px] py-[6px] rounded-md font-bold'>Apply</button>
        </div>

        <div className='border-2 border-blue-500 rounded-xl p-5 flex items-center justify-between'>
            <div className='flex justify-between items-center gap-[16px]'>
                <h4 className='font-bold text-[14px]'>WELCOME20</h4>
                <p className='text-gray-500 text-[10px] font-normal'>20% off on your first month</p>
                <input className="w-[16px] h-[16px] rounded-full border-4 border-blue-500" />
            </div>
        </div>

        <div className='border border-blue-500 rounded-xl p-5 flex items-center justify-between'>
            <div className='flex justify-between items-center gap-[20px]'>
                <h4 className='font-bold text-[14px]'>ANNUAL50</h4>
                <p className='text-gray-500 text-[10px] font-normal'>50% off on annual plans</p>
                <input className="w-[16px] h-[16px] rounded-full border-2 border-blue-500" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CouponSection
