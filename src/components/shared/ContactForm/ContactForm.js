import './index.sass'

import React, { useState } from 'react'

import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import axios from 'axios'
import { classNames } from 'primereact/utils'
import { useFormik } from 'formik'

const ContactForm = () => {
  const products = [
    { name: 'Marketing website' },
    { name: 'Landing page' },
    { name: 'E-commerce' },
    { name: 'Web Application' },
    { name: 'Other' },
  ]
  const [displayTerms, setDisplayTerms] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      product: null,
      description: '',
      accept: false,
    },
    validate: (data) => {
      let errors = {}

      if (!data.name) {
        errors.name = 'Name is required.'
      }

      if (!data.email) {
        errors.email = 'Email is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = 'Invalid email address. E.g. example@email.com'
      }

      if (!data.description) {
        errors.description = 'Description is required'
      }

      if (!data.accept) {
        errors.accept = 'You need to agree to the privacy policy.'
      }

      return errors
    },
    onSubmit: (data) => {
      setFormData(data)
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/mrgrbvvp',
        data: data,
      })
      setShowMessage(true)

      formik.resetForm()
    },
  })

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name])
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    )
  }

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  )

  const termsDialogFooter = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={onHide} autoFocus />
  }

  const showTerms = (event) => {
    event.preventDefault()
    setDisplayTerms(true)
  }

  const onHide = () => {
    setDisplayTerms(false)
  }

  return (
    <>
      <Dialog
        header="Privacy Policy"
        visible={displayTerms}
        style={{ width: '50vw' }}
        footer={termsDialogFooter}
        onHide={onHide}
      >
        <PrivacyPolicy />
      </Dialog>

      <div className="form">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ '960px': '80vw' }}
          style={{ width: '30vw' }}
        >
          <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: '5rem', color: 'var(--green-500)' }}
            ></i>
            <h5>Let's get started!</h5>
            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
              Thank you for contacting me <b>{formData.name}</b> ; I'm excited
              to discover more about your project. Expect my response in just a
              few hours at <b>{formData.email}</b>.
            </p>
          </div>
        </Dialog>

        <div className="p-d-flex p-jc-center">
          <div className="card">
            <h5 className="p-text-center">Let's talk about your project</h5>
            <form className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      'p-invalid': isFormFieldValid('name'),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      'p-error': isFormFieldValid('name'),
                    })}
                  >
                    Name*
                  </label>
                </span>
                {getFormErrorMessage('name')}
              </div>
              <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      'p-invalid': isFormFieldValid('email'),
                    })}
                  />
                  <label
                    htmlFor="email"
                    className={classNames({
                      'p-error': isFormFieldValid('email'),
                    })}
                  >
                    Email*
                  </label>
                </span>
                {getFormErrorMessage('email')}
              </div>
              <div className="p-field">
                <span className="p-float-label">
                  <Dropdown
                    id="product"
                    name="product"
                    value={formik.values.product}
                    onChange={formik.handleChange}
                    options={products}
                    optionLabel="name"
                  />
                  <label htmlFor="product">Product</label>
                </span>
              </div>
              <div className="p-field">
                <span className="p-float-label">
                  <InputTextarea
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    rows="4"
                    autoFocus
                    className={classNames({
                      'p-invalid': isFormFieldValid('description'),
                    })}
                  />
                  <label
                    htmlFor="description"
                    className={classNames({
                      'p-error': isFormFieldValid('description'),
                    })}
                  >
                    Description*
                  </label>
                </span>
                {getFormErrorMessage('description')}
              </div>
              <div className="p-field-checkbox">
                <Checkbox
                  inputId="accept"
                  name="accept"
                  checked={formik.values.accept}
                  onChange={formik.handleChange}
                  className={classNames({
                    'p-invalid': isFormFieldValid('accept'),
                  })}
                />
                <label
                  htmlFor="accept"
                  className={classNames({
                    'p-error': isFormFieldValid('accept'),
                  })}
                >
                  <Button
                    label="I agree to the privacy policy*"
                    onClick={showTerms}
                    className="p-button-text p-button-plain"
                  />
                </label>
              </div>

              <Button
                type="submit"
                onClick={formik.handleSubmit}
                label="Submit"
                className="p-mt-2"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
