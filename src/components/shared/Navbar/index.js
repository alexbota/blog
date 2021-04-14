import React from 'react'
// impost styles
import './index.sass'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Link } from 'gatsby'
import Logo from '../Logo/Logo'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

const Navbar = () => {
  const { scrolled, visibleLeft, setVisibleLeft } = useGlobalContext()

  return (
    <>
      <nav
        className={
          scrolled
            ? 'navbar  navbar-active p-d-flex p-ai-center'
            : 'navbar p-d-flex p-ai-center'
        }
        role="presentation"
      >
        <span className="navbar-toggle">
          <Button
            icon="pi pi-bars"
            onClick={(e) => setVisibleLeft(true)}
            className="p-button-text"
          />
        </span>
        <Logo className="logo" />
        <ul className="main-nav">
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-links">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <ul>
          <li>
            <Link
              style={{ fontSize: '1.2rem' }}
              to="/"
              className="nav-links"
              onClick={() => setVisibleLeft(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: '1.2rem' }}
              to="/blog"
              className="nav-links"
              onClick={() => setVisibleLeft(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: '1.2rem' }}
              to="/contact"
              className="nav-links"
              onClick={() => setVisibleLeft(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Sidebar>
    </>
  )
}

export default Navbar
