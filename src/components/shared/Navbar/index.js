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
import LanguageSwitcher from '../LanguageSwitcher'

const Navbar = ({ activeDocMeta }) => {
  const { visibleLeft, setVisibleLeft } = useGlobalContext()
  return (
    <>
      <nav className="navbar p-d-flex p-ai-center" role="presentation">
        <span className="navbar-toggle">
          <Button
            aria-label="open navbar"
            icon="pi pi-bars"
            onClick={(e) => setVisibleLeft(true)}
            className="p-button-text"
          />
        </span>
        <Logo className="logo" />
        <ul className="main-nav">
          <li>
            <Link to={`${activeDocMeta.uid}`} className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/blog${activeDocMeta.uid}`} className="nav-links">
              Blog
            </Link>
          </li>
          <li>
            <Link to={`${activeDocMeta.uid}contact`} className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
      </nav>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <ul>
          <li>
            <Link
              style={{ fontSize: '1.5rem' }}
              to={`${activeDocMeta.uid}`}
              className="nav-links"
              onClick={() => setVisibleLeft(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: '1.5rem' }}
              to={`/blog${activeDocMeta.uid}`}
              className="nav-links"
              onClick={() => setVisibleLeft(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: '1.5rem' }}
              to={`${activeDocMeta.uid}contact`}
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
