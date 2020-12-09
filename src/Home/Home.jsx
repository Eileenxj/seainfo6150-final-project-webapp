import React from 'react'
import AllCategories from "../AllCategories/AllCategories.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import PropTypes from "prop-types";
const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Get Popular Recipes, Enjoy Food With Your Friends</h2>
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
