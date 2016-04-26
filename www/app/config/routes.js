var React = require('react');
var Layout = require('../components/Layout');
var Home = require('../components/Home/Home');

//Photos APi
var ImageHome = require('../components/ImageLayout/ImageHome');
var ImageLayout = require('../components/ImageLayout/ImageLayout');

// projects
var ProjectHome = require('../components/Projects/ProjectHome');
var Project = require('../components/Projects/Project');
var Project1 = require('../components/Projects/Project1');
var Project2 = require('../components/Projects/Project2');

// design works
var DesignHome = require('../components/Design/DesignHome');
var DesignWeb = require('../components/Design/DesignWeb');
var DesignPrint = require('../components/Design/DesignPrint');

// artworks
var ArtHome = require('../components/Art/ArtHome');

//photos
var PhotoHome = require('../components/Photo/PhotoHome');

//contact
var Contact = require('../components/Contact');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    // main page, render the navigation
  <Route path="/" component={Layout}>
      // Home page. default page
          <IndexRoute component={Home} />
          <Route path="Home" component={Home} />

      // project page.
        <Route path="ProjectHome" component={ProjectHome} />
        <Route path="Project/:ProjectID" component={Project} />
        <Route path="Project2" component={Project2} />
        <Route path="Project1" component={Project1} />

        // Design page.
          <Route path="DesignHome" component={DesignHome} />
          <Route path="DesignWeb" component={DesignWeb} />

      // art page.
        <Route path="ArtHome" component={ArtHome} />
        <Route path="PhotoHome" component={PhotoHome} />

        //contact page
        <Route path="Contact" component={Contact} />

        //Image layout
        <Route path="ImageHome" component={ImageHome} />
        <Route path="ImageLayout" component={ImageLayout} />
  </Route>
);
