import './index.scss'

import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import linkResolver from '../../../utils/linkResolver'
import { navigate } from 'gatsby'

const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang

  const alternateLangOptions = [
    {
      name: activeDocMeta.alternateLanguages[0].lang.slice(0, 2).toUpperCase(),
    },
  ]

  const handleLangChange = () => {
    navigate(linkResolver(activeDocMeta.alternateLanguages[0]))
  }

  return (
    <Dropdown
      value={currentLang}
      options={alternateLangOptions}
      onChange={handleLangChange}
      optionLabel="name"
      placeholder={currentLang.slice(0, 2).toUpperCase()}
    />
  )
}

export default LanguageSwitcher
