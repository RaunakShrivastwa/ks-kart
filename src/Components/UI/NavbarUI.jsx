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
            <Nav.Link className=' fs-16' href="#home"><span>Gifts</span></Nav.Link>
            <Nav.Link href="#link"><span>Photo Frame</span></Nav.Link>
            <Nav.Link href="#link"><span>Mobile Covers</span></Nav.Link>
            <Nav.Link href="#link"><span>Electronics</span></Nav.Link>
            <Nav.Link href="#link"><span>BirthDay</span></Nav.Link>
            <Nav.Link href="#link"><span>Bookie</span></Nav.Link>
            <Nav.Link href="#link"><span>BirthDay</span></Nav.Link>
            <Nav.Link href="#link"><span>Catogery</span></Nav.Link>
            <Nav.Link href="#link"><span>Catogery</span></Nav.Link>
            
            <Nav.Link className='text-light fs-16' href="#link">More+</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarUI;