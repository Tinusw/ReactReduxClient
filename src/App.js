import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Signin from "./components/auth/signin";
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import CampaignIndex from './components/campaign/campaign_index'
import RequireAuth from './components/auth/require_auth'
import Root from './components/root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={"/"} component={Root}/>
        <Route path={"/signin"} component={Signin}/>
        <Route path={"/signout"} component={Signout}/>
        <Route path={"/signup"} component={Signup}/>
        <Route path={"/campaign/index"} component={RequireAuth(CampaignIndex)}/>
      </div>
    );
  }
}

export default App;
