import React from 'react'
import { NavBar, Hero, Footer, Memory, Explore, Brands, Pricings, Banner, Newsletter } from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/traveldata'

const App = () => {
  return (
    <>
      <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore placesApi={placesAPI} />
        <Brands brands={brands} />
        <Pricings pricingapi={pricingapi} />
        <Banner bannerAPI={bannerAPI} />
        <Newsletter />
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App