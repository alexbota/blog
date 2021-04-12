import React from 'react'
import './index.scss'
import { GrWorkshop } from 'react-icons/gr'
import { FaPenNib } from 'react-icons/fa'
import { FcBinoculars } from 'react-icons/fc'
import { FaCode } from 'react-icons/fa'
import { GrHostMaintenance } from 'react-icons/gr'

const HomeWorkflow = () => {
  return (
    <section className="section-workflow p-my-6 p-mx-3">
      <div className="p-d-flex p-jc-center">
        <h2 style={{ maxWidth: '1050px' }}>
          I deploy agile products on demand. Work with you to design, build,
          ship and scale your website in the most efficient way. Here’s my
          workflow.
        </h2>
      </div>
      <div className="p-my-6">
        <div className="timeline">
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <GrWorkshop />
              </i>
            </div>
            <div className="timeline__event__date">Workshop</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">Clarify the vision</div>
              <div className="timeline__event__description">
                <p>Create specs and get an estimate</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              <i>
                <FaPenNib />
              </i>
            </div>
            <div className="timeline__event__date">Prototype</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Create a clickable prototype
              </div>
              <div className="timeline__event__description">
                <p>
                  Design delightful user experiences for your website and
                  applications. Improve your business metrics through beautiful
                  interfaces and software your customers love.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
              <i>
                <FcBinoculars />
              </i>
            </div>
            <div className="timeline__event__date">Kickoff</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">The big game</div>
              <div className="timeline__event__description">
                <p>Get to know the tools and the process</p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <FaCode />
              </i>
            </div>
            <div className="timeline__event__date">Develop</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                See your product come alive in demos
              </div>
              <div className="timeline__event__description">
                <p>
                  Create user-friendly, beautiful, fast and secure applications
                  that meet the needs of your business goals and clients
                  personas.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i>
                <GrHostMaintenance />
              </i>
            </div>
            <div className="timeline__event__date">Maintenance</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Keep your app up-to-date and secure.{' '}
              </div>
              <div className="timeline__event__description">
                <p>
                  Improve it based on user feedback Keep your app up-to-date and
                  secure. Improve it based on user feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWorkflow
