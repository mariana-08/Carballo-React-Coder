import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';


function NavbarBootstrap() {
  return (
    <Navbar expand="lg" className="Nav-vinos">
      <Container>
        <Navbar.Brand href="#home">
            <img src='../logo1.png' alt='logo de Vinos Punilla' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-vinos">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <NavDropdown className="custom-dropdown" title="Vinos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">La Caroyense</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Noble</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Viarago</NavDropdown.Item>  
                        <NavDropdown.Item href="#action/3.4">Terra Camiare</NavDropdown.Item>                                  
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        <CartWidgetReactIcons/>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;


