import React from "react"
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements"
import logo from "../../images/ui__logo-white.svg"
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
