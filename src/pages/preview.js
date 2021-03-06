import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { graphql, useStaticQuery } from 'gatsby'

import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'

  return <p>Loading</p>
}

const Preview = (props) => {
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "gatsby-source-prismic" }) {
        pluginOptions {
          repositoryName
        }
      }
    }
  `)
  const { repositoryName } = data.sitePlugin.pluginOptions
  return withPreviewResolver(PreviewPage, {
    repositoryName,
    linkResolver: () => (doc) => linkResolver(doc),
  })(props)
}

export default Preview
