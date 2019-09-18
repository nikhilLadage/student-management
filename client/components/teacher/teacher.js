import React from 'react';
import { MDBListGroupItem, MDBContainer, MDBCardBody, MDBCard } from 'mdbreact';
import { Link } from 'react-router-dom';
import BreadcrumSection from './teacherBreadcrumSection';

class TeacherSection extends React.Component{
  render(){
    return (
      <MDBContainer>
        <BreadcrumSection />
        <MDBCard className="mb-5">
            <MDBCardBody id="" className="">

            </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default TeacherSection;
