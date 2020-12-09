import React, {useState, useEffect}from 'react'
import RecipeList from "../RecipeList/RecipeList.jsx";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

const Category = (props) => {
    const [fetchedCategoryData, setFetchedCategoryData] = useState();
    useEffect(() => {
        const fetchData = async () => {
        // performs a GET request       
            if(props.categoryId){
                const response = await fetch(`https://demo3289634.mockable.io/category/${props.categoryId}`);
                const responseJson = await response.json();
                setFetchedCategoryData(responseJson["recipes"]);
                // console.log(isEmpty(fetchedCategoryData));
            }
        };
        if (isEmpty(fetchedCategoryData)) {
            fetchData();
        }
    }, [fetchedCategoryData]);

    return isEmpty(fetchedCategoryData) ? (<div>You have no data</div>) :(
        <div>
            {/* The bar page with categoryId of {props.categoryId} and productId of {props.productId} */}
            <h1>{props.categoryId} </h1>
            <RecipeList recipes={fetchedCategoryData}/>
        </div>
    )
}
Category.propTypes = {
    categoryId: PropTypes.string.isRequired
  }
export default Category
