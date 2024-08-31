import React from 'react'
import ProjectCard from './ProjectCard'
import { Col, Row } from 'react-bootstrap'
import Projectdata from '../Data/Projectdata'

const Project = () => {


    return (
        <div>
            <Row>
                {Projectdata.map((item, index) =>
                    <Col md={4} key={index}>
                        <ProjectCard data={item} />
                    </Col>)}
            </Row>
        </div>
    )
}

export default Project