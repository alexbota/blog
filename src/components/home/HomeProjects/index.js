import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import Laptop from '../../shared/Laptop'

const HomeProjects = () => {
  const { work, changeProject } = useGlobalContext()

  return (
    <section className="section-projects">
      <Laptop url={work} />
      <div className="buttons p-d-flex p-flex-column p-flex-md-row p-jc-center p-mt-4">
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
