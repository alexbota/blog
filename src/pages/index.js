import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import SEO
import SEO from '../components/seo'
// import components
import HomeHero from '../components/home/HomeHero'
import HomeAbout from '../components/home/HomeAbout'
import HomeServices from '../components/home/HomeServices'
import HomeTech from '../components/home/HomeTech'
import HomeWorkflow from '../components/home/HomeWorkflow'
import HomeContact from '../components/home/HomeContact'
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
      <div className="home-wrapper">
        <HomeHero />
        <HomeAbout />
        <Divider />
        <HomeServices />
        <Divider />
        <HomeWorkflow />
        <Divider />
        <HomeTech />
        <Divider />
        <HomeContact />
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
