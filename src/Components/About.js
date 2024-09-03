import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import GitIcon from '../Assets/Images/GitIcon'
import PrakashImg from '../Assets/Images/Prakash_DP.jpeg'
import { Link } from 'react-router-dom'
import PhoneIcon from '../Assets/Images/PhoneIcon'
import MailIcon from '../Assets/Images/MailIcon'
import LocationIcon from '../Assets/Images/LocationIcon'
import ArrowIcon from '../Assets/Images/ArrowIcon'

const About = () => {
    return (
        <Row className='pt-5'>
            <Col md={6} className='  mb-4  d-flex
    justify-content-center
    align-items-center'>
                <div className='about-left-img '>
                    <img src={PrakashImg} />
                </div>
            </Col>
            <Col md={6}>
                <div className='section-header   text-center'>
                    <div className='position-relative'>
                        <h2 className='m-0'>About Me</h2>
                        <ArrowIcon />
                    </div>

                </div>
                <div className='project-btn mb-3'>
                    <div className='hero-detail mb-3'>Hey, I'm <b>Prakash Parmar</b>, a <b>frontend engineer</b> who builds things using technologies I've learned so far, such as <b>React js, JavaScript, HTML, CSS, React Bootstrap.</b> I'm always looking forward to learning new things as I grow, and I love keeping myself updated with the <b>rapidly</b> changing <b>tech world.</b></div>
                    <div className='hero-detail mb-3'>My portfolio boasts a diverse range of <b>web applications </b>, spanning from innovative <b>e-commerce</b> platforms to engaging <b>social networking</b> sites. I pride myself on creating <b>scalable and efficient solutions</b> that adhere to <b>industry best practices</b>, ensuring <b>optimal performance and user satisfaction.</b></div>
                    <div className='hero-detail mb-3'>I strongly believe in <b>continuous learning and improving myself,</b> so I try my best to learn in <b>any situation possible, unfavorable or not.</b></div>
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