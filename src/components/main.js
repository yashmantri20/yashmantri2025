  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './project';

const Main = () => (
  <Switch>
    <Route exact path="/yashmantri" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Projects} /> 
    <Route path="/landingpage" component={LandingPage}/>
  </Switch>
)

export default Main;
