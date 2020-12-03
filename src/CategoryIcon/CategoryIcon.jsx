import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";

const CategoryIcon = (props) => {
  return (
    <li>
        <Link to={`/category/${props.category}`}>
            <div className={`category-${props.category}`}>
                <img src={`../images/${props.category}.jpg`} alt={props.category}/>
                <h3>{props.category}</h3>
            </div>             
        </Link>
    </li>
  );
};

CategoryIcon.propTypes = {
    category: PropTypes.string.isRequired,
};
export default CategoryIcon;
