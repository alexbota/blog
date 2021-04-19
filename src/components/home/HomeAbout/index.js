import React from 'react'
import undraw_work_together from '../../../images/undraw_work_together.svg'

const HomeAbout = () => {
  return (
    <section className="section-about p-d-flex p-jc-center p-ai-center p-mx-3 p-my-6">
      <div style={{ maxWidth: '1050px' }} className="p-grid p-jc-center">
        <div className="p-col-12 p-lg-6">
          <h2>
            Grow your business with a fast, SEO-friendly, inclusive website
          </h2>
          <p>
            I specialize in helping businesses integrate design and technology
            to better serve customers, extend online reach, and increase
            revenue.
            <br />
            If you are a business seeking a website to stand out from the
            competition, let's work together.
          </p>
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
