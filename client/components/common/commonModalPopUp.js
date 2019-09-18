import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
  constructor(props){
      super(props);
      this.state = {
        modal: false,
        modalBody: [],
        modalTitle: [],
        modalFooter: []
      };
      this.toggle = this.toggle.bind(this);
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.toggleModalBox !== this.props.toggleModalBox){
          this.setState({
            modal: nextProps.toggleModalBox
          });
      }
      if(nextProps.parentModalBoxDataProps.modalBodyData !== this.props.parentModalBoxDataProps.modalBodyData){
          this.setState({
            modalBody: nextProps.parentModalBoxDataProps.modalBodyData
          });
      }
  }
  shouldComponentUpdate(nextProps, nextState){
      let isDataUpdated = nextState.modal !== this.state.modal || nextState.modalBody !== this.state.modalBody;
      return isDataUpdated;
  }
  componentWillUpdate(nextProps, nextState){
        if(nextState.modal !== this.state.modal){
            this.setState({
              modal: nextState.modal
            });
        }
        if(nextState.modalBody.length !== this.state.modalBody.length){
            this.setState({
              modalBody: nextState.modalBody
            });
        }
  }

  toggle(event){
    this.setState({
      modal: !this.state.modal
    });
  }

render() {
  return (
    <MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={(event)=>this.toggle(event)}>
          <MDBModalHeader toggle={(event)=>this.toggle(event)}>{this.state.modalTitle}</MDBModalHeader>
          <MDBModalBody>
              {this.state.modalBody}
          </MDBModalBody>
          <MDBModalFooter>
              {this.state.modalFooter}
          </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;
