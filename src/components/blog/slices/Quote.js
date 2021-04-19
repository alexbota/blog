import React from 'react'
import { RichText } from 'prismic-reactjs'

const Quote = ({ slice }) => (
  <div className="post-quote container">
    <blockquote>{RichText.asText(slice.primary.quote.raw)}</blockquote>
  </div>
)

export default Quote
