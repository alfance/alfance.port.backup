var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Layout = require('../components/Layout');
var Home = require('../components/Home/Home');

// projects
var ProjectHome = require('../components/Projects/ProjectHome');

var Project1 = require('../components/Projects/Project1');
var Project2 = require('../components/Projects/Project2');
var Project3 = require('../components/Projects/Project3');
var Project4 = require('../components/Projects/Project4');
var Project5 = require('../components/Projects/Project5');
var Project6 = require('../components/Projects/Project6');
var Project7 = require('../components/Projects/Project7');
var Project8 = require('../components/Projects/Project8');

var LogoAll = require('../components/ImageLayout/LogoAll');
// design works
var DesignHome = require('../components/Design/DesignHome');

// artworks
var ArtHome = require('../components/Art/ArtHome');

//photos
var PhotoHome = require('../components/Photo/PhotoHome');

//contact
var Contact = require('../components/Contact');

module.exports = (
    // main page, render the navigation
  <Route path="/" component={Layout}>
      // Home page. default page
          <IndexRoute component={Home} />
          <Route path="Home" component={Home} />
        // Design page.
          <Route path="DesignHome" component={DesignHome} />

      // art page.
        <Route path="ArtHome" component={ArtHome} />
        <Route path="PhotoHome" component={PhotoHome} />

        //contact page
        <Route path="Contact" component={Contact} />

    // project page.
      <Route path="ProjectHome" component={ProjectHome} />
      <Route path="Project1" component={Project1} />
      <Route path="Project2" component={Project2} />
      <Route path="Project3" component={Project3} />
      <Route path="Project4" component={Project4} />
      <Route path="Project5" component={Project5} />
      <Route path="Project6" component={Project6} />
      <Route path="Project7" component={Project7} />
      <Route path="Project8" component={Project8} />

      <Route path="LogoAll" component={LogoAll} />
  </Route>
);
