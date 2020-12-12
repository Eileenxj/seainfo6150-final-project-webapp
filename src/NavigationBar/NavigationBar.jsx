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
              <Link to="/categories"><h6 className={styles.h6}>All Categories</h6></Link>
              <Link to="/search"><h6 className={styles.h6}>Search Recipes</h6></Link>
              <Link to="/aboutus"><h6 className={styles.h6}>About Us</h6></Link>
              <Link to="/contactus"><h6 className={styles.h6}>Contact Us</h6></Link>
            </div>
          </div>
        </nav>
        
        
    )
}

export default NavigationBar