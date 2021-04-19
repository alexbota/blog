import React from 'react'
import Laptop from '../../shared/Laptop'

const HomeHero = () => {
  return (
    <section className="section-hero">
      <div className="hero-info p-d-flex p-flex-column p-jc-center p-ai-center p-mx-3">
        <h1 className="text-lg">
          Freelance Web Developer & Designer
          <br /> in Milan
        </h1>
        <h2>
          I build <span className="clr-primary-8">websites</span> which enable
          companies to succeed
        </h2>
      </div>
      <Laptop />
    </section>
  )
}

export default HomeHero
