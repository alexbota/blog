import React from 'react'
// import components
import { Card } from 'primereact/card'
import undraw_pen from '../../../images/undraw_pen.svg'
import undraw_react from '../../../images/undraw_react.svg'
import undraw_search from '../../../images/undraw_search.svg'

const HomeServices = () => {
  const header1 = (
    <img
      alt="illustration"
      src={undraw_pen}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header2 = (
    <img
      alt="illustration"
      src={undraw_react}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  const header3 = (
    <img
      alt="illustration"
      src={undraw_search}
      width="300"
      height="250"
      className="p-p-5"
    />
  )

  return (
    <section
      id="services"
      className="section-services p-d-flex p-flex-column p-justify-center p-ai-center"
    >
      <div className="card-container p-grid p-m-0 p-justify-center">
        <Card
          className="service-card first-card p-col-12 p-md-4"
          title="Web Design"
          header={header1}
        >
          <p className="p-m-0">
            My approach to website design is to create a website which
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience. The website design process starts with
            the page layouts, wire-frames sitemaps and menu structures. Feedback
            on the design concepts is essential before the start of the
            development process.
          </p>
        </Card>
        <Card
          className="service-card p-col-12 p-md-4"
          title="Front-end Development"
          header={header2}
        >
          <p className="p-m-0">
            Responsive websites build for an optimal user experience that
            achieves your business goals. The audience should have an enjoyable
            positive experience when using your website, ensuring ease of use
            and simplicity is very important.
          </p>
        </Card>
        <Card
          className="service-card last-card p-col-12 p-md-4"
          title="SEO"
          header={header3}
        >
          <p className="p-m-0">
            SEO (Search Engine Optimisation) is the practice of improving the
            quality and quantity of website traffic, as well as exposure to your
            brand, through non-paid (known as “organic”) search engine results.
            The websites that Google lists have been fully optimised to show up
            for those specific keywords.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default HomeServices
