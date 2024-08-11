import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EyeIcon from '../Assets/Images/EyeIcon';
import GitIcon from '../Assets/Images/GitIcon';
import ReactJsIcon from '../Assets/Images/ReactJsIcon';
import TempImg from './Prakash_DP.jpeg';


const  ProjectCard = (props) => {
    return (
        <div className='project-card round-border p-4 mb-4'>
            <img className='project-img' src={TempImg} alt={TempImg} />

            <div className='my-3'>
                {props.data.technology.map((item, index) =>
                    <span className='me-2' key={index}>
                        {item}
                        <ReactJsIcon size='20' />
                    </span>
                )}
            </div>
            <h5 className='mt-3'>{props.data.title}</h5>
            <p>{props.data.detail}</p>
            <div className='project-btn d-flex justify-content-between'>
                {props.data.sourcelink !== '' &&
                    <Link target='_blank' to={props.data.sourcelink}><Button variant="main-btn gray-btn">Source Code <span className='ms-2'> <GitIcon /></span></Button></Link>}
                {props.data.livelink !== '' &&
                    <Link target='_blank' to={props.data.livelink}><Button variant="main-btn eye">Live Project <span className='ms-2'> <EyeIcon /></span></Button></Link>}
            </div>


        </div>
    );
}

export default ProjectCard;
