import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import BlogPosts from '../components/blog/BlogPosts'
import SEO from '../components/seo'
import DefaultLayout from '../components/layouts'

// Using the queried blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {
  const avatar = { backgroundImage: `url(${home.image.url})` }
  return (
    <div className="home-header p-mb-6" data-wio-id={home.id}>
      <div className="blog-avatar" style={avatar} />
      <div className="p-d-flex p-jc-between p-ai-center">
        <h1 className="text-lg">{RichText.asText(home.headline)}</h1>
        <a target="_blank" rel="noreferrer" href={home.twitter.url}>
          Follow me on Twitter <i className="pi pi-twitter" />
        </a>
      </div>
      <p>{RichText.asText(home.description)}</p>
    </div>
  )
}

const BloghomeTemplate = ({ data }) => {
  if (!data) return null
  // Define the blog Home & blog Post content returned from Prismic
  const home = data.prismicBloghome.data || {}
  const posts = data.allPrismicPost.edges || {}
  const { lang, type } = data.prismicBloghome
  const alternateLanguages = data.prismicBloghome.alternate_languages || []
  const uid = lang === 'en-us' ? '/' : '/it-it/'
  const activeDoc = {
    uid,
    lang,
    type,
    alternateLanguages,
  }

  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO
        title="Alex Bota | Blog"
        keywords={[`blog`]}
        lang={lang.slice(0, 2)}
      />
      <section className="section-blog p-d-flex p-jc-center p-mx-2">
        <div style={{ maxWidth: '45rem' }}>
          <BlogHomeHead home={home} />
          <BlogPosts posts={posts} />
        </div>
      </section>
    </DefaultLayout>
  )
}

// Query for the blog Home content in Prismic
export const query = graphql`
  query MyQuery($lang: String) {
    prismicBloghome(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      id
      lang
      type
      data {
        description {
          text
        }
        twitter {
          url
        }
        headline {
          text
        }
        image {
          url
        }
      }
    }
    allPrismicPost(
      filter: { lang: { eq: $lang } }
      sort: { fields: data___date, order: DESC }
    ) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default withPreview(BloghomeTemplate)
