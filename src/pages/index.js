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
import { Divider } from 'primereact/divider'
import homepage from '../documents/en-us/homepage'
import ContactForm from '../components/shared/ContactForm/ContactForm'

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
          `web developer`,
          `react developer`,
          `sito web`,
          `website`,
          `freelance web developer`,
          `freelance react developer`,
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
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
