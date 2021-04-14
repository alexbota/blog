import React from 'react'
import { Link } from 'gatsby'
import LogoSvg from '../../../images/Logo.svg'

// styles
const logoStyles = {
  display: 'flex',
  fontSize: '22px',
  marginLeft: '20px',
}

// component
export default function Logo() {
  return (
    <Link style={logoStyles} to="/" aria-label="back home" className="logo">
      <img src={LogoSvg} alt="" width="45" height="45" />
    </Link>
  )
}
