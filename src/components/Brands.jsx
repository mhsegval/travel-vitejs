import React from 'react'

const Brands = ({brands}) => {
  return (
    <>
      <div className='flex items-center justify-between my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto xl:gap-7 overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-hide'>
        {brands?.map((val, i) => (
            <img key={i} src={val.iconSrc} alt="icon/img" className='w-44 h-auto xl:w-34 lg:w-32 hover:scale-105 transition-all duration-300 filter drop-shadow-lg' />
        ))}
      </div>
    </>
  )
}

export default Brands