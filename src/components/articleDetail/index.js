import React from 'react'
// import styles
import './index.sass'

const Index = (props) => {
  const { title, image, paragraph, alt } = props
  return (
    <>
      <article className="p-d-flex p-flex-column p-ai-center">
        <h2>{title}</h2>
        <img src={image} alt={alt} width="951" height="830" />
        <p>{paragraph}</p>
      </article>
    </>
  )
}

export default Index
