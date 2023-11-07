import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
         <Navbar className="bg-warning">
        <Container>
            <Link to={'/'} style={{textDecoration: 'none'}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/CMZrjzZd/contact.png"
              width="120"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            <b className='fs-2 text-dark'>Contacts</b>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header