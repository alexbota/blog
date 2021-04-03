import React, { Component } from 'react'
// import gatsby plugins
import { graphql } from 'gatsby'
// import layout
import DefaultLayout from '../components/layouts'
// import SEO
import SEO from '../components/seo'
// import components
import ArticleDetail from '../components/articleDetail'

class Post extends Component {
  render() {
    const { data } = this.props.data.post
    const title = data.title[0].text

    return (
      <DefaultLayout>
        <SEO title={`My blog | ${title}`} keywords={[`blog`]} />
        <ArticleDetail
          title={title}
          image={data.image.url}
          paragraph={data.paragraph[0].text}
          alt={data.image.alt}
        />
      </DefaultLayout>
    )
  }
}

export default Post

export const postQuery = graphql`
  query Post($slug: String) {
    post: prismicArticle(id: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        image {
          url
          alt
        }
        paragraph {
          text
        }
      }
    }
  }
`
