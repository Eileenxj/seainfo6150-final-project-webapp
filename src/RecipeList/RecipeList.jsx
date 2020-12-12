import React from "react";
import PropTypes from "prop-types";
import RecipeListItem from "../RecipeListItem/RecipeListItem.jsx";
import styles from "./RecipeList.module.css"
const RecipeList = (props) => {
  let displayContent;

  if (props.recipes) {
    displayContent = (
      <div className={styles.container}>
          <ul className={styles.subcontainer}>
          {props.recipes.map((recipe) => (
              <RecipeListItem recipe={recipe} key={recipe.id}/>
          ))}
          </ul>
      </div>
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