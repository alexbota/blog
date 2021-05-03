import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import SEO
import SEO from '../components/seo'
// import components
import ContactForm from '../components/shared/ContactForm'

const Contact = () => {
  const alternateLanguages = [
    {
      uid: '/it-it/',
      type: 'contactpage',
      lang: 'it-it',
    },
  ]

  const activeDoc = {
    uid: '/',
    lang: 'en-us',
    type: 'contactpage',
    alternateLanguages,
  }

  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO title="Alex Bota | Contact" lang={activeDoc.lang.slice(0, 2)} />
      <section className="contact p-grid p-jc-center p-mx-3 p-mx-md-6">
        <div className="p-col-12 p-lg-6 p-mb-5">
          <h1>Web development and design services.</h1>
          <h4>
            My passion is to see clients reach their business goals using
            creative digital strategies. Contact me today to schedule a meeting
            and see how I can help you grow.
          </h4>
        </div>
        <div className="p-col-12 p-lg-6">
          <ContactForm />
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Contact
