import React from 'react'
// import context
import { useGlobalContext } from '../../../context/GlobalContextProvider'
// import components
import { Card } from 'primereact/card'

const HomeServices = () => {
  const { services } = useGlobalContext()

  return (
    <>
      {services.map((service) => {
        const { id, title, illustration, description } = service
        const header = (
          <img
            alt="Card"
            src={illustration}
            width="300"
            height="250"
            className="p-p-5"
          />
        )
        return (
          <Card
            key={id}
            className="service-card p-col-12 p-md-4"
            title={title}
            header={header}
          >
            <p className="p-m-0">{description}</p>
          </Card>
        )
      })}
    </>
  )
}

export default HomeServices
