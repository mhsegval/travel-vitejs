import React from 'react'
import PriceCard from './PriceCard'

const Pricings = ({pricingapi: {title, text, btn1, btn2, plans}}) => {
  return (
    <>
      <div className='my-16 relative'>
        <div className='travigo-container'>
          <div className='grid items-center justify-items-center text-center mb-11 md:mb-7 gap-2'>
            <h1 className='travigo-text'>{title}</h1>
            <p className='text-xl lg:text-sm text-gray-800'>{text}</p>
            <div className='ring-1 ring-slate-100 rounded-full shadow-md shadow-slate-200 gap-5 py-1.5 px-2 flex items-center justify-center my-5'>
              <button className='button-emrald sm:w-auto' type='button'>{btn1}</button>
              <button className='button-light sm:w-auto' type='button'>{btn2}</button>
            </div>
          </div>
          <div className='grid items-center m-auto grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5'>
            {plans?.map((plan,i) => (
              <PriceCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricings