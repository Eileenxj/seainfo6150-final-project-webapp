import React, {useState, useEffect} from 'react'
import RecipeList from "../RecipeList/RecipeList.jsx";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
// import styles from './RecipeDetail.module.css'
const SearchResult = (props) => {
    const [fetchedResults, setFetchedResults] = useState();
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "55e8527fa8e143e1a96083d0f10aa7ee";
    
    useEffect(() => {
        const fetchData = async () => {
            let url = baseUrl + `?apiKey=${apiKey}`;
            url += `&query=${props.query}`;
            url += `&type=${props.type}`;
            url += `&number=${props.number}`;
            if(props.cuisine) {
                url += `&cuisine=${props.cuisine}`;
            }
            if(props.equipment) {
                url += `&equipment=${props.equipment}`;
            }
            if(props.diet) {
                url += `&diet=${props.diet}`;
            }
            if(props.sort) {
                url += `&sort=${props.sort}`;
            }
            if(props.intolerances) {
                url += `&intolerances=${props.intolerances}`;
            }
        // performs a GET request  
            const response = await fetch(url);
            const responseJson = await response.json();
            setFetchedResults(responseJson["results"]);
                
        };
        if (isEmpty(fetchedResults)) {
            fetchData();
        }
    }, [fetchedResults]);

return (!props.query || !props.type || !props.number)? (<div>You must input query, type and number. </div>) : (
        <div>
            {/* The bar page with categoryId of {props.categoryId} and productId of {props.productId} */}
            <h1>Search Result </h1>
            <RecipeList recipes={fetchedResults}/>
        </div>
    )
}
SearchResult.propTypes = {
    query: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
    equipment:  PropTypes.string,
    diet: PropTypes.string,
    sort: PropTypes.string,
    intolerances: PropTypes.string
  }
export default SearchResult
