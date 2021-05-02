import * as React from 'react'
// import layouts
import DefaultLayout from '../components/layouts'
// import components
import { Link } from 'gatsby'
import { Button } from 'primereact/button'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import Blog from '../templates/Blog'

const Page404 = () => (
  <DefaultLayout>
    <section className="section-error p-d-flex p-flex-column p-jc-center p-ai-center">
      <h1 style={{ fontSize: '2rem' }}>Oops! It's a dead end</h1>
      <Link className="go-back-btn" to="/">
        <Button
          label="Back Home"
          className="p-button-rounded p-button-warning p-button-lg"
        />
      </Link>
    </section>
  </DefaultLayout>
)

export default withUnpublishedPreview(Page404, {
  templateMap: { blogHome: Blog },
})
