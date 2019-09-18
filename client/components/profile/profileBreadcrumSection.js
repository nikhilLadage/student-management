import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';

const BreadcrumSection = () => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;
