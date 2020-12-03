import React from 'react'
import {Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="main-navigation">
          <h2 className="top-nav-heading">Top Navigation</h2>
          <div className="container">
            <div className="subcontainer">
              <Link to="/">Logo img</Link>
              <div className="nav-search">
                <form className="primary-search-form">
                  <label className="search-label">Search</label>
                  <input className="search-field" id="primary-search" placeholder="Find a Recipe"></input>
                  <button className="search-button" title="search">search icon</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavigationBar