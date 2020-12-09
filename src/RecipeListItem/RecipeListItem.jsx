import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
// import styles from "./ArticleListItem.module.css";
// import ArticleImage from "../ArticleImage/ArticleImage.jsx"
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const RecipeListItem = (props) => {
//   const [isTextShowing, setIsTextShowing] = useState(false);

//   function onClick() {
//     setIsTextShowing(!isTextShowing);
//   }

  return (
    <li>
        <Link to={`/recipe/${props.recipe.id}`}>
        <article>
        {/* <img src={require(`../images/${props.pageName}/${props.recipe.id}.jpg`)} alt={props.recipe.title} /> */}
        <img src={props.recipe.image} alt={props.recipe.title} />
        <h2>{props.recipe.title}</h2>
        </article>
        </Link>
    </li>
  );
};

RecipeListItem.propTypes = {
  recipe: PropTypes.object.isRequired
};
export default RecipeListItem;
