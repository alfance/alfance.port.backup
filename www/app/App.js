var React = require('react');
var ReactDOM = require('react-dom');
// var Router = require('react-router').Router;
var routes = require('./config/routes');
import {Router, Route, IndexRoute, hasHistory} from "react-router";

ReactDOM.render(
  <Router history={hasHistory}>{routes}</Router>,
  document.getElementById('app')
)
