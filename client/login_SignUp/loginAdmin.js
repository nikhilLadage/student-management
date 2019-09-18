import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { validateFormData } from './loginHelpers';
import { useAlert } from 'react-alert';
import axios from 'axios';

const LoginAdmin = () => {
  const toasterAlert = useAlert();
  return <LoginForm toaster={toasterAlert} />;
}
class LoginForm extends React.Component{
  constructor(props){
      super(props);
      this.state= {
        "userEmail": "",
        "userPass": ""
      };
  }
  handleChange(event){
      if(event){
          event.preventDefault();
          var name = event.target.name;
          var value = event.target.value;
          this.setState({
              [name]: value
          });
      }else{
        return false;
      }
  }
  submitLoginForm(event){
    if(event){
      event.preventDefault();
      var self = this;
      let validationResult = validateFormData({
        "userEmail": self.state.userEmail,
        "userPass": self.state.userPass
      });
      let isValidationError = validationResult.isError;
      let validationErrorMessage = validationResult.errorMessage;
      if(isValidationError){
          self.props.toaster.show(validationErrorMessage,{
          timeout: 2000, // custom timeout just for this one alert
          type: 'error'});
          return false;
      }else{
        axios.post("/getAdminLoginAuthentication", {
          "adminEmail": self.state.userEmail,
          "adminPass": self.state.userPass
        }).then(function(result){
          if(result && result != "" && result.data.code == 200){
              localStorage.setItem("userAccessToken", result.data.token);
              window.location = "/home#/dashboard";
          }else{
            console.log(result.data.Failed);
            self.props.toaster.show("OOps! Something went wrong while login, please try again later.",{
            timeout: 2000, // custom timeout just for this one alert
            type: 'error'});
          }
        }).catch(function(error){
            self.props.toaster.show("OOps! User is not registered or something went wrong with request.",{
            timeout: 4000, // custom timeout just for this one alert
            type: 'error'});
            console.log(error);
        });
        return true;
      };
    }else {
      return false;
    }
  }
  render(){
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="offset-md-3 mt-5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header blue-gradient rounded">
                  <h3 className="my-3 text-white text-center">Login
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="userEmail"
                      onChange={this.handleChange.bind(this)}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="userPass"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                <div className="text-center mt-4">
                  <MDBBtn
                    color="cyan"
                    className="mb-3"
                    type="submit"
                    onClick={(event)=>this.submitLoginForm(event)}
                  >
                    Let Me In
                  </MDBBtn>
                </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

export default LoginAdmin;
