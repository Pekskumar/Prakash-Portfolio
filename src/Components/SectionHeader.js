import React from 'react'
import ArrowIcon from '../Assets/Images/ArrowIcon'

const SectionHeader = (props) => {
    return (
        <div id={props?.id} className='section-header my-5  text-center'>
            <div className='position-relative'>
                <h2 className='m-0'>{props?.title}</h2>
                <ArrowIcon/>
            </div>
            <p>{props?.detail}</p>
        </div>
    )
}

export default SectionHeader