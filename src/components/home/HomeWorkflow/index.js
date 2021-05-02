import React from 'react'
import './index.scss'
import { GrWorkshop } from 'react-icons/gr'
import { FaPenNib } from 'react-icons/fa'
import { FcBinoculars } from 'react-icons/fc'
import { FaCode } from 'react-icons/fa'
import { GrHostMaintenance } from 'react-icons/gr'

const HomeWorkflow = ({ data }) => {
  return (
    <section className="home-section section-workflow p-my-6">
      <div className="p-d-flex p-jc-center">
        <h2>{data.title}</h2>
      </div>
      <div className="p-my-6">
        <div className="timeline">
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <GrWorkshop />
              </i>
            </div>
            <div className="timeline__event__date">
              {data.list.workshop.title}
            </div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">
                {data.list.workshop.subtitle}
              </div>
              <div className="timeline__event__description">
                <p>{data.list.workshop.description}</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              <i>
                <FaPenNib />
              </i>
            </div>
            <div className="timeline__event__date">
              {data.list.prototype.title}
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                {data.list.prototype.subtitle}
              </div>
              <div className="timeline__event__description">
                <p>{data.list.prototype.description}</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
              <i>
                <FcBinoculars />
              </i>
            </div>
            <div className="timeline__event__date">
              {data.list.kickoff.title}
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                {data.list.kickoff.subtitle}
              </div>
              <div className="timeline__event__description">
                <p>{data.list.kickoff.description}</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <FaCode />
              </i>
            </div>
            <div className="timeline__event__date">
              {data.list.develop.title}
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                {data.list.develop.subtitle}
              </div>
              <div className="timeline__event__description">
                <p>{data.list.develop.description}</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <GrHostMaintenance />
              </i>
            </div>
            <div className="timeline__event__date">
              {data.list.maintenance.title}
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                {data.list.maintenance.subtitle}
              </div>
              <div className="timeline__event__description">
                <p>{data.list.maintenance.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWorkflow
