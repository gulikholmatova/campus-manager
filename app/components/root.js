import React from 'react';
import { Route, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Welcome from './Welcome';
import Campuses from './Campuses';
import Students from './Students';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';

const Root = () => {
  return (
    <div>
      <Link to="/">
        <nav>Home page</nav>
      </Link>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/campuses" component={Campuses} />

      <Route exact path="/students/:studentId" component={SingleStudent} />
      <Route exact path="/campuses/:campusId" component={SingleCampus} />

      <Route
        exact
        path="/students/campuses/:campusId"
        component={SingleCampus}
      />
      <Route
        exact
        path="/campuses/students/:studentId"
        component={SingleStudent}
      />
    </div>
  );
};

export default Root;
