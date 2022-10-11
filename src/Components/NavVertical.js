import { NavItem, NavLink, Nav } from "reactstrap";
import InstagramLogo from '../svgs/InstagramB&W.svg'
import FacebookLogo from '../svgs/FacebookB&W.svg'
import PiLogo from '../svgs/Pi.svg'

import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
const NavVertical = (args) => {
    return (
        <div>
            <Navbar  {...args}>
                <NavbarBrand className="mt-5" href="/"><img src={PiLogo} alt='' width='100' height='100' /></NavbarBrand>
                <Collapse className="mt-3" isOpen={true} navbar>
                    <Nav className="me-auto text-uppercase" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Portraits
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Weddings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav class="navbar navbar-light bg-light d-flex align-items-center">
                        <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/" target="_blank" rel="noreferrer">
                            <img className="d-flex align-items-center" src={InstagramLogo} width="30" height="30" alt="" />
                        </a>
                        <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/" target="_blank" rel="noreferrer">
                            <img className="align-top" src={FacebookLogo} width="30" height="25" alt="" />
                        </a>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavVertical;