import { NavItem, NavLink, Nav } from "reactstrap";
import InstagramLogo from '../svgs/InstagramB&W.svg'
import FacebookLogo from '../svgs/FacebookB&W.svg'
import PipixelLogo from '../svgs/PipixelLogo.svg'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const NavVertical = (args) => {
    let navigate = useNavigate()
    return (
        <div>
            <Navbar {...args} style={{width: "min-content"}}>
                <NavbarBrand className="mt-3" href="/" onClick={() => {
                    navigate("/")
                }}>
                    <img className="mx-auto" src={PipixelLogo} alt='' width='220' />
                </NavbarBrand>
                <Collapse className="mt-3" isOpen={true} navbar>
                    <Nav className="me-auto text-uppercase" navbar>
                        <NavItem className="ml-3">
                            <NavLink onClick={() => {
                                navigate("/")
                            }}><span style={{ marginLeft: "3em" }}>Home</span></NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink onClick={() => {
                                navigate("/portraits")
                            }}>
                                <span style={{ marginLeft: "3em" }}>Portraits</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink onClick={() => {
                                navigate("/weddings")
                            }}>
                                <span style={{ marginLeft: "3em" }}>Weddings</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink onClick={() => {
                                navigate("/aboutUs")
                            }}>
                                <span style={{ marginLeft: "3em" }}>About Us</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink onClick={() => {
                                navigate("/contact")
                            }}>
                                <span style={{ marginLeft: "3em" }}>Contact</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="d-flex mt-3">
                            <a class="navbar-brand" style={{ marginLeft: "2em" }} href="https://www.instagram.com/pi.pixel/" target="_blank" rel="noreferrer">
                                <img  className="d-flex align-items-center" src={InstagramLogo} width="30" height="30" alt="" />
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