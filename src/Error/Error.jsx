import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/PageNotFound.gif';
import styles from "../Error/Error.module.css";
const Error = () => {
    return (
        <div className={styles.container}>
            <img src={PageNotFound} className={styles.image} alt="pageNotFound"/>
            <p className={styles.text}>
              <Link to="/">Go to Home </Link>
            </p>
        </div>
    )
}

export default Error
