import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Divider } from 'primereact/divider'
import { Button } from 'primereact/button'

const HomeProjects = () => {
  const { projects } = useGlobalContext()

  return (
    <section className="section-work p-d-flex p-flex-column p-ai-center p-mx-5">
      <h2>MY RECENT WORK</h2>
      <p>Here are a few project I've worked on</p>
      {projects.map((project) => {
        const { id, title, url, image, description } = project
        return (
          <article key={id}>
            <div
              style={{ marginTop: '5rem', marginBottom: '5rem' }}
              className="p-d-flex p-flex-column p-flex-lg-row p-jc-center p-ai-center p-mx-5"
            >
              <div
                style={{ maxWidth: '500px' }}
                className="p-mb-4 p-mb-lg-0 p-mr-lg-4"
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
                      className="project-btn p-button-rounded"
                    ></Button>
                  </a>
                </div>
              </div>
            </div>
            <Divider style={{ margin: '0', width: '100vw' }} />
          </article>
        )
      })}
    </section>
  )
}

export default HomeProjects
