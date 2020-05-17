import React, {useState, useContext ,Fragment} from 'react'

import {Collapse,
        Navbar,
        Nav,
        NavbarToggler,
        NavbarBrand,
        NavItem,
        NavLink,
        NavbarText
} from 'reactstrap'
import {Link} from "react-router-dom"
import {UserContext} from '../Context/UserContext'
import {Redirect} from "react-router-dom"

const Header = () => {
        const context = useContext(UserContext)

        const [isOpen, setIsOpen] = useState(false)
        const toggle = () => setIsOpen(!isOpen);
return(
        <Navbar color="info" light expand="md">
        <NavbarBrand ><Link to="/" className="text-white">Github Account Fetcher</Link></NavbarBrand>
        <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
        }</NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        {
                context.user ? (
                        <NavItem>
                        <NavLink onClick= {() => {context.setUser(null)}} className="text-white">Logout</NavLink>
                        </NavItem>

                ) : (
                        <Fragment>
                        <NavItem>
        <NavLink tag={Link} to ="/signup" className="text-white">SignUp</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={Link} to ="/signin" className="text-white">SignIn</NavLink>
        </NavItem>
                        
                        </Fragment>
                )
        }
        
       
        
        </Nav>
        </Collapse>
        
        </Navbar>
)

}
export default Header 