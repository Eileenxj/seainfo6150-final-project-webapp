import React from "react";
import CategoryIcon from "../CategoryIcon/CategoryIcon.jsx"
import PropTypes from "prop-types";

const AllCategories = (props) => {
  let displayContent;
  if (props.categories) {
    displayContent = (
      <ul>
        {props.categories.map( (category) => {
          return (<CategoryIcon category={category}/>);
          })
        }
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
}

AllCategories.propTypes = {
  categories: PropTypes.array.isRequired
}
export default AllCategories;
