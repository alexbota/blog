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
import homepage from '../documents/it-it/homepage'

const IndexPage = () => {
  const alternateLanguages = [
    {
      uid: '/',
      type: 'homepage',
      lang: 'en-us',
    },
  ]

  const activeDoc = {
    uid: '/it-it/',
    lang: 'it-it',
    type: 'homepage',
    alternateLanguages,
  }

  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO
        title="Alex Bota | Sviluppatore Web React"
        keywords={[
          `sviluppatore web`,
          `sviluppatore react`,
          `siti web`,
          `creazione sito web`,
          `milano sito web`,
        ]}
        lang={activeDoc.lang.slice(0, 2)}
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
