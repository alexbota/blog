import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Button } from 'primereact/button'

const HomeProjects = () => {
  const { projects } = useGlobalContext()

  return (
    <section className="section-work p-d-flex p-flex-column p-ai-center p-mx-3">
      <h2>MY RECENT WORK</h2>
      <p>A selection of my latest projects</p>
      {projects.map((project) => {
        const { id, title, url, image, description } = project
        return (
          <article key={id}>
            <div
              style={{ marginTop: '5rem', marginBottom: '5rem' }}
              className="p-d-flex p-flex-column p-flex-xl-row p-jc-center p-ai-center"
            >
              <div
                style={{ maxWidth: '600px' }}
                className="p-mb-4 p-mb-xl-0 p-mr-lg-4"
              >
                <img src={image} alt={title} width="407" height="237" />
              </div>
              <div style={{ maxWidth: '500px' }} className="p-ml-lg-4">
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
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      className="project-btn p-button-raised p-button-outlined p-button-rounded"
                    ></Button>
                  </a>
                </div>
              </div>
            </div>
            {/*<Divider style={{ margin: '0', width: '100vw' }} />*/}
          </article>
        )
      })}
    </section>
  )
}

export default HomeProjects
