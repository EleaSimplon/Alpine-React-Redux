import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBarHome = () => {

    return (

        <div className="modelCard">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img
                        src="logoAlp.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand href="/">lpine</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#features">Legend</Nav.Link>
                        <Nav.Link href="#pricing">Pure</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Maxou</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           Lelou
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
        
        
    )
};

export default NavBarHome;