import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router-dom';

const NavContact=()=>{
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListContact'>Contacts</Nav.Link>
            <Nav.Link as={Link} to='/AddContact'>AddContact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavContact 