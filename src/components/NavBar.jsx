import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = ({navlinks}) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'} className=''>
            <img src={logo} alt="logo" className='' />
          </NavLink>
          <ul>
            {navlinks?.map((val,i) => (
              <li>
                <NavLink to={'#'} className=''>{val.link}</NavLink>
              </li>
            ))}
            <li>
              <button type='button'>Join Us</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar