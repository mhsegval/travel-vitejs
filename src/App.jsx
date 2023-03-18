import React from 'react'
import { NavBar, Hero, Footer, Memory, Explore, Brands, Pricings } from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi } from './data/traveldata'

const App = () => {
  return (
    <>
      <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore placesApi={placesAPI} />
        <Brands brands={brands} />
        <Pricings pricingapi={pricingapi} />
      <Footer />
    </>
  )
}

export default App