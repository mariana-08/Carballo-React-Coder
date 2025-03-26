import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';


function NavbarBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src='../logo1.png' alt='logo de Vinos Punilla' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ofertas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Más vendidos</NavDropdown.Item>              
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        <CartWidgetReactIcons/>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;


