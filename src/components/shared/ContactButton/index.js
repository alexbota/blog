import React from 'react'
// import styles
import './index.sass'
// import components
import { Link } from 'gatsby'

const ContactButton = () => {
  return (
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">
      <button className="btn contact-btn">
        <span className="btn-text">CONTACT ME</span>
      </button>
    </Link>
  )
}

export default ContactButton
