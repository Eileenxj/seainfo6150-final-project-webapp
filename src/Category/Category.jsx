import {React,useState, useEffect} from 'react'
import RecipeList from "../RecipeList/RecipeList.jsx";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

const Category = (props) => {
    const [fetchedCategoryData, setFetchedCategoryData] = useState();
    useEffect(() => {
        const fetchData = async ({categoryId}) => {
        // performs a GET request
            if(categoryId){
                const response = await fetch(`https://demo3289634.mockable.io/recipe/${categoryId}`);
                const responseJson = await response.json();
                setFetchedCategoryData(Object.values(responseJson));
            }
        };
        if (isEmpty(fetchedCategoryData)) {
            fetchData(props.categoryId);
        }
    }, [fetchedCategoryData, props.categoryId]);
    
    return isEmpty(fetchedCategoryData) ? null :(
        <div>
            {/* The bar page with categoryId of {props.categoryId} and productId of {props.productId} */}
            <h1>{props.categoryId} </h1>
            <RecipeList recipes={fetchedCategoryData.recipes}/>
        </div>
    )
}
Category.propTypes = {
    categoryId: PropTypes.string.isRequired
  }
export default Category
