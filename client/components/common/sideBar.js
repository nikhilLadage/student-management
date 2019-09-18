import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavbarBrand } from 'mdbreact';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    handleLogout(event){
        if(event){
            event.preventDefault();
            localStorage.removeItem("userAccessToken");
            window.location = "/";
        }else{
          return false;
        }
    }
    render(){
      return (
          <div className="sidebar-fixed position-fixed">
              <Link to="/users" activeClassName="activeClass">
                    <MDBNavbarBrand>
                        <strong>LOGO</strong>
                    </MDBNavbarBrand>
              </Link>
              <MDBListGroup className="list-group-flush">
                  <Link to="/dashboard" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="tachometer-alt" className="mr-3"/>
                          Dashboard
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/teachers" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="chalkboard-teacher" className="mr-3"/>
                          Teacher Section
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/students" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="users" className="mr-3"/>
                          Student Section
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/courses" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="clipboard-list" className="mr-3"/>
                          Course Section
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/" onClick={(event)=>{this.handleLogout(event)}} activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="power-off" className="mr-3"/>
                          Logout
                      </MDBListGroupItem>
                  </Link>
              </MDBListGroup>
          </div>
      );
    }
}

export default SideBar;
