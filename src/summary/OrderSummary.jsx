import React from 'react'

import PricingCard from './PricingCard'
import WalletCard from './WalletCard'
import CouponSection from './CouponSection'

const OrderSummary = () => {
  return (
    <div className='bg-white rounded-2xl p-6 lg:p-10 w-full lg:w-[450px] space-y-6'>
      <h1 className='text-24px font-500 font-bold text-[#111827]'>Order Summary</h1>
      <PricingCard />

      <button className='w-full border border-blue-300 text-[#1977F2] py-4 rounded-full font-bold text-[14px]'>
        Upgrade to Growth plan
      </button>

      <WalletCard />

      <CouponSection />

      <div className='space-y-5 pt-4'>
        <div className='flex justify-between text-xl'>
          <span className='text-[#6B7280] font-medium text-[14px]'>Subtotal</span>
          <span className='font-semibold text-[14px] text-[#000]'>₹14,999.00</span>
        </div>

        <div className='flex justify-between text-xl'>
          <span className='text-[#6B7280] font-medium text-[14px]'>Tax (18% GST)</span>
          <span className='font-semibold text-[14px] text-[#000]'>₹1,079.64</span>
        </div>

        <div className="border-t pt-6 flex justify-between items-center">
          <span className="text-[18px] font-bold">
            Total due today
          </span>
          <span className="text-[24px] font-extrabold text-blue-600">
            16,078.64
          </span>
        </div>
      </div>
      <button className='w-full bg-[#1977F2] text-white py-4 rounded-md text-[16px] font-semibold'>Proceed to Payment</button>
    </div>
  )
}

export default OrderSummary
