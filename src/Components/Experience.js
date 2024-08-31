import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import JobIcon from '../Assets/Images/JobIcon'
import Experiencedata from '../Data/Experiencedata';
const Experience = () => {
  return (
    <>
      <Timeline >
        {Experiencedata.map((item, index) =>
          <TimelineEvent
            key={index}
            className='experience-card'
            style={{
              boxShadow: 'none',
              border: 0,
              padding: 0,
            }}
            createdAt={<h3>{item.position} · {item.company}</h3>}
            title={<span className='text-gray'>{item.dateduration} · {item.monthduration}</span>}
            icon={<JobIcon />}
            collapsible
            showContent
          >
            <ExperienceCard data={item} />
          </TimelineEvent>)}
      </Timeline>


    </>
  )
}

export default Experience