import React from 'react'
// import form
import { useForm, ValidationError } from '@formspree/react'
// import styles
import './index.sass'
// import components
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrgrbvvp')

  if (state.succeeded) {
    return (
      <div className="p-d-flex p-jc-center">
        <h2>
          Thank you for submitting <br />
          I'll get back to you ASAP!
        </h2>
      </div>
    )
  }
  return (
    <div className="p-d-flex p-jc-center">
      <Card
        style={{ maxWidth: '500px' }}
        title="Let's talk about your project."
      >
        <form className="p-fluid p-formgrid p-grid" onSubmit={handleSubmit}>
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="name">Name</label>
            <InputText required id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="email">Email</label>
            <InputText required id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="p-field p-col-12">
            <p>Product</p>
            <div className="p-formgroup-inline" role="radiogroup">
              <div className="p-field-checkbox">
                <input
                  type="radio"
                  required
                  id="product1"
                  aria-labelledby="product1"
                  name="product"
                  value="website"
                />
                <label htmlFor="product1">Website</label>
              </div>
              <div className="p-field-checkbox">
                <input
                  type="radio"
                  required
                  id="product2"
                  aria-labelledby="product1"
                  name="product"
                  value="web application"
                />
                <label htmlFor="product2">Web Application</label>
              </div>
              <div className="p-field-checkbox">
                <input
                  type="radio"
                  required
                  id="product3"
                  aria-labelledby="product3"
                  name="product"
                  value="other"
                />
                <label htmlFor="product3">Other</label>
              </div>
            </div>
            <ValidationError
              prefix="Product"
              field="product"
              errors={state.errors}
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
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="p-field p-col-12" style={{ textAlign: 'center' }}>
            <Button
              className="submit-button p-button-lg"
              type="submit"
              disabled={state.submitting}
              style={{ width: 'fit-content' }}
              label="Submit"
            />
          </div>
        </form>
      </Card>
    </div>
  )
}

export default ContactForm
