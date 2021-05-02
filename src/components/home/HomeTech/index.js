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

const HomeTech = ({ data }) => {
  const technologies = [
    {
      id: 1,
      technology: 'React',
      description: data.list.react,
      image: react_icon,
      url: 'https://reactjs.org/',
    },
    {
      id: 2,
      technology: 'GatsbyJS',
      description: data.list.gatsbyjs,
      image: gatsby_icon,
      url: 'https://www.gatsbyjs.com/',
    },
    {
      id: 3,
      technology: 'Prismic',
      description: data.list.prismic,
      image: prismic_icon,
      url: 'https://prismic.io/',
    },
    {
      id: 4,
      technology: 'Contentful',
      description: data.list.contentful,
      image: contenful_icon,
      url: 'https://www.contentful.com/',
    },
    {
      id: 5,
      technology: 'NodeJS',
      description: data.list.nodejs,
      image: nodejs_icon,
      url: 'https://nodejs.org/en/',
    },
    {
      id: 6,
      technology: 'GraphQL',
      description: data.list.graphql,
      image: graphql_icon,
      url: 'https://graphql.org/',
    },
    {
      id: 7,
      technology: 'Netlify',
      description: data.list.netlify,
      image: netlify_icon,
      url: 'https://www.netlify.com/',
    },
    {
      id: 8,
      technology: 'AWS',
      description: data.list.aws,
      image: aws_icon,
      url: 'https://aws.amazon.com/',
    },
  ]

  return (
    <section className="home-section section-tech p-d-flex p-flex-column p-jc-center p-ai-center p-my-6">
      <div className="p-mb-6 p-d-flex p-flex-column p-ai-start">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
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
                  width="100"
                  height="100"
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
