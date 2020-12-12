import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./RecipeListItem.module.css";
// import ArticleImage from "../ArticleImage/ArticleImage.jsx"
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const RecipeListItem = (props) => {
//   const [isTextShowing, setIsTextShowing] = useState(false);

//   function onClick() {
//     setIsTextShowing(!isTextShowing);
//   }

  return (
    <li key={props.key} className={styles.container}>
        <Link to={`/recipe/${props.recipe.id}`}>
        <div className={styles.subcontainer}>
          <img src={props.recipe.image} alt={props.recipe.title} className={styles.image}/>
          <div className={styles.textbox}>
            <h2 className={styles.title}>{props.recipe.title}</h2>
          </div>       
        </div>
        </Link>
    </li>
  );
};

RecipeListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  key: PropTypes.object.isRequired
};
export default RecipeListItem;
