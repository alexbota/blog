import './index.sass'

import React, { useState } from 'react'

import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import PrivacyPolicyIt from '../PrivacyPolicy/PrivacyPolicyIt'
import axios from 'axios'
import { classNames } from 'primereact/utils'
import { useFormik } from 'formik'

const ContactFormIt = () => {
  const products = [
    { name: 'Marketing website' },
    { name: 'Landing page' },
    { name: 'E-commerce' },
    { name: 'Applicazione Web' },
    { name: 'Altro' },
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
        errors.name = 'Il nome è obbligatorio.'
      }

      if (!data.email) {
        errors.email = "L'email è obbligatoria."
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = 'Indirizzo email invalido. E.x. esempio@email.com'
      }

      if (!data.description) {
        errors.description = 'La descrizione è obbligatoria.'
      }

      if (!data.accept) {
        errors.accept = 'Devi accettare la politica sulla privacy.'
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
        header="Politica sulla privacy"
        visible={displayTerms}
        footer={termsDialogFooter}
        onHide={onHide}
      >
        <PrivacyPolicyIt />
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
            <h5>Iniziamo!</h5>
            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
              Grazie per avermi contattato <b>{formData.name}</b> ; Non vedo l'ora di scoprire di più sul tuo progetto. Attendi la mia risposta tra poche ore all'indirizzo <b>{formData.email}</b>.
            </p>
          </div>
        </Dialog>

        <div className="p-d-flex p-jc-center">
          <div className="card">
            <h5 className="p-text-center">Parliamo del tuo progetto.</h5>
            <form className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
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
                    Nome*
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
                  <label htmlFor="product">Prodotto</label>
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
                    Descrizione*
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
                    label="Accetto la politica sulla privacy*"
                    onClick={showTerms}
                    className="p-button-text p-button-plain"
                  />
                </label>
              </div>

              <Button
                type="submit"
                onClick={formik.handleSubmit}
                label="Invio"
                className="p-mt-2"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactFormIt
