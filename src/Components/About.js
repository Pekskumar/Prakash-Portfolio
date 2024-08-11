import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import GitIcon from '../Assets/Images/GitIcon'
import { Link } from 'react-router-dom'
import PhoneIcon from '../Assets/Images/PhoneIcon'
import MailIcon from '../Assets/Images/MailIcon'
import LocationIcon from '../Assets/Images/LocationIcon'

const About = () => {
    return (
        <Row>
            <Col md={6}>
                <div className=''>
                    image
                </div>
            </Col>
            <Col md={6}>
                <div className='project-btn'>
                    <div className='hero-detail mb-3'><b>Welcome to my</b> digital world! I'm on a mission to <b>craft captivating</b> and intuitive digital experiences. As a passionate fullstack developer, I blend cutting-edge technology with creativity to bring ideas to life.</div>
                    <div className='hero-detail mb-3'><b>Welcome to my</b> digital world! I'm on a mission to <b>craft captivating</b> and intuitive digital experiences. As a passionate fullstack developer, I blend cutting-edge technology with creativity to bring ideas to life.</div>
                    <div className='hero-detail mb-3'><b>Welcome to my</b> digital world! I'm on a mission to <b>craft captivating</b> and intuitive digital experiences. As a passionate fullstack developer, I blend cutting-eddeas to life.</div>
                    <div className='d-flex flex-wrap'>
                    <Link to={`tel:${8866808798}`} className='me-2 mb-2'>
                        <Button variant="main-btn gray-btn">
                            {8866808798}
                            <span className='ms-2'><PhoneIcon /></span>
                        </Button>
                    </Link>
                    <Link to={`mailto:${'prakash.montu_92@live.com'}`} className='me-2 mb-2'>
                        <Button variant="main-btn gray-btn">
                            {'prakash.montu_92@live.com'}
                            <span className='ms-2'><MailIcon /></span>
                        </Button>
                    </Link>
                    <Link >
                        <Button variant="main-btn gray-btn">
                            {'Greater Ahmedabad, Gujarat, India'}
                            <span className='ms-2'><LocationIcon /></span>
                        </Button>
                    </Link>
                    </div>


                </div>
            </Col>
        </Row>
    )
}

export default About