import React, { useState, useContext, useRef, useEffect } from 'react'
import projects_data from '../data/projects'
import firebase from '../firebase/firebaseConfig'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false)
  const projects = projects_data
  const [person, setPerson] = useState({ name: '', email: '', message: '' })
  const [scrolled, setScrolled] = useState(false)
  const [offset, setOffset] = useState(0)
  const submitSuccess = useRef(null)

  const handleScroll = () => {
    setOffset(window.scrollY)
    if (offset <= 480) {
      setScrolled(true)
    } else {
      setScrolled(false)
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
    if (person.name && person.email && person.message) {
      const messagesRef = firebase.database.ref('messages')
      const newMessageRef = messagesRef.push()
      newMessageRef.set({
        name: person.name,
        email: person.email,
        message: person.message,
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
        projects,
        person,
        scrolled,
        submitSuccess,
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
