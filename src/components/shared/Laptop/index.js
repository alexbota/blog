import React, { useState, useEffect } from 'react'
// import styles
import './index.sass'
// import components
import cocktail_project from '../../../images/cocktail_project.png'
import grocerybud_project from '../../../images/grocerybud_project.png'
import cart_project from '../../../images/cart_project.png'
import { Button } from 'primereact/button'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    name: 'Cocktail DB',
    image: cocktail_project,
  },
  {
    id: 2,
    name: 'Grocery Bud',
    image: grocerybud_project,
  },
  {
    id: 3,
    name: 'Cart',
    image: cart_project,
  },
]

const Laptop = () => {
  // const [projects, setProjects] = useState(list)
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > projects.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = projects.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > projects.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
      <div className="macbook">
        <div className="screen">
          <div className="viewport">
            {projects.map((project, projectIndex) => {
              const { id, name, image } = project

              let position = 'nextSlide'
              if (projectIndex === index) {
                position = 'activeSlide'
              }
              if (
                projectIndex === index - 1 ||
                (index === 0 && projectIndex === projects.length - 1)
              ) {
                position = 'lastSlide'
              }
              return (
                <img
                  key={id}
                  src={image}
                  alt={name}
                  style={{ maxWidth: '100%' }}
                  className={position}
                />
              )
            })}
          </div>
        </div>
        <div className="base" />
        <div className="notch" />
      </div>
      <div className="p-d-flex p-jc-center" style={{ marginBottom: '7rem' }}>
        <Button
          style={{ fontSize: '2rem', color: 'white' }}
          className="p-button-text"
          aria-label="previous"
          onClick={prevSlide}
        >
          <FiChevronLeft />
        </Button>
        <Button
          style={{ fontSize: '2rem', color: 'white' }}
          className="p-button-text"
          aria-label="next"
          onClick={nextSlide}
        >
          <FiChevronRight />
        </Button>
      </div>
    </>
  )
}

export default Laptop
