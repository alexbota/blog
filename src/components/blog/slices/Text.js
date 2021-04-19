import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../../GatsbyLink'

const Text = ({ slice }) => (
  <div className="post-text container">
    <div>
      <RichText
        render={slice.primary.text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </div>
)

export default Text
