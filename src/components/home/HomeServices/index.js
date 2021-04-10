import React from 'react'
// import components
import { Card } from 'primereact/card'
import undraw_pen from '../../../images/undraw_pen.svg'
import undraw_slider from '../../../images/undraw_slider.svg'

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
      src={undraw_slider}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  return (
    <section
      id="services"
      className="section-services p-grid p-justify-center p-mx-3 p-mx-lg-6"
    >
      <div className="p-col-12 p-lg-4 p-pr-md-6">
        <h2>SERVICES</h2>
        <p>
          The web is changing rapidly and with it the possibilities to implement
          websites and web applications. Using the modern JAMStack philosophy
          and using tools like Static Site Generators, Headless CMS and a
          serverless architecture make it possible to create modern, state of
          the art web experiences.
        </p>
      </div>
      <div className="p-col-12 p-md-6 p-lg-4 p-xl-3">
        <Card className="service-card" title="UI/UX DESIGN" header={header1}>
          <p className="p-m-0">
            UI & UX involves planning and iterating a site's structure and
            layout. Once the proper information architecture is in place, I
            design the visual layer to create an optimal user experience.
          </p>
        </Card>
      </div>
      <div className="p-col-12 p-md-6 p-lg-4 p-xl-3">
        <Card
          className="service-card"
          title="PREMIUM WEBSITE DEVELOPMENT"
          header={header2}
        >
          <p className="p-m-0">
            When you want a tailor-made website with maximum flexibility and a
            unique experience aimed at maximum SEO, speed and reliability.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default HomeServices
