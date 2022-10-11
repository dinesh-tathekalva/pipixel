import { NavItem, NavLink, Nav } from "reactstrap";
import Lion from '../svgs/imgg.jpeg'
import InstagramLogo from '../svgs/InstagramB&W.svg'
import FacebookLogo from '../svgs/FacebookB&W.svg'
import PiLogo from '../svgs/Pi.svg'

import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
const NavVertical = (args) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    return (
        // <Nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column" vertical>
        //     <a href=' # '>
        //         <img src="" alt="logo" width="100" height="140" />
        //     </a>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-bs-toggle="collapse"
        //         data-bs-target="#navbarSupportedContent"
        //         aria-controls="navbarSupportedContent"
        //         aria-expanded="false"
        //         aria-label="Toggle Navigation"
        //     >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //      <div className="collapse navbar-collapse w-100" id="navbarSupportedContent"> 

        //         <NavItem className="navItem">
        //             <NavLink className="text-uppercase fs-7" href="#">
        //                 Link
        //             </NavLink>
        //         </NavItem>
        //         <NavItem className="navItem">
        //             <NavLink className="text-uppercase fs-7" href="#">
        //                 Link
        //             </NavLink>
        //         </NavItem>
        //         <NavItem className="navItem">
        //             <NavLink className="text-uppercase fs-7" href="#">
        //                 Another Link
        //             </NavLink>
        //         </NavItem>
        //         <NavItem className="navItem">
        //             <NavLink className="text-uppercase fs-7"
        //                 disabled
        //                 href="#"
        //             >
        //                 Disabled Link
        //             </NavLink>
        //         </NavItem>
        //  </div> 
        //  <Navbar  {...args}>
        //     <Collapse vertical isOpen={isOpen} navbar>
        //         <Nav className="me-auto" navbar>
        //             <NavItem>
        //                 <NavLink href="/components/">Components</NavLink>
        //             </NavItem>
        //             <NavItem>
        //                 <NavLink href="https:github.com/reactstrap/reactstrap">
        //                     GitHub
        //                 </NavLink>
        //             </NavItem>
        //             <UncontrolledDropdown nav inNavbar>
        //                 <DropdownToggle nav caret>
        //                     Options
        //                 </DropdownToggle>
        //                 <DropdownMenu right>
        //                     <DropdownItem>Option 1</DropdownItem>
        //                     <DropdownItem>Option 2</DropdownItem>
        //                     <DropdownItem divider />
        //                     <DropdownItem>Reset</DropdownItem>
        //                 </DropdownMenu>
        //             </UncontrolledDropdown>
        //         </Nav>
        //         <NavbarText>Simple Text</NavbarText>
        //     </Collapse>
        //  </Navbar>
        // </Nav> 



        <div>
            <Navbar  {...args}>
                <NavbarBrand className="mt-5" href="/"><img src={PiLogo} alt='' width='100' height='100' /></NavbarBrand>
                {/* <NavbarToggler onClick={toggle} /> */}
                <Collapse className="mt-3" isOpen={true} navbar>
                    <Nav className="me-auto text-uppercase" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Portraits
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Weddings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Contact
                            </NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                    <Nav class="navbar navbar-light bg-light d-flex align-items-center">
                        <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/">
                            <img className="d-flex align-items-center" src={InstagramLogo} width="30" height="30" alt="" />
                        </a>
                        <a class="navbar-brand" href="https://www.instagram.com/pi.pixel/">
                            <img className="align-top" src={FacebookLogo} width="30" height="25" alt="" />
                        </a>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavVertical;