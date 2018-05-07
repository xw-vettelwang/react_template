import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Page1 from "bundle-loader?lazy&name=page1!pages/Page1/Page1";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo";
import Loading from "components/Loading/Loading";

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

export default class RootRouter extends Component{
  render(){
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/userinfo">UserInfo</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={createComponent(Home)} />
          <Route path="/page1" component={createComponent(Page1)} />
          <Route path="/counter" component={createComponent(Counter)} />
          <Route path="/userinfo" component={createComponent(UserInfo)} />
        </Switch>
        </div>
      </Router>
    );
  }
}