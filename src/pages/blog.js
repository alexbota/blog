import React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import styles
import '../styles/Blog.sass'
// import SEO
import SEO from '../components/seo'

const Blog = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Alex Bota | Blog"
        keywords={[`web development blog`, `alex bota blog`]}
      />
      <section className="blog-header p-d-flex p-flex-column p-jc-end p-ai-start">
        <h1 className="p-mx-6">Blog Posts</h1>
      </section>
      <section className="blog-content p-mx-6">
        <h2>More content coming soon...</h2>
      </section>
    </DefaultLayout>
  )
}

export default Blog
