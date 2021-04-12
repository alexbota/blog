import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import styles
import '../styles/Blog.sass'
// import SEO
import SEO from '../components/seo'
// import graphql
import { graphql } from 'gatsby'
// import components
import Article from '../components/blog/article'

const Blog = (props) => {
  return (
    <DefaultLayout>
      <SEO title="Alex Bota | Blog" keywords={[`blog`]} />
      <section className="section-blog p-d-flex p-flex-column p-ai-center p-jc-center p-px-3">
        <div className="blog-header p-d-flex p-flex-column p-flex-md-row p-ai-center p-jc-between p-mb-3">
          <h1>Blog</h1>
          <p style={{ margin: '0' }}>
            <a
              style={{ textDecoration: 'none', color: 'inherit' }}
              href="https://twitter.com/vladalexbota"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on Twitter <i className="pi pi-twitter"></i>
            </a>
          </p>
        </div>
        <p className="p-mb-6">
          I blog my technical thoughts, my vision for the products I create and
          my involvement in web development
        </p>
        {props.data.articles.edges.map((article) => (
          <Article
            key={article.node.slugs[0]}
            slug={article.node.slugs[0]}
            data={article.node.data}
          />
        ))}
      </section>
    </DefaultLayout>
  )
}

export default Blog

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          slugs
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
            date
          }
        }
      }
    }
  }
`
