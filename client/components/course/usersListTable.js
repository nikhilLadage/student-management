import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class UsersListTable extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          usersList: []
      };
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.usersListData !== this.state.usersList){
          this.setState({
              usersList: nextProps.usersList
          });
      }
  }
  shouldComponentUpdate(nextProps, nextState){
      let isDataUpdated = nextProps.usersListData !== this.state.usersList;
      return isDataUpdated;
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.usersListData !== this.state.usersList){
        this.setState({
            usersList: nextProps.usersListData
        });
    }
  }
  render(){
    console.log(this.state);
      return (
        <MDBTable responsive>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.usersList && this.state.usersList.length > 0 ? this.state.usersList.map((data)=>(
              <tr key={data.id}>
                  <td><img src={data.avatar} className="rounded-circle" height="60" width="60"/></td>
                  <td>{data.first_name+" "+data.last_name}</td>
                  <td>{data.email}</td>
              </tr>
            )):
            <tr>
                <td colspan="2"> No Users Data Available</td>
            </tr>}
          </MDBTableBody>
        </MDBTable>
      );
  }
}

export default UsersListTable;
