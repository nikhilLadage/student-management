import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

class Footer extends React.Component{
    render(){
      return (
          <MDBFooter color="blue" className="text-center font-small darken-2">
              <p className="footer-copyright mb-0 py-3 text-center">
                  &copy; {new Date().getFullYear()} Copyright
              </p>
          </MDBFooter>
      );
    }
}

export default Footer;
