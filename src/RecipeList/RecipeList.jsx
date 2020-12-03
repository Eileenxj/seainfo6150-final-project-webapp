import React from "react";
import PropTypes from "prop-types";
import RecipeListItem from "../RecipeListItem/RecipeListItem.jsx";
const RecipeList = (props) => {
  let displayContent;

  if (props.articles) {
    displayContent = (
      <ul>
        {props.articles.map((recipe) => (
          <RecipeListItem recipe={recipe} key={recipe.id} />
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
    recipes: PropTypes.array.isRequired
}
export default RecipeList;