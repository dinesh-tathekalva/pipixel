import { NavItem, NavLink, Nav } from "reactstrap";
import InstagramLogo from '../svgs/InstagramB&W.svg'
import FacebookLogo from '../svgs/FacebookB&W.svg'
import PipixelLogo from '../svgs/PipixelLogo.svg'

import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
const NavVertical = (args) => {
    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand className="mt-3" href="/">
                    <img className="mx-auto" src={PipixelLogo} alt='' width='220'  />
                </NavbarBrand>
                <Collapse className="mt-3" isOpen={true} navbar>
                    <Nav className="me-auto text-uppercase" navbar>
                        <NavItem className="d-flex justify-content-center">
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem className="d-flex justify-content-center">
                            <NavLink href="#">
                                Portraits
                            </NavLink>
                        </NavItem>
                        <NavItem className="d-flex justify-content-center">
                            <NavLink href="#">
                                Weddings
                            </NavLink>
                        </NavItem>
                        <NavItem className="d-flex justify-content-center">
                            <NavLink href="#">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem className="d-flex justify-content-center">
                            <NavLink href="#">
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem className="d-flex justify-content-center mt-3">
                            <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/" target="_blank" rel="noreferrer">
                                <img className="d-flex align-items-center" src={InstagramLogo} width="30" height="30" alt="" />
                            </a>
                            <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/" target="_blank" rel="noreferrer">
                                <img className="align-top" src={FacebookLogo} width="30" height="25" alt="" />
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavVertical;