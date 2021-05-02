import React from 'react'
// import global styles
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import '../../styles/global.sass'
// import components
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const DefaultLayout = ({ children, activeDocMeta }) => {
  return (
    <>
      <Navbar activeDocMeta={activeDocMeta} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
