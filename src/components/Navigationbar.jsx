import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';
const Styles=styled.div `
     .navbar{
    background-color:#222;
  }
    .navbar-brand, .navbar-nav .nav-link{
    color:#bbb;

    &:hover{
      color:white;
    }
  }
`;
 
export const Navigationbar=()=>(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">BookmyShow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signup">Signup</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link href="/opentickets">OpenTickets</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link href="/closedtickets">ClosedTickets</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link href="/admin">Admin</Nav.Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
  </Styles>
);
