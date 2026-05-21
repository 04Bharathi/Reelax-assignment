import React from 'react'
import Navbar from './layout/Navbar'
import BillingForm from './billing/BillingForm'
import OrderSummary from './summary/OrderSummary'


function App () {
  return (
    <div className='min-h-screen bg-[#f3f3f3]' >
      <Navbar />

      <main className='max-w-7xl mx-auto px-4 py-6'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <BillingForm />
          <OrderSummary />
        </div>
      </main>
    </div>
  )
}

export default App
