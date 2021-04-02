import React, { useState, useContext, useRef } from 'react'
import projects_data from '../data/projects'
import services_data from '../data/services'
import firebase from '../firebase/firebaseConfig'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false)
  const projects = projects_data
  const services = services_data
  const [person, setPerson] = useState({ name: '', email: '', message: '' })
  const submitSuccess = useRef(null)

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

  return (
    <AppContext.Provider
      value={{
        dropdown,
        openDropdown,
        closeDropdown,
        projects,
        services,
        person,
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
