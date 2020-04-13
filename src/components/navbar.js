

import React from "react"
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap"


function NavigationBar() {
  return (
    <Navbar bg="none" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="SNS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Nav.Link href="#sns">SNS</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}



export default NavigationBar