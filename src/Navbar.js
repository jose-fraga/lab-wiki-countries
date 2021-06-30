import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
        </nav>
    );
}

export default Navbar;