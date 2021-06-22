import React from 'react'
import { navigate } from 'gatsby'
import { Menubar } from 'primereact/menubar'
import LogoSvg from '../../../images/Logo.svg'
import LanguageSwitcher from '../LanguageSwitcher'

const Header = ({ activeDocMeta }) => {
  const items = [
    {
      label: 'Home',
      command: () => {
        navigate(`${activeDocMeta.uid}`)
      },
    },
    {
      label: 'Blog',
      command: () => {
        navigate(`/blog${activeDocMeta.uid}`)
      },
    },
    {
      label: 'Contact',
      command: () => {
        navigate(`${activeDocMeta.uid}contact`)
      },
    },
  ]

  const start = (
    <img
      alt="logo"
      src={LogoSvg}
      onError={(e) =>
        (e.target.src =
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
      }
      height="40"
      className="p-mr-2"
    ></img>
  )

  const end = <LanguageSwitcher activeDocMeta={activeDocMeta} />

  return (
    <Menubar
      style={{ position: 'fixed', zIndex: '10', width: '100vw', top: '0' }}
      model={items}
      start={start}
      end={end}
    />
  )
}

export default Header
