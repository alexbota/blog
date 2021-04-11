import React from 'react'
// import styles
import './index.sass'

const Laptop = ({ url }) => {
  return (
    <div className="macbook">
      <div className="screen">
        <div
          className="viewport"
          style={{
            backgroundImage: `url("${url}")`,
          }}
        />
      </div>
      <div className="base" />
      <div className="notch" />
    </div>
  )
}

export default Laptop
