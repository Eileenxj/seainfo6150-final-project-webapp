import React from "react";
import PropTypes from "prop-types";
// import styles from "./ArticleListItem.module.css";
// import ArticleImage from "../ArticleImage/ArticleImage.jsx"
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const ArticleListItem = (props) => {
//   const [isTextShowing, setIsTextShowing] = useState(false);

//   function onClick() {
//     setIsTextShowing(!isTextShowing);
//   }

  return (
    <li>
      <article>
        <div>
        <img url={props.recipe.image} alt={props.recipe.title} />
          <h2>{props.recipe.title}</h2>
          {/* {isTextShowing && (
            <div>
              <p>{props.recipe.summary}</p>
            </div>
          )} */}
        </div>
        {/* <ArticleTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        /> */}
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
