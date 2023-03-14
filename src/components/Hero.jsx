import React from 'react'

const Hero = ({hero: {title, subTitle, text, btn1, btn2, img}}) => {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className=''>
            <h1 className=''>{title}</h1>
            <h1 className=''>{subTitle}</h1>
            <p className=''>{text}</p>
            <div className=''>
              <button className=''>{btn1}</button>
              <button className=''>{btn2}</button>
            </div>
          </div>
          <div className=''>
            <img className='' src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero