import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const BreadcrumSection = () => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <Link to="/dashboard"><MDBBreadcrumbItem>Home</MDBBreadcrumbItem></Link> <span className="ml-2 mr-2 text-muted"> / </span>
                <MDBBreadcrumbItem active>Student Section</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;
