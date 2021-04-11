import React from 'react'
import contenful from '../../../images/contentful.svg'
import gatsby from '../../../images/gatsby.svg'
import react from '../../../images/react.svg'
import aws from '../../../images/aws.svg'
import graphql from '../../../images/graphql.svg'
import netlify from '../../../images/netlify.svg'
import prismic from '../../../images/prismic.svg'
import nodejs from '../../../images/nodejs-icon.svg'

const HomeTech = () => {
  return (
    <section className="section-tech p-d-flex p-flex-column p-jc-center p-ai-center p-my-6 p-mx-3">
      <div
        style={{ maxWidth: '1050px' }}
        className="p-mb-6 p-d-flex p-flex-column p-ai-start"
      >
        <h2>Technologies I use</h2>
        <p>
          JAMstack technologies I use to push your business forward.
          <br />
          Until recently, creating dynamic websites with tools like Wordpress
          was common practice. Compared to modern technologies though, today
          this approach oftentimes seems inflexible and clunky, especially
          regarding the performance of the resulting website.
          <br />
          Javascript libraries like React and modern Front End Frameworks like
          Next.js or Gatsby allow for the creation of static assets (or server
          side rendering) with all the possibilities dynamic web apps offer. So
          you'll get the best of both worlds. That entails a range of
          advantages, especially regarding the performance, the flexibility, the
          security, the scalability and the costs of the resulting website. All
          while content creators - through the integration of a Headless CMS
          like Prismic or Contentful - have the possibility, to flexibly adjust
          all of the content based on their requirements.
        </p>
      </div>
      <div className="tech-stack p-grid p-jc-center p-ai-center">
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://reactjs.org/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={react}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>ReactJS</p>
            <p>#1 Frontend ecosystem</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.gatsbyjs.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={gatsby}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>GatsbyJS</p>
            <p>Great for static site generation with React</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://prismic.io/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={prismic}
              style={{ maxWidth: '100px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>Prismic</p>
            <p>the headless CMS preferred by content creators</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.contentful.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={contenful}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>Contentful</p>
            <p>the headless CMS preferred by enterprises</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://nodejs.org/en/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={nodejs}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>NodeJS</p>
            <p>Best serverless support</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://graphql.org/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={graphql}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>GraphQL</p>
            <p>the future of APIs</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.netlify.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={netlify}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>Netlify</p>
            <p>the most hands-off hosting solution</p>
          </a>
        </div>
        <div className="p-col-6 p-md-3 p-jc-center p-ai-center">
          <a
            style={{ textDecoration: 'none' }}
            href="https://aws.amazon.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={aws}
              style={{ maxWidth: '50px', width: '100%' }}
              alt="Powered by Contentful"
            />
            <p>AWS</p>
            <p>Most versatile cloud service</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeTech
