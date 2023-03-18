import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className='p-5 bg-white/50 ring-1 ring-emerald-200 shadow-md shadow-emerald-300 rounded-lg max-w-5xl w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-14'>
        <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
          <div className='grid items-center sm:text-center'>
            <h1 className='travigo-text'>Get In Touch</h1>
            <p className='text-base my-3 sm:text-sm font-medium'>Questions and Feedback! We would love to hear from you.</p>
          </div>
          <form className='flex items-center justify-center relative'>
            <input type='email' placeholder='Enter Email' name='email' className='py-2 px-5 ring-1 ring-emerald-300 flex items-center shadow-md shadow-slate-200 w-96 lg:w-[85vw] text-base rounded-full relative placeholder:text-slate-500 focus:outline-none' />
            <button type='button' className='text-base px-5 py-2 text-white bg-gradient-to-b from-emerald-500 to-green-500 rounded-r-full transition-all active:scale-90 absolute right-0 shadow-md shadow-emerald-400'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter