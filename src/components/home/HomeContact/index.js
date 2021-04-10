import React from 'react'
import { Button } from 'primereact/button'
import { Link } from 'gatsby'

const HomeContact = () => {
  return (
    <section className="section-contact p-d-flex p-flex-row p-jc-center p-ai-center">
      <div className="p-d-flex p-flex-column p-flex-lg-row p-jc-center p-ai-center p-m-6">
        <div
          style={{ maxWidth: '500px' }}
          className="p-d-flex p-flex-column p-mr-6"
        >
          <h2>Interested? Let's talk!</h2>
          <p>
            I'm always looking for new and exciting projects to get involved
            with. Get in touch to see how I can help.
          </p>
        </div>
        <div style={{ maxWidth: '500px' }} className="p-ml-6">
          <Link to="/contact">
            <Button
              label="Get in touch"
              icon="pi pi-angle-right"
              iconPos="right"
              className="contact-btn p-button-lg"
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
