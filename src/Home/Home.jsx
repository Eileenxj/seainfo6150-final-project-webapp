import React from 'react'
import RecipeList from "../RecipeList/RecipeList.jsx";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
const Home = (props) => {
    return (
        <div>
            <h1 className={styles.pagetitle}>Home</h1>
            <p className={styles.intro}>Get Popular Recipes, Enjoy Food With Your Friends</p>
            <RecipeList recipes={props.recipes}/>
            {/* <RecipeList recipes={props.recipes}/> */}
                
        </div>
    )
}
Home.propTypes = {
    recipes: PropTypes.array.isRequired
    // categories: PropTypes.array.isRequired
}
export default Home
