import React, { useState, useContext, useRef, useEffect } from 'react'
import firebase from '../firebase/firebaseConfig'
import cocktail_project from '../images/cocktail_project.png'
import grocerybud_project from '../images/grocerybud_project.png'
import cart_project from '../images/cart_project.png'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false)
  const [person, setPerson] = useState({
    name: '',
    email: '',
    message: '',
    project: '',
  })
  const [scrolled, setScrolled] = useState(false)
  const [offset, setOffset] = useState(0)
  const [work, setWork] = useState(cocktail_project)
  const submitSuccess = useRef(null)

  const handleScroll = () => {
    setOffset(window.scrollY)
    if (offset <= 480) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const changeProject = (e) => {
    e.preventDefault()
    const name = e.target.value
    if (name === 'cocktaildb') {
      setWork(cocktail_project)
    } else if (name === 'grocerybud') {
      setWork(grocerybud_project)
    } else if (name === 'cart') {
      setWork(cart_project)
    }
  }

  const openDropdown = () => {
    if (dropdown === true) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const closeDropdown = () => {
    if (dropdown === true) {
      setDropdown(false)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({
      ...person,
      [name]: value,
      id: new Date().getTime().toString(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.name && person.email && person.message && person.project) {
      const messagesRef = firebase.database.ref('messages')
      const newMessageRef = messagesRef.push()
      newMessageRef.set({
        name: person.name,
        email: person.email,
        message: person.message,
        project: person.project,
      })
      submitSuccess.current.show({
        severity: 'success',
        summary: 'Submitted',
        detail: `Thank you ${person.name}`,
        life: 4000,
      })
      setPerson({ name: '', email: '', message: '', id: '' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <AppContext.Provider
      value={{
        dropdown,
        openDropdown,
        closeDropdown,
        person,
        scrolled,
        submitSuccess,
        work,
        changeProject,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
