import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import RecordsList from './userList/recordsList';
import Profile from './profile/profile';
import Settings from './settings/settings';
import Header from './common/header';
import SideBar from './common/sideBar';
import Footer from './common/footer';
import '../../client/index.css';
// import ProfilePage from './pages/ProfilePage';
// import TablesPage from './pages/TablesPage';
// import MapsPage from './pages/MapsPage';
// import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          "userAccessToken": localStorage.getItem("userAccessToken")
      };
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
                    <Route path='/users' component={RecordsList} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/profile' component={Profile} />
                  </Switch>
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
