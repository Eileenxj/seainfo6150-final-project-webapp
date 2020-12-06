import React from 'react'
import AllCategories from "../AllCategories/AllCategories.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import PropTypes from "prop-types";
const Home = (props) => {
    return (
        <div>
            {/* {props.recipes} */}
            {/* <AllCategories categories={props.categories}/> */}
            {/* <RecipeList recipes={props.recipes}/> */}
                
        </div>
    )
}
Home.propTypes = {
    recipes: PropTypes.array.isRequired
    // categories: PropTypes.array.isRequired
}
export default Home
