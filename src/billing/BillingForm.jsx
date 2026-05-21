import React from 'react'
import InputField from './InputField'
import SelectField from './SelectField'

const BillingForm = () => {
  return (
    <div className='bg-white h-full rounded-2xl p-6 lg:p-10 flex-1'>
      <p className='text-[14px] text-[#6B7280] font-medium mb-6 cursor-pointer'>
        ← Back to plans
      </p>

      <h1 className='text-[26px] font-semibold text-[#111827] mb-4'>Review your details</h1>
      <h2 className='text-[20px] font-bold text-[#505050] mb-10'>Billing Information</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />
        <InputField
          label="Email"
          placeholder="abhigyan.pandey@getreelax.com"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />
        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <SelectField label="State" />

        <SelectField label="City" />

        <InputField
          label="Country"
          placeholder="India"
        />
         <InputField
          label="Pin Code"
          placeholder="Pincode"
        />
      </div>
      <div className='flex flex-col sm:flex-row justify-end gap-4'>
        <button className='border border-gray-300 px-8 py-3 rounded-md font-semibold'>
          Cancel
        </button>
        <button className='text-white bg-blue-600 px-8 py-3 rounded-md font-semibold'>
          Save Details
        </button>
      </div>
    </div>
  )
}

export default BillingForm
