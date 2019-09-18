import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCardBody, MDBCard, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';
import BreadcrumSection from './studentBreadcrumSection';

class StudentSection extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);

    }
    setModalBoxData(event){
      event.preventDefault();
      var modalBodyData = [<MDBRow>
          <form>
            <div className="grey-text">
                <MDBCol size="4">
                    <MDBInput
                      label="First name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="studFirstName"
                      onChange={this.handleChange}
                    />
                </MDBCol>
                <MDBCol size="4">
                    <MDBInput
                      label="Middle name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="studMiddleName"
                      onChange={this.handleChange}
                    />
                </MDBCol>
                <MDBCol size="4">
                    <MDBInput
                      label="Last name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="studLastName"
                      onChange={this.handleChange}
                    />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="studEmail"
                      onChange={this.handleChange}
                    />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                      label="Mobile Number"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right"
                      name="studPhone"
                      onChange={this.handleChange}
                    />
                </MDBCol>
              <MDBInput
                label="Student name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="studentName"
                onChange={this.handleChange}
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
      </MDBRow>];
      this.props.setParentModalBoxDataProps({"modalBodyData": modalBodyData});
      this.props.setToggleModalBoxValue(true);
    }
    render(){
      return (
        <MDBContainer>
          <BreadcrumSection />
          <MDBListGroup style={{ width: "22rem" }}>
          </MDBListGroup>
          <MDBCard className="mb-5">
              <MDBContainer>
                  <MDBBtn
                    color="cyan"
                    className="mb-3 float-right"
                    type="submit"
                    onClick={(event)=>this.setModalBoxData(event)}
                  >
                  Add Student
                  </MDBBtn>
              </MDBContainer>
              <MDBCardBody id="" className="">

              </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
    }
}

export default StudentSection;
