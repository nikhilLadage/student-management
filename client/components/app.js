import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import StudentSection from './student/student';
import TeacherSection from './teacher/teacher';
import CoursesSection from './course/course';
import Header from './common/header';
import SideBar from './common/sideBar';
import Footer from './common/footer';
import ModalBox from './common/commonModalPopUp';
import '../../client/index.css';
// import ProfilePage from './pages/ProfilePage';
// import TablesPage from './pages/TablesPage';
// import MapsPage from './pages/MapsPage';
// import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          "userAccessToken": localStorage.getItem("userAccessToken"),
          parentModalBoxData: "",
          toggleModalBoxValue: false
      };
      this.setToggleModalBoxValue = this.setToggleModalBoxValue.bind(this);
      this.setParentModalBoxDataProps = this.setParentModalBoxDataProps.bind(this);
  }
  setToggleModalBoxValue(data){
        if(data){
          this.setState({
              toggleModalBoxValue : data
          });
        }
  }
  setParentModalBoxDataProps(data){
        if(data){
          this.setState({
              parentModalBoxData : data
          });
        }
  }
  render() {
    if(this.state.userAccessToken && this.state.userAccessToken != ""){
        return (
          <HashRouter>
            <div className="flexible-content">
              <SideBar />
              <Header />
              <main id="content" className="pt-5 p-1">
                  <Switch>
                    <Route path='/students' component={()=><StudentSection   setParentModalBoxDataProps={this.setParentModalBoxDataProps} setToggleModalBoxValue={this.setToggleModalBoxValue} />} />
                    <Route path='/teachers' component={TeacherSection} />
                    <Route path='/courses' component={CoursesSection} />
                  </Switch>
                  <ModalBox parentModalBoxDataProps={this.state.parentModalBoxData} toggleModalBox={this.state.toggleModalBoxValue} />
              </main>
              <Footer />
            </div>
         </HashRouter>
        );
    }else{
      window.location = "/"
    }
  }
}

export default App;
