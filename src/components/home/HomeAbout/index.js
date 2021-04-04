import React from 'react'
import undraw_web_developer from '../../../images/undraw_web_developer.svg'

const HomeAbout = () => {
  return (
    <section className="section-about p-d-flex p-flex-column p-jc-center p-ai-center">
      <div className="p-mb-5">
        <h2>Hi, I'm Alex. Nice to meet you.</h2>
        <p>
          Since the beginning of my journey nearly 2 years ago, I enjoyed
          building small sites and interactive web apps. If you are a business
          seeking a website which is set apart from the competition, let's work
          together
        </p>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <img
          src={undraw_web_developer}
          alt="illustration"
          width="400"
          height="400"
        />
      </div>
    </section>
  )
}

export default HomeAbout
