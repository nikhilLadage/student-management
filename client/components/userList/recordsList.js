import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCardBody, MDBCard } from 'mdbreact';
import { Link } from 'react-router-dom';
import BreadcrumSection from './usersBreadcrumSection';
import UsersListTable from './usersListTable';
import axios from 'axios';
import { useAlert } from 'react-alert';

const RecordsList = () => {
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
  componentDidMount(){
    this.getAllUsersList(this);
  }
  getAllUsersList(self){
      axios.get("https://reqres.in/api/users").then(function(result){
        if(result && result != ""){
            self.setState({userListsData: result.data.data});
        }
      }).catch(function(error){
          self.props.toaster.show("OOps! Users list not found or something went wrong with request.",{
          timeout: 4000, // custom timeout just for this one alert
          type: 'error'});
          console.log(error);
      });
      axios.post("/getSampleResponse",{}).then(function(result){
        if(result && result != ""){
            //self.setState({userListsData: result.data.data});
            console.log(">>>>>>>>>..", result);
        }
      }).catch(function(error){
          self.props.toaster.show("OOps! Users list not found or something went wrong with request.",{
          timeout: 4000, // custom timeout just for this one alert
          type: 'error'});
          console.log(error);
      });
  }
  render(){
    return (
      <MDBContainer>
        <BreadcrumSection />
        <MDBCard className="mb-5">
            <MDBCardBody id="" className="">
                <UsersListTable usersListData={this.state.userListsData} />
            </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default RecordsList;
