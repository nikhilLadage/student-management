import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCardBody, MDBCard } from 'mdbreact';
import { Link } from 'react-router-dom';
import BreadcrumSection from './courseBreadcrumSection';
import UsersListTable from './usersListTable';
import axios from 'axios';
import { useAlert } from 'react-alert';

const CourseSection = () => {
  const toasterAlert = useAlert();
  return <RecordsListComponent toaster={toasterAlert} />;
};

class RecordsListComponent extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          userListsData: []
      };
  }
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

export default CourseSection;
