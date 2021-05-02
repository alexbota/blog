import React from 'react'
import { navigate } from 'gatsby'
import linkResolver from '../../../utils/linkResolver'
import './index.scss'

const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang
  const currentLangOption = (
    <option value={currentLang}>{currentLang.slice(0, 2).toUpperCase()}</option>
  )

  console.log(activeDocMeta.alternateLanguages[0])

  const alternateLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) => (
      <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
        {altLang.lang.slice(0, 2).toUpperCase()}
      </option>
    )
  )

  const handleLangChange = (e) => {
    navigate(e.target.value)
  }
  return (
    <li className="select-dropdown p-mx-4">
      <select value={currentLang} onChange={handleLangChange}>
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </li>
  )
}

export default LanguageSwitcher
