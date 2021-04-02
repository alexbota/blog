import React from 'react'
// impost styles
import './index.sass'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Link } from 'gatsby'
import Logo from '../Logo/Logo'

const Navbar = ({ scrolled }) => {
  const { dropdown, openDropdown, closeDropdown } = useGlobalContext()

  return (
    <nav
      className={scrolled ? 'navbar' : 'navbar navbar-active'}
      onMouseLeave={closeDropdown}
      onFocus={() => void 0}
      role="presentation"
    >
      <span className="navbar-toggle">
        <button
          className="menu-button"
          aria-label="open menu"
          onClick={openDropdown}
        >
          <i className="pi pi-bars"></i>
        </button>
      </span>
      <Logo className="logo" />
      <ul className={`${dropdown ? 'main-nav active' : 'main-nav'}`}>
        <li>
          <Link to="/" className="nav-links" onClick={closeDropdown}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className="nav-links" onClick={closeDropdown}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links" onClick={closeDropdown}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
