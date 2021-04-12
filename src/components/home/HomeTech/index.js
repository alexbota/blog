import React from 'react'
// import assets
import contenful_icon from '../../../images/contentful.svg'
import gatsby_icon from '../../../images/gatsby.svg'
import react_icon from '../../../images/react.svg'
import aws_icon from '../../../images/aws.svg'
import graphql_icon from '../../../images/graphql.svg'
import netlify_icon from '../../../images/netlify.svg'
import prismic_icon from '../../../images/prismic.svg'
import nodejs_icon from '../../../images/nodejs-icon.svg'

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
        {technologies.map((tech) => {
          return (
            <div
              key={tech.id}
              className="p-col-6 p-md-3 p-jc-center p-ai-center"
            >
              <a
                style={{ textDecoration: 'none' }}
                href={tech.url}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={tech.image}
                  style={{ width: '100%', maxWidth: '50px' }}
                  alt={tech.technology}
                />
                <p>{tech.technology}</p>
                <p>{tech.description}</p>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeTech

const technologies = [
  {
    id: 1,
    technology: 'React',
    description: '#1 Frontend ecosystem',
    image: react_icon,
    url: 'https://reactjs.org/',
  },
  {
    id: 2,
    technology: 'GatsbyJS',
    description: 'Great for static site generation with React',
    image: gatsby_icon,
    url: 'https://www.gatsbyjs.com/',
  },
  {
    id: 3,
    technology: 'Prismic',
    description: 'the headless CMS preferred by content creators',
    image: prismic_icon,
    url: 'https://prismic.io/',
  },
  {
    id: 4,
    technology: 'Contentful',
    description: 'the headless CMS preferred by enterprises',
    image: contenful_icon,
    url: 'https://www.contentful.com/',
  },
  {
    id: 5,
    technology: 'NodeJS',
    description: 'Best serverless support',
    image: nodejs_icon,
    url: 'https://nodejs.org/en/',
  },
  {
    id: 6,
    technology: 'GraphQL',
    description: 'the future of APIs',
    image: graphql_icon,
    url: 'https://graphql.org/',
  },
  {
    id: 7,
    technology: 'Netlify',
    description: 'the most hands-off hosting solution',
    image: netlify_icon,
    url: 'https://www.netlify.com/',
  },
  {
    id: 8,
    technology: 'AWS',
    description: 'Most versatile cloud service',
    image: aws_icon,
    url: 'https://aws.amazon.com/',
  },
]
