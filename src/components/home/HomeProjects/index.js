import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import Laptop from '../../shared/Laptop'

const HomeProjects = () => {
  const { project, changeProject } = useGlobalContext()

  return (
    <section className="section-projects">
      <Laptop url={project} />
      <div className="buttons p-d-flex p-jc-center p-mt-4">
        <button
          value="cocktaildb"
          className="btn project-btn p-mx-4"
          onClick={changeProject}
        >
          CocktailDB
        </button>
        <button
          className="btn project-btn p-mx-4"
          value="grocerybud"
          onClick={changeProject}
        >
          Grocery Bud
        </button>
        <button
          className="btn project-btn p-mx-4"
          value="cart"
          onClick={changeProject}
        >
          Cart
        </button>
      </div>
    </section>
  )
}

export default HomeProjects
