import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EyeIcon from '../Assets/Images/EyeIcon';
import GitIcon from '../Assets/Images/GitIcon';
import ReactJsIcon from '../Assets/Images/ReactJsIcon';
// import TempImg from '../Assets/Images/ssems.png';
import ProjectDetailModal from '../Modals/ProjectDetailModal';
import { CommonService } from '../CommonSearvice';


const ProjectCard = (props) => {
    const [ProjectModal, setProjectModal] = useState(false)
    return (
        <div className='project-card round-border p-4 mb-4'>
            <img className='project-img' src={CommonService.ProjectImage(props.data.subtitle)} alt={props.data.subtitle} />
            <div className='my-3'>
                {props.data.technology.map((item, index) =>
                    <span  title={item} className='me-2' key={index}>
                        {CommonService.TechIcon(item)}
                    </span>
                )}
            </div>
            <h5 className='mt-3 title-primary'>{props.data.title}</h5>
            <p className='project-detail body-text '>{`${props.data.detail.substring(0, 140)}...`}<span className='cursor-pointer' onClick={() => setProjectModal(true)}><b>read more</b></span></p>
            <div className='project-btn d-flex justify-content-between'>
                {props.data.sourcelink !== '' &&
                    <Link target='_blank' to={props.data.sourcelink}><Button variant="main-btn gray-btn">Source Code <span className='ms-2'> <GitIcon /></span></Button></Link>}
                {props.data.livelink !== '' &&
                    <Link target='_blank' to={props.data.livelink}><Button variant="main-btn shimmer-btn eye">Live Project <span className='ms-2'> <EyeIcon /></span></Button></Link>}
            </div>
            {ProjectModal &&
                <ProjectDetailModal
                    data={props}
                    show={ProjectModal}
                    onHide={() => setProjectModal(false)}
                />}
        </div>
    );
}

export default ProjectCard;
