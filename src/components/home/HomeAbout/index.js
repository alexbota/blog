import React from 'react'
import undraw_work_together from '../../../images/undraw_work_together.svg'

const HomeAbout = () => {
  return (
    <section className="section-about p-d-flex p-flex-column p-flex-xl-row p-jc-center p-ai-center">
      <div style={{ maxWidth: '500px' }} className="p-mb-5 p-mr-0 p-mr-xl-4">
        <h2>Hi, I'm Alex. Nice to meet you.</h2>
        <p>
          I specialize in helping businesses integrate design and technology to
          better serve customers, extend online reach, and increase revenue.
          <br />
          If you are a business seeking a lightning-fast, SEO friendly website,
          let's work together.
        </p>
      </div>
      <div
        style={{ maxWidth: '500px' }}
        className="p-d-flex p-jc-center p-ai-center p-ml-0 p-ml-xl-4"
      >
        <img
          src={undraw_work_together}
          alt="illustration"
          width="500"
          height="500"
        />
      </div>
    </section>
  )
}

export default HomeAbout
