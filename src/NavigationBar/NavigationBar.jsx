import React from 'react'
import {Link, Switch, Route } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import logo from "../images/logo.png";
const NavigationBar = () => {
    return (
        <nav className={styles.navigation}>
          <div className={styles.container}>
            <div className={styles.subcontainer}>
              <Link to="/"><img src={logo} alt={"logo"} /></Link>
              {/* <div className={styles.search}>
                <form className={styles.searchForm}>
                  <label className={styles.searchLabel}>Search</label>
                  <input className={styles.searchField} id="primary-search" placeholder="Find a Recipe"></input>
                  <button className={styles.searchButton} title="search">search icon</button>
                </form>
              </div> */}
              <Link to="/categories">All Categories</Link>
              <Link to="/search">Search by Ingredients</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
            </div>
          </div>
        </nav>
        
        
    )
}

export default NavigationBar