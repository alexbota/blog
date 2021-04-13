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
                <p>Create specs and get an estimate.</p>
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
                Creation of a clickable prototype
              </div>
              <div className="timeline__event__description">
                <p>
                  A working website is not enough - it also needs to look great
                  and provide to your visitors a great experience.
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
              <div className="timeline__event__title">
                I'm ready to help you
              </div>
              <div className="timeline__event__description">
                <p>
                  Regardless of whether you need to plan an idea for a new
                  website or audit the quality of an existing one.
                </p>
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
                Keep your app up-to-date and secure.
              </div>
              <div className="timeline__event__description">
                <p>Improve it based on user feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWorkflow
