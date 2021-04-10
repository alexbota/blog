import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import context
import { useGlobalContext } from '../context/GlobalContextProvider'
// import styles
import '../styles/Contact.sass'
// import SEO
import SEO from '../components/seo'
// import components
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

const Contact = () => {
  const {
    person,
    handleSubmit,
    handleChange,
    submitSuccess,
  } = useGlobalContext()

  return (
    <DefaultLayout>
      <SEO title="Alex Bota | Contact" />
      <section className="contact p-d-flex p-flex-column p-ai-center p-mx-6  p-mb-6">
        <Toast className="submit-toast" ref={submitSuccess} />
        <h1>Get in touch</h1>
        <form className="p-fluid p-formgrid p-grid" onSubmit={handleSubmit}>
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="name">Name</label>
            <InputText
              required
              id="name"
              type="text"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="email">Email</label>
            <InputText
              required
              id="email"
              type="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="message">Message</label>
            <InputTextarea
              required
              id="message"
              type="text"
              name="message"
              rows="4"
              value={person.message}
              onChange={handleChange}
            />
          </div>
          <div className="p-field p-col-12" style={{ textAlign: 'center' }}>
            <Button
              className="p-button-lg"
              type="submit"
              style={{ width: 'fit-content' }}
              label="Submit"
            />
          </div>
        </form>
      </section>
    </DefaultLayout>
  )
}

export default Contact
