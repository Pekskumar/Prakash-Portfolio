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
              <h1 className='mb-3'>Hey 👋</h1>
              <h1 className='mb-3'>I'm Prakash Parmar</h1>
              <h3 className='mb-3'>React Js Developer</h3>
              <div className='hero-detail mb-3'>Welcome to my personal website! Here you can find more about me, my work, and how to contact me. Feel free to explore all the sections to learn more.</div>
              <div className='hero-btn project-btn d-flex '>  <Button variant="main-btn me-2 ">Get Resume <span className='ms-2'> <DownloadIcon /></span></Button><Button variant="main-btn  text-center">Hire me</Button></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroBanner