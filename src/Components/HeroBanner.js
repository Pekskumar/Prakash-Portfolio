import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BannerSVG from '../Assets/Images/BannerSVG'
import DownloadIcon from '../Assets/Images/DownloadIcon'

const HeroBanner = () => {
  return (
    <div id='home' className='hero-banner'>
      {/* <BannerSVG /> */}
      <Container>
        <Row>
          <Col md={6}>
            <div className=''>
              <h1 className='mb-3'>Prakash Parmar</h1>
              <h2 className='mb-3'>React Js Developer</h2>
              <div className='hero-detail mb-3'>Welcome to my digital world! I'm on a mission to craft captivating and intuitive digital experiences. As a passionate fullstack developer, I blend cutting-edge technology with creativity to bring ideas to life.</div>
              <div className='hero-btn project-btn d-flex '>  <Button variant="main-btn me-2 ">Get Resume <span className='ms-2'> <DownloadIcon /></span></Button><Button variant="main-btn  text-center">Hire me</Button></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroBanner