import React from 'react'
import TestimonialCard from './TestimonialCard'
import TestimonialData from '../Data/Testimonial';

const Testimonial = () => {
    return (
        <div>
            <ul class="list__review">
                {TestimonialData.map((item, index) =>
                    <React.Fragment key={index}>
                        <TestimonialCard data={item} />
                    </React.Fragment>
                )}
            </ul>
        </div>
    )
}

export default Testimonial