import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Timeline, TimelineEvent } from "react-event-timeline";
import JobIcon from "../Assets/Images/JobIcon";
import Experiencedata from "../Data/Experiencedata";
const Experience = () => {
  return (
    <>
      <Timeline>
        {Experiencedata.map((item, index) => (
          <TimelineEvent
            iconColor="rgb(8 126 164/1)"
            orientation="1px"
            key={index}
            className="experience-card "
            style={{
              boxShadow: "none",
              border: 0,
              padding: 0,
            }}
            createdAt={
              <h3>
                <span className="title-primary">{item.position}</span> · {item.company}
              </h3>
            }
            title={
              <span className="text-gray">
                {item.dateduration} · {item.monthduration}
              </span>
            }
            icon={<JobIcon />}
            collapsible
            showContent
          >
            <ExperienceCard data={item} />
          </TimelineEvent>
        ))}
      </Timeline>
    </>
  );
};

export default Experience;
