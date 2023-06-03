import React, { useState } from 'react';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import '../../Css/HomeNavbarCss.css';



function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  return (
    <Navbar className='container-fluid shadow navbg' expand='md' light >
        <NavbarBrand href="/" style={{ color: 'white', fontFamily:'Montserrat Thin' , fontWeight:'bold'}}>Find Restaurants</NavbarBrand>
        <NavbarToggler className="navbar-toggler-white" onClick={toggleNavbar} />
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="ms-5 px-5" navbar>
            <NavItem >
              <NavLink href="/" style={{ color: location.pathname === '/' ? '#333' : 'white', fontFamily:'Montserrat Thin' , fontWeight:'bold'}}>HOME</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="aboutus" style={{ color: location.pathname === '/aboutus' ? '#333' : 'white', fontFamily:'Montserrat Thin', fontWeight:'bold'}}>
                About Us
              </NavLink>
            </NavItem >
            
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default HomeNavbar;
