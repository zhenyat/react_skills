import React     from "react"
import PropTypes from "prop-types"
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap"
import LogoImage from 'images/logos/fcc.png'

const LogoComponent = props => <img src={LogoImage} />

class NavBar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="http://localhost:3000/demo/index">React Demo</Nav.Link>
              <Nav.Link href="http://localhost:3000/fcc/index">freeCodeCamp</Nav.Link>
              <Nav.Link href="http://localhost:3000/react_bootstrap/index">react-bootstrap</Nav.Link>
              <Nav.Link href="http://localhost:3000/guys">Guys</Nav.Link>
              <Nav.Link href="http://localhost:3000/hooks/index">Hooks</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </Nav>

          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
};

export default NavBar
