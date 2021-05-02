import React from 'react'
import Laptop from '../../shared/Laptop'

const HomeHero = ({ data }) => {
  return (
    <section className="section-hero">
      <div className="hero-info p-d-flex p-flex-column p-jc-center p-ai-center p-mx-3">
        <h1 className="text-lg">{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>
      <Laptop />
    </section>
  )
}

export default HomeHero
