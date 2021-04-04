import React from 'react'
// import context
import { useGlobalContext } from '../context/GlobalContextProvider'
// import layouts
import DefaultLayout from '../components/layouts'
// import styles
import '../styles/index.sass'
// import SEO
import SEO from '../components/seo'
// import components
import HomeHero from '../components/home/HomeHero'
import HomeAbout from '../components/home/HomeAbout'
import HomeProjects from '../components/home/HomeProjects'
import HomeServices from '../components/home/HomeServices'
import { Divider } from 'primereact/divider'

const IndexPage = () => {
  const { scrolled } = useGlobalContext()
  return (
    <DefaultLayout scrolled={scrolled}>
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
      <HomeAbout />
      <Divider />
      <HomeProjects />
      <HomeServices />
    </DefaultLayout>
  )
}

export default IndexPage
