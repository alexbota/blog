import React from 'react'
// import components
import { Card } from 'primereact/card'
import undraw_pen from '../../../images/undraw_pen.svg'
import undraw_slider from '../../../images/undraw_slider.svg'
import undraw_progressive_app from '../../../images/undraw_progressive_app.svg'

const HomeServices = () => {
  const header1 = (
    <img
      alt="illustration"
      src={undraw_pen}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header2 = (
    <img
      alt="illustration"
      src={undraw_progressive_app}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header3 = (
    <img
      alt="illustration"
      src={undraw_slider}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  return (
    <section
      id="services"
      className="section-services p-d-flex p-flex-column p-jc-center p-ai-center p-mx-3 p-my-6"
    >
      <div style={{ maxWidth: '1050px' }} className="p-mb-6">
        <h2>I provide everything you need for your perfect website</h2>
        <p>
          The web is changing rapidly and with it the possibilities to implement
          websites and web applications. Using the modern JAMStack philosophy
          and using tools like Static Site Generators, Headless CMS and a
          serverless architecture make it possible to create modern, state of
          the art web experiences.
        </p>
      </div>
      <div className="p-grid">
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card className="service-card" title="UI/UX Design" header={header1}>
            <p>
              UI & UX involves planning and iterating a site's structure and
              layout. Once the proper information architecture is in place, I
              design the visual layer to create an optimal user experience.
              Receive high fidelity designs, clickable prototypes, optionally
              also complete specifications with estimates and implementation
              proposal.
            </p>
          </Card>
        </div>
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card
            className="service-card"
            title="Web Application Development"
            header={header2}
          >
            <p>
              Create transformative web based digital products with me. Backend,
              data, cloud and frontend - I do it all top notch. I listen to and
              prototype your ideas. I love doing this and I'm curious about what
              you want to build.
            </p>
          </Card>
        </div>
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card
            className="service-card"
            title="Premium Website Development"
            header={header3}
          >
            <p>
              When you want a tailor-made website with maximum flexibility and a
              unique experience aimed at maximum SEO, speed and reliability.
              <br />I specialize in creating statically generated websites with
              React - served from CDNs - to deliver your content milliseconds
              faster than the competition and score high on relevant performance
              metrics.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
