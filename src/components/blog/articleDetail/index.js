import React from 'react'
// import styles
import './index.sass'
// import gatsby plugins
import { Link } from 'gatsby'

const Index = (props) => {
  const { title, image, paragraph, alt } = props
  return (
    <>
      <article className="article-detail p-d-flex p-flex-column p-jc-center">
        <Link to="/blog">
          <i className="pi pi-angle-double-left"></i> Blog
        </Link>
        <h2>{title}</h2>
        <img src={image} alt={alt} width="951" height="830" />
        <p>{paragraph}</p>
      </article>
    </>
  )
}

export default Index
