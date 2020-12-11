import React, {useState, useEffect} from 'react'
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import styles from './RecipeDetail.module.css'
const RecipeDetail = (props) => {
    const [fetchedRecipeDetail, setFetchedRecipeDetail] = useState();
    const baseUrl = "https://api.spoonacular.com//recipes/informationBulk";
    const apiKey = "55e8527fa8e143e1a96083d0f10aa7ee";
    useEffect(() => {
        const fetchData = async () => {
            let url = baseUrl + `?apiKey=${apiKey}`;
            url += `&ids=${props.id}`;
        // performs a GET request 
            const response = await fetch(url);
            const responseJson = await response.json();
            setFetchedRecipeDetail(responseJson[0]);
                
        };
        if (isEmpty(fetchedRecipeDetail)) {
            fetchData();
        }
    }, [fetchedRecipeDetail, props.id]);

    return isEmpty(fetchedRecipeDetail) ? (<div>You have no data</div>) :(
        <div>
            <h1>The RecipeDetail page</h1>
            <div>
                <article>
                <div>
                <img src={fetchedRecipeDetail.image} title={fetchedRecipeDetail.title}/>
                <h2>{fetchedRecipeDetail.title}</h2>
                <div>{ ReactHtmlParser(fetchedRecipeDetail.summary) }</div>
                <div>{ ReactHtmlParser(fetchedRecipeDetail.instructions) }</div>
                </div>
            </article>
            </div>
        </div>
    )
}

RecipeDetail.propTypes = {
    id: PropTypes.string.isRequired,
  };

export default RecipeDetail
