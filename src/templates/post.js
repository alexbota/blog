import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import SEO from '../components/seo'
import DefaultLayout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/blog/slices'

// Query for the blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery($uid: String, $lang: String) {
    prismicPost(lang: { eq: $lang }, uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
        }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                raw
              }
            }
          }
        }
      }
    }
  }
`

// Sort and display the different slice options
const PostSlices = ({ slices }) =>
  slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Quote slice={slice} />
            </div>
          )

        case 'image_with_caption':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <ImageCaption slice={slice} />
            </div>
          )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const PostBody = ({ blogPost, activeDoc }) => {
  return (
    <article className="section-post p-d-flex p-jc-center p-mx-2">
      <div className="post-wrapper">
        <div className="container post-header">
          <div className="back">
            <Link to={`/blog/${activeDoc.lang === 'en-us' ? '' : 'it-it'}`}>
              <i className="pi pi-angle-double-left p-mb-4" /> Back
            </Link>
          </div>
          <h1>
            {RichText.asText(blogPost.title.raw).length !== 0
              ? RichText.asText(blogPost.title.raw)
              : 'Untitled'}
          </h1>
        </div>
        {/* Go through the slices of the post and render the appropiate one */}
        <PostSlices slices={blogPost.body} />
      </div>
    </article>
  )
}

const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicPost.data
  const { lang, type } = data.prismicPost
  const alternateLanguages = data.prismicPost.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    alternateLanguages,
  }
  return (
    <DefaultLayout activeDocMeta={activeDoc}>
      <SEO
        title={`Alex Bota | ${post.title.raw[0].text}`}
        keywords={[`blog`]}
        lang={lang.slice(0, 2)}
      />
      <PostBody blogPost={post} activeDoc={activeDoc} />
    </DefaultLayout>
  )
}

export default withPreview(Post)
