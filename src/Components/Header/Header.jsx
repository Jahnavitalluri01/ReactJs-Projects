import React from "react";
import './header.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';

import { IoSearch } from "react-icons/io5";

function Header(){
    return(
        <Navbar collapseOnSelect expand="md" className="bg-primary">
        <Container>
          <Navbar.Brand className="text-white fs-4">My Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="pe-md-3 pe-0 text-white">Explore New Places</Nav.Link>
                       <Form className="d-flex" inline>
                     <span className="bg-white px-2 justify-content-center align-items-center pt-1 border-0">  <IoSearch /></span><Form.Control
              type="search"
              placeholder= "Search"
              className="me-2 rounded-0 rounded-right border-0"
              aria-label=""
            />
            </Form>
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
        // <Navbar expand='lg' className="fixed-top bg-primary shadow py-2">
        //    <Container>
        //     <Navbar.Brand>Travel Helper</Navbar.Brand>
        //     <Navbar.Toggle aria-controls='basic-navbar-nav' aria-expanded='true'>
        //         <Navbar.Collapse id='basic-navbar-nav' >
        //             <Nav className='me-auto justify-content-end w-100'>
        //             <Nav.Link href='/' className='text-white'>Explore New Places</Nav.Link>
        //             <Form>
        //     <Form.Control
        //       type="search"
        //       placeholder="Search"
        //       className="me-2"
        //       aria-label="Search"
        //     />
        //     </Form>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar.Toggle>
        //    </Container>

        // </Navbar>
       
    )
}
export default Header