import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import styles
import './index.sass'
// import components
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { RadioButton } from 'primereact/radiobutton'
import { Toast } from 'primereact/toast'

const ContactForm = () => {
  const {
    person,
    handleSubmit,
    handleChange,
    submitSuccess,
  } = useGlobalContext()

  return (
    <div className="p-d-flex p-jc-center">
      <Card
        style={{ maxWidth: '500px' }}
        title="Let's talk about your project."
      >
        <Toast className="submit-toast" ref={submitSuccess} />
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
            <p>Product</p>
            <div className="p-formgroup-inline" role="radiogroup">
              <div className="p-field-checkbox">
                <RadioButton
                  required
                  inputId="product1"
                  aria-labelledby="product1"
                  name="product"
                  value="website"
                  onChange={handleChange}
                  checked={person.product === 'website'}
                />
                <label htmlFor="product1">Website</label>
              </div>
              <div className="p-field-checkbox">
                <RadioButton
                  required
                  inputId="product2"
                  aria-labelledby="product1"
                  name="product"
                  value="web application"
                  onChange={handleChange}
                  checked={person.product === 'web application'}
                />
                <label htmlFor="product2">Web Application</label>
              </div>
              <div className="p-field-checkbox">
                <RadioButton
                  required
                  inputId="product3"
                  aria-labelledby="product3"
                  name="product"
                  value="other"
                  onChange={handleChange}
                  checked={person.product === 'other'}
                />
                <label htmlFor="product3">Other</label>
              </div>
            </div>
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
              className="submit-button p-button-lg"
              type="submit"
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
