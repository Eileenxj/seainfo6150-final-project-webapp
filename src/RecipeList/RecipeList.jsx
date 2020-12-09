import React from "react";
import PropTypes from "prop-types";
import RecipeListItem from "../RecipeListItem/RecipeListItem.jsx";
const RecipeList = (props) => {
  let displayContent;

  if (props.recipes) {
    displayContent = (
      <ul>
      {props.recipes.map((recipe) => (
          <RecipeListItem recipe={recipe}/>
      ))}
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
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    pageName: PropTypes.string.isRequired
}
export default RecipeList;