import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TempImg from '../Assets/Images/banner.jpg';
import ReactJsIcon from '../Assets/Images/ReactJsIcon';
import GitIcon from '../Assets/Images/GitIcon';
import EyeIcon from '../Assets/Images/EyeIcon';
import { CommonService } from '../CommonSearvice';

const ProjectDetailModal = (props) => {  

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.data.data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className=''>
                    <img className='project-img' src={TempImg} alt={TempImg} />

                    <div className='my-3'>
                        {props.data.data.technology.map((item, index) =>
                            <span className='me-2' key={index}>
                                {CommonService.TechIcon(item)}
                            </span>
                        )}
                    </div>

                    <p className='project-detail'>{props.data.data.detail}</p>
                    <div className='project-btn d-flex justify-content-between'>
                        {props.data.data.sourcelink !== '' &&
                            <Link target='_blank' to={props.data.data.sourcelink}><Button variant="main-btn gray-btn">Source Code <span className='ms-2'> <GitIcon /></span></Button></Link>}
                        {props.data.data.livelink !== '' &&
                            <Link target='_blank' to={props.data.data.livelink}><Button variant="main-btn eye">Live Project <span className='ms-2'> <EyeIcon /></span></Button></Link>}
                    </div>

                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default ProjectDetailModal