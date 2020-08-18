
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'
import About from '../src/components/About/About'
import Footer from '../src/components/Footer/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* <Route exact path="/">
          <Home />
        </Route> */}
       
        <Route exact path="/about">
          <About />
        </Route>

          
        {/* <Route exact path="/schedule">
          <Schedule />
        </Route> */}

        {/* <Route exact path="/press">
          <Press />
        </Route> */}

        {/* <Route exact path="/media">
          <Media />
        </Route> */}

        {/* <Route exact path="/contact">
          <Contact />
        </Route> */}

        <Footer /> 
      </div>
    </Router>
     
  );
}

export default App;
