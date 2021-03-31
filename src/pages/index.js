import * as React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import styles
import '../styles/index.sass'
// import SEO
import SEO from '../components/seo'
// import components
import undraw_web_developer from '../images/undraw_web_developer.svg'
import Footer from '../components/shared/Footer'
import HomeHero from '../components/home/HomeHero'
import HomeProjects from '../components/home/HomeProjects'
import HomeServices from '../components/home/HomeServices'
import { Divider } from 'primereact/divider'

const IndexPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Alex Bota | Front-end Developer React"
        keywords={[
          `alex bota`,
          `react web developer`,
          `sito web`,
          `creazione sito web milano`,
          `freelance web developer milano`,
        ]}
      />
      <HomeHero />
      <section className="section-about p-d-flex p-flex-column p-jc-center p-ai-center">
        <div className="p-mb-5">
          <h2>Hi, I'm Alex. Nice to meet you.</h2>
          <p>
            Since the beginning of my journey nearly 2 years ago, I enjoyed
            building small sites and interactive web apps. If you are a business
            seeking a website which is set apart from the competition, let's
            work together
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
      <Divider />
      <section className="section-work p-d-flex p-flex-column p-jc-center p-ai-center p-mx-3">
        <h2>MY RECENT WORK</h2>
        <p>Here are a few project I've worked on</p>
        <HomeProjects />
      </section>
      <section
        id="services"
        className="section-services p-d-flex p-flex-column p-justify-center p-ai-center"
      >
        <div className="card-container p-grid p-m-0 p-justify-center">
          <HomeServices />
        </div>
      </section>
      <Footer />
    </DefaultLayout>
  )
}

export default IndexPage
