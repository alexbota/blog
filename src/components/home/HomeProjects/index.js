import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Divider } from 'primereact/divider'
import { Button } from 'primereact/button'

const HomeProjects = () => {
  const { projects } = useGlobalContext()

  return (
    <>
      {projects.map((project) => {
        const { id, title, url, image, description } = project
        return (
          <div key={id}>
            <article key={id} className="project-card p-grid p-mx-3">
              <div className="p-col-12 p-lg-6 p-d-flex p-ai-center p-jc-center">
                <img src={image} alt={title} width="407" height="237" />
              </div>
              <div className="p-col-12 p-lg-6 p-d-flex p-flex-column p-jc-center">
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                  <a
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noreferrer"
                    href={url}
                  >
                    <Button
                      label="See Project"
                      icon="pi pi-angle-right"
                      iconPos="right"
                      className="project-btn p-button-rounded"
                    ></Button>
                  </a>
                </div>
              </div>
            </article>
            <Divider style={{ margin: '0' }} />
          </div>
        )
      })}
    </>
  )
}

export default HomeProjects
