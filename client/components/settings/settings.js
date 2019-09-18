import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';
import BreadcrumSection from './settingsBreadcrumSection';

class Settings extends React.Component{
  render(){
    return (
      <MDBContainer>
        <BreadcrumSection />
        <MDBListGroup style={{ width: "22rem" }}>
        </MDBListGroup>
      </MDBContainer>
    );
  }
}

export default Settings;
