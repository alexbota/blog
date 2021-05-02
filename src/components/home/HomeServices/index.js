import React from 'react'
// import components
import { Card } from 'primereact/card'
import undraw_pen from '../../../images/undraw_pen.svg'
import undraw_slider from '../../../images/undraw_slider.svg'
import undraw_progressive_app from '../../../images/undraw_progressive_app.svg'

const HomeServices = ({ data }) => {
  const header_one = (
    <img
      alt="illustration"
      src={undraw_pen}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header_two = (
    <img
      alt="illustration"
      src={undraw_progressive_app}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header_three = (
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
      className="home-section section-services p-d-flex p-flex-column p-jc-center p-ai-center p-my-6"
    >
      <div className="p-mb-6">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="p-grid">
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card
            className="service-card"
            title={data.list.design.title}
            header={header_one}
          >
            <p>{data.list.design.description}</p>
          </Card>
        </div>
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card
            className="service-card"
            title={data.list.webapp.title}
            header={header_two}
          >
            <p>{data.list.webapp.description}</p>
          </Card>
        </div>
        <div className="p-col-12 p-lg-4 p-mb-2">
          <Card
            className="service-card"
            title={data.list.website.title}
            header={header_three}
          >
            <p>{data.list.website.description}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
