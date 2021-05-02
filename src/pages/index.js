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
import homepage from '../documents/en-us/homepage'

const IndexPage = () => {
  const alternateLanguages = [
    {
      uid: '/it-it/',
      type: 'homepage',
      lang: 'it-it',
    },
  ]

  const activeDoc = {
    uid: '/',
    lang: 'en-us',
    type: 'homepage',
    alternateLanguages,
  }

  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO
        title="Alex Bota | Web Developer React"
        keywords={[
          `alex bota`,
          `react web developer`,
          `sito web`,
          `creazione sito web milano`,
          `freelance web developer milano`,
        ]}
        lang={activeDoc.lang}
      />
      <div className="home-wrapper">
        <HomeHero data={homepage.hero} />
        <div className="p-mx-3">
          <HomeAbout data={homepage.about} />
          <Divider />
          <HomeServices data={homepage.services} />
          <Divider />
          <HomeWorkflow data={homepage.workflow} />
          <Divider />
          <HomeTech data={homepage.tech} />
          <Divider />
          <HomeContact />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
