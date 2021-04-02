import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
// import components
import DefaultLayout from '../components/layouts'
import SEO from '../components/seo'
import ArticleDetail from '../components/articleDetail'

class Post extends Component {
  render() {
    const { data } = this.props.data.post
    const title = data.title[0].text

    return (
      <DefaultLayout>
        <SEO
          title={`My blog | ${title}`}
          keywords={[`blog`, `web development`, `alex bota`]}
        />
        <div className="blog-post">
          <Link to="/blog">
            <i className="pi pi-angle-double-left"></i> Blog
          </Link>
          <ArticleDetail
            title={title}
            image={data.image.url}
            paragraph={data.paragraph[0].text}
            alt={data.image.alt}
          />
        </div>
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
