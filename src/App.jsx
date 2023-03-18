import React from 'react'
import { NavBar, Hero, Footer, Memory, Explore } from './components'
import { hero, navlinks, memory, placesAPI } from './data/traveldata'

const App = () => {
  return (
    <>
      <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore placesApi={placesAPI} />
      <Footer />
    </>
  )
}

export default App