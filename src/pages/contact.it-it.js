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
      uid: '/',
      type: 'contactpage',
      lang: 'en-us',
    },
  ]

  const activeDoc = {
    uid: '/it-it/',
    lang: 'it-it',
    type: 'contactpage',
    alternateLanguages,
  }

  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO title="Alex Bota | Contatti" lang={activeDoc.lang.slice(0, 2)} />
      <section className="contact p-grid p-jc-center p-mx-3 p-mx-md-6">
        <div className="p-col-12 p-lg-6 p-mb-5">
          <h1>Servizi di progettazione e sviluppo web.</h1>
          <h4>
            La mia passione è vedere i clienti raggiungere i propri obiettivi di
            business utilizzando strategie digitali creative. Contattami oggi
            per programmare un incontro e vedere come posso aiutarti a crescere.
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
