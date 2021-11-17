import './App.css';
import React, { Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Project } from './components/Project';
import  Contact  from './components/Contact';
import { Resume } from './components/Resume';

function App() {
  return (
    <BrowserRouter>
    <Fragment>
    <Navbar />
      <Switch>
        <Route path="/" component={Header} exact/> 
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="*" component={Header} exact/>
      </Switch>
    <Footer />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
