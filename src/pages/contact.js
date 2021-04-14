import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import styles
import '../styles/Contact.sass'
// import SEO
import SEO from '../components/seo'
// import components
import ContactForm from '../components/shared/ContactForm'

const Contact = () => {
  return (
    <DefaultLayout>
      <SEO title="Alex Bota | Contact" />
      <section className="contact p-grid p-jc-center p-mx-3 p-mx-md-6">
        <div className="p-col-12 p-lg-6 p-mb-5">
          <h1>Web development and design services.</h1>
          <p>
            My passion is to see clients reach their business goals using
            creative digital strategies. Contact me today to schedule a meeting
            and see how I can help you grow.
          </p>
        </div>
        <div className="p-col-12 p-lg-6">
          <ContactForm />
        </div>
      </section>
      <section></section>
    </DefaultLayout>
  )
}

export default Contact
