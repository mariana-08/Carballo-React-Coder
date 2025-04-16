import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import {NavLink} from 'react-router-dom';

function NavbarBootstrap() {
  return (
    <Navbar expand="lg" className="Nav-vinos">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
            <img src='../logo1.png' alt='logo de Vinos Punilla' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-vinos">
                    <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
                    {/* <Nav.Link as={NavLink} to='/'>Nosotros</Nav.Link> */}
                    <NavDropdown className="custom-dropdown" title="Vinos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to='/category/caroyense'>La Caroyense</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/noble'>Noble</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/viarago'>Viarago</NavDropdown.Item>  
                        <NavDropdown.Item as={NavLink} to='/category/terra'>Terra Camiare</NavDropdown.Item>                                  
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        <CartWidgetReactIcons/>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;


