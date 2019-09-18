import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapse: false
        };
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <Link to="/dashboard" activeClassName="activeClass">
                      <MDBNavbarBrand>
                          <strong></strong>
                      </MDBNavbarBrand>
                </Link>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/users" className="ml-2" >Home</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Header;
