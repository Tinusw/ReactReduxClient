import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import SignIn from "./components/auth/signin";
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import CampaignIndex from './components/campaign/campaign_index'
import RequireAuth from './components/auth/require_auth'
import Root from './components/root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={"/"} component={Root}/>
        <Route path={"/signin"} component={SignIn}/>
        <Route path={"/signout"} component={SignOut}/>
        <Route path={"/signup"} component={SignUp}/>
        <Route path={"/campaign/index"} component={RequireAuth(CampaignIndex)}/>
      </div>
    );
  }
}

export default App;
