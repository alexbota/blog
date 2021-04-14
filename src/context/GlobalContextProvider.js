import React, { useState, useContext, useRef, useEffect } from 'react'
import firebase from '../firebase/firebaseConfig'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    message: '',
    project: '',
  })
  const [scrolled, setScrolled] = useState(false)
  const [offset, setOffset] = useState(0)
  const [visibleLeft, setVisibleLeft] = useState(false)
  const submitSuccess = useRef(null)

  const handleScroll = () => {
    setOffset(window.scrollY)
    if (offset >= 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
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
        person,
        scrolled,
        submitSuccess,
        visibleLeft,
        setVisibleLeft,
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
