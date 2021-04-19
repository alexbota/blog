import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'
import { Card } from 'primereact/card'

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // // Find the first text slice of post's body
  const firstTextSlice = post.body.find((slice) => slice.slice_type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 300
    const text = RichText.asText(firstTextSlice.primary.text.raw)
    const limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
      )
    }
    // If it's shorter than the limit, just show it normally
    return <p>{text}</p>
  }
  // If there are no slices of type 'text', return nothing
  return null
}

// A summary of the blog Post
const PostSummary = ({ post, id }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(postDate)
    : ''

  // // Default title when post has no title set
  const defaultTitle = 'Untitled'
  return (
    <Card key={id} className="p-mb-5">
      <h2>
        {/* We render a link to a particular post
         * using the linkResolver for the url and its title */}
        <Link to={post.node.url}>
          {RichText.asText(post.node.data.title.raw).length !== 0
            ? RichText.asText(post.node.data.title.raw)
            : defaultTitle}
        </Link>
      </h2>
      <p>
        <time>{postDate}</time>
      </p>
      {/* Renders a small preview of the post's text */}
      {firstParagraph(post.node.data)}
    </Card>
  )
}

const BlogPosts = ({ posts }) => {
  if (!posts) return null
  return (
    <div>
      {posts.map((post) => (
        <PostSummary post={post} key={post.node.id} />
      ))}
    </div>
  )
}

export default BlogPosts
