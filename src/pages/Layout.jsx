import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Layout() {
    return (
        <>
          <Navbar>
            <Container>
              <Navbar.Brand href="/">Mudanças Climáticas</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">Sobre</Nav.Link>
                <Nav.Link href="/contact">Link</Nav.Link>
                <Nav.Link href="/details">Link</Nav.Link>
               </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
          <Outlet />
        </>
      )
    
}