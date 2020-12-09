import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import styles from "./CategoryIcon.module.css";
const CategoryIcon = (props) => {
  return (
    <li>
        <div className={`category-${props.category}`}>
            <img src={require(`../images/categories/${props.category}.jpg`)} 
            alt={props.category}
            className={styles.image}/>
            <h3>{props.category}</h3>
        </div> 
    </li>
  );
};

CategoryIcon.propTypes = {
    category: PropTypes.string.isRequired,
};
export default CategoryIcon;
