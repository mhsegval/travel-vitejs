import React from 'react'
import { NavBar, Hero, Footer } from './components'
import { hero, navlinks } from './data/traveldata'

const App = () => {
  return (
    <>
      <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
      <Footer />
    </>
  )
}

export default App