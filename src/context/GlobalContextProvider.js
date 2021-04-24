import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [person, setPerson] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  //   product: '',
  // })
  const [visibleLeft, setVisibleLeft] = useState(false)

  // const handleChange = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setPerson({
  //     ...person,
  //     [name]: value,
  //     id: new Date().getTime().toString(),
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (person.name && person.email && person.message && person.product) {
  //     const messagesRef = firebase.database.ref('messages')
  //     const newMessageRef = messagesRef.push()
  //     newMessageRef.set({
  //       name: person.name,
  //       email: person.email,
  //       message: person.message,
  //       project: person.product,
  //     })
  //     setPerson({ name: '', email: '', message: '', id: '' })
  //   }
  // }

  return (
    <AppContext.Provider
      value={{
        visibleLeft,
        setVisibleLeft,
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
