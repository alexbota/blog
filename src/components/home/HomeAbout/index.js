import React from 'react'
import undraw_work_together from '../../../images/undraw_work_together.svg'

const HomeAbout = ({ data }) => {
  return (
    <section className="home-section section-about p-d-flex p-jc-center p-ai-center p-my-6">
      <div className="p-grid p-jc-center">
        <div className="p-col-12 p-lg-6">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="p-col-12 p-lg-6 p-d-flex p-ai-center p-jc-center">
          <img
            src={undraw_work_together}
            alt="illustration"
            width="500"
            height="500"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
