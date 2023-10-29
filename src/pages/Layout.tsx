import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Button, Nav, Li, NavRow } from "../style";

// eslint-disable-next-line react/prop-types
export default function Layout({theme}) {
  
  return (
    <>
      <NavRow>
        <img src="https://cdn-icons-png.flaticon.com/512/2072/2072130.png" alt='world icon' width='30'/>
        <Nav >
          <Li>
              <Link to="/" style={{color: 'white'}}>Home</Link>
          </Li>
          <Li>
              <Link to="/about" style={{color: 'white'}}>Sobre</Link>
          </Li>
          <Li>
              <Link to="/contact" style={{color: 'white'}}>Contato</Link>
          </Li>
          <Li>
              <Link to="/details" style={{color: 'white'}}>Detalhes</Link>
          </Li>
        </Nav>
        <Button onClick={() => theme()}>TEMA</Button>
      </NavRow>
      <Outlet />
    </>
  )
    
}