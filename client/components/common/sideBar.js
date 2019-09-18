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
                  <Link to="/users" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="th-list" className="mr-3"/>
                          Records List
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/profile" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="user" className="mr-3"/>
                          Profile
                      </MDBListGroupItem>
                  </Link>
                  <Link to="/settings" activeClassName="activeClass">
                      <MDBListGroupItem>
                          <MDBIcon icon="cog" className="mr-3"/>
                          Settings
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
