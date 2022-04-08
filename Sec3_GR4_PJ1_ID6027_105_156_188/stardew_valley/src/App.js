import React, { useState, useEffect } from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';


import AdminRoute from './utils/adminroute';
import UserRoute from './utils/userroute';
import { getToken, removeUserSession, setUserSession } from './utils/common';
import Navbar from "./navbar";
import Home from "./homepage";
import Login from "./login";
import Product from "./product_manage";
import User from "./user_manage";
import Dashboard from './dashboard';

import Developer from "./developer";
import Member from "./member";
import NPC from "./npc";
import Map from "./map";
import Bundle from "./bundle";
import Skill from './skill';
import Foot from "./foot";


function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(res => {
      setUserSession(res.data.token, res.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <UserRoute path="/login" component={Login} />
          <AdminRoute path="/dashboard" component={Dashboard} />
          <AdminRoute path="/product" component={Product} />
          <AdminRoute path="/user" component={User} />

          <Route path="/developer" component={Developer} />
          <Route path="/member" component={Member} />
          <Route path="/npc" component={NPC} />
          <Route path="/map" component={Map} />
          <Route path="/bundle" component={Bundle} />
          <Route path="/skill" component={Skill} />

        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
 
export default App;