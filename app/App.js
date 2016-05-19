var React = require('react');
var ReactDOM = require('react-dom');
var ga = require('react-ga');
ga.initialize('UA-77366252-1', {
  debug: true,
  titleCase: false,
});

// var Router = require('react-router').Router;
var routes = require('./config/routes');
import {Router, Route, IndexRoute, hasHistory} from "react-router";
function logPageView() {
  ga.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router history={hasHistory} onUpdate={logPageView}>{routes}</Router>,

  document.getElementById('app')
)
