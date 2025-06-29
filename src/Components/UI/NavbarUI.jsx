import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './common.scss';
import { Button } from 'react-bootstrap';

function NavBarUI() {
  return (
    <Navbar expand="lg" className=" z-3 nav_wrapper sticky-top">
      <Container>
        {/* <Navbar.Brand href="#home" className='text-light fs-16'>React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=' fs-16' href="#home"><span className='white'>Gifts</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Photo Frame</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Mobile Covers</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Electronics</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>BirthDay</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Bookie</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>BirthDay</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Catogery</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>Catogery</span></Nav.Link>
            <Nav.Link href="#link"><span className='white'>More</span></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarUI;