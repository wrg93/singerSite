import React from "react"
import "./Navbar.css"
import Connect from '../Connect/Connect'
import { Link, useLocation } from "react-router-dom";

function Navbar(){
  const location = useLocation();

    return(

   <div className="container-fluid nav-bar-container">
      <nav className="navbar navbar-expand-sm navbar-light navbar-custom">
        <div className="Name">
          <a className="navbar-brand" href="/">Rachel Freed</a>
          <Connect />
        </div>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto flex-row ml-md-auto d-md-flex">
            <li className="nav-item">
            <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className={location.pathname === "/schedule" ? "nav-link active" : "nav-link"}>
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/roles" className={location.pathname === "/roles" ? "nav-link active" : "nav-link"}>
                Roles
              </Link>
              <Link to="/press" className={location.pathname === "/press" ? "nav-link active" : "nav-link"}>
                Press
              </Link>
              <Link to="/media" className={location.pathname === "/media" ? "nav-link active" : "nav-link"}>
                Media
              </Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
          </ul>
          </div>
      </nav>
    </div>
    
    );

}


export default Navbar