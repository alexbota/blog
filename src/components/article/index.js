import React from 'react'
import { Link } from 'gatsby'
// import components
import { Card } from 'primereact/card'

const Article = (props) => {
  const header = (
    <img
      style={{
        maxWidth: '400px',
        height: 'auto',
      }}
      src={props.data.image.url}
      alt={props.data.image.alt}
      width="951"
      height="830"
      onError={(e) =>
        (e.target.src =
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
      }
    />
  )

  return (
    <Card
      title={props.data.title[0].text}
      style={{ maxWidth: '43rem' }}
      header={header}
      className="p-d-flex p-flex-column p-ai-center p-mb-6 p-p-5"
    >
      <p className="p-m-0" style={{ lineHeight: '1.5' }}>
        {props.data.paragraph[0].text.substring(0, 180)} ...{' '}
        <Link className="read-more" to={`/blog/${props.slug}`}>
          Read More
        </Link>
      </p>
    </Card>
  )
}

export default Article
