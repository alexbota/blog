import React from 'react'
// import components
import Laptop from '../../shared/Laptop'
import url from '../../../images/cocktail_project.png'

const HomeProjects = () => {
  return (
    <section className="section-projects">
      <Laptop url={url} />
    </section>
  )
}

export default HomeProjects
