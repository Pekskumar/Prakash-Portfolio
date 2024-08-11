import React from 'react';
// import Section_heading from './Section_heading';
// import Skill_Right_Slider from './Skill_Right_Slider';
// import Skill_left_Slider from './Skill_left_Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill_Right_Slider from './Skill_Right_Slider';
import Skill_left_Slider from './Skill_left_Slider';


const Skills = () => {
  return (
    <section className='skills gp'>       
        <div className='skill-inner'>
            <Skill_Right_Slider />
            <Skill_left_Slider />
        </div>
        
    </section>
  )
}
export default Skills;