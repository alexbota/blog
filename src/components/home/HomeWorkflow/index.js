import './index.scss'

import { Card } from 'primereact/card';
import React from 'react'
import { Timeline } from 'primereact/timeline';

const HomeWorkflow = ({ data }) => {
  const { workshop, prototype, kickoff, develop, maintenance } = data.list
 const events1 = [
        { title: workshop.title, subtitle: workshop.subtitle, description: workshop.description, icon: 'pi pi-check-circle', color: '#2196F3' },
        { title: prototype.title, subtitle: prototype.subtitle, description: prototype.description, icon: 'pi pi-check-circle', color: '#2196F3' },
        { title: kickoff.title, subtitle: kickoff.subtitle, description: kickoff.description, icon: 'pi pi-check-circle', color: '#2196F3' },
        { title: develop.title, subtitle: develop.subtitle, description: develop.description, icon: 'pi pi-check-circle', color: '#2196F3' },
        { title: maintenance.title, subtitle: maintenance.subtitle, description: maintenance.description, icon: 'pi pi-check-circle', color: '#2196F3' }
    ];

 const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

 const customizedContent = (item) => {
        return (
            <Card title={item.title} subTitle={item.subtitle}>
                { item.image && <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>{item.description}</p>
            </Card>
        );
    };

  return (
    <section className="home-section section-workflow p-my-6">
      <h2>{data.title}</h2>
      <div className="timeline p-d-flex p-jc-center">
            <div className="card">
                <h5>Workflow</h5>
                <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
      </div>
    </section>
  )
}

export default HomeWorkflow
