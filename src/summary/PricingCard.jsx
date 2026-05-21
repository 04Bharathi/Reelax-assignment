import React from 'react'

const PricingCard = () => {
  return (
    <div className='border border-blue-200 rounded-xl p-6'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-wrap'>
            <h2 className='text-[30px] font-extrabold text-[#111827]'>
                ₹4,999
            </h2>
            <p className='text-[#6B7280] font-medium text-[16px] mt-1 self-center'>/month</p>
            <p className='mt-6 font-medium text-[14px] text-[#6B7280]'>Includes 5,000 credits/mo.</p>
        </div>
        
        <div className='text-rigth'>
            <p className='text-[12px] text-[#1977F2] font-bold  tracking-wide'>
                SELECTED PLAN
            </p>
            <h3 className='text-[20px] font-bold text-[#111827]'>
                Startup
            </h3>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
