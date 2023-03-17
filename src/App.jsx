import React from 'react'
import { NavBar, Hero, Footer, Memory } from './components'
import { hero, navlinks, memory } from './data/traveldata'

const App = () => {
  return (
    <>
      <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
      <Footer />
    </>
  )
}

export default App