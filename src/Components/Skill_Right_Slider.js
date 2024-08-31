import React from 'react';
import Skill_Right_API from './Skill_Right_API';
import Slider from "react-slick";

const Skill_Right_Slider = () => {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        // pauseOnHover: true,
        cssEase: 'linear',
        
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
    };

  return (
    <div className='skill-right-slider'>
        <Slider {...settings}>
        {
            Skill_Right_API.map((val,index) => {
                return (
                    <div key={index} className='skill-one'>
                        <div className='skill-icon'>
                        <img src={val.icon} alt="React" />    
                        </div>
                        
                        <h6>{val.iconName}</h6>
                    </div>
                )
            })
        }
        </Slider>
    </div>
  )
}
export default Skill_Right_Slider;