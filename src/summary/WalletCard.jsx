import React from 'react'

import { FiCreditCard } from 'react-icons/fi'

const WalletCard = () => {
  return (
    <div className='border rounded-xl p-5 flex items-center justify-between'>
      <div className='flex items-center gap-[12px]'>
        <FiCreditCard className='text-blue-600 text-[16px]' />
        <div>
            <h3 className='font-bold text-[12px] text-[#111827]'>
                Wallet Balance
            </h3>
            <p className='text-[#6B7280] text-[12px] font-medium'>₹500.00 available</p>
        </div>
      </div>
      <button className='border border-blue-300 text-[14px] text-[#1977F2] py-2 px-6 rounded-md font-bold'>
        Apply
      </button>
    </div>
  )
}

export default WalletCard
