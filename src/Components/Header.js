import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeartIcon from '../Assets/Images/HeartIcon';

const Header = () => {
    return (
        <Navbar sticky="top" expand="lg" className="p-3">
            <Container fluid>
                <Navbar.Brand href="#home">P</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='py-1' href="#home">Home</Nav.Link>
                        <Nav.Link className='py-1' href="#About">About</Nav.Link>
                        <Nav.Link className='py-1' href="#Experience">Experience</Nav.Link>
                        <Nav.Link className='py-1' href="#Projects">Projects</Nav.Link>                        
                        <Nav.Link className='py-1' href="#Skills">Skills</Nav.Link>
                        <Nav.Link className='py-1' href="#Testimonial">Testimonials</Nav.Link>
                    </Nav>
                    <Button variant="main-btn shimmer-btn">Hire Me <span className='ms-2'> <HeartIcon /></span></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header