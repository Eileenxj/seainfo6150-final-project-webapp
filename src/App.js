import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar.jsx"
import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";
import RecipeDetail from "./RecipeDetails/RecipeDetail.jsx"
import Error from "./Error/Error.jsx";
import { isEmpty } from "lodash";
import AllCategories from "./AllCategories/AllCategories.jsx";
import Search from "./Search/Search.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
function App() {
  const [fetchedRecipes, setFetchedRecipes] = useState();
  const [fetchedCategories, setFetchedCategories] = useState();
  useEffect(() => {
    const fetchedRecipes = async () => {
      // performs a GET request
      const recipesResponse = await fetch("https://demo3289634.mockable.io/recipes");
      const recipesResponseJson = await recipesResponse.json();
      setFetchedRecipes(recipesResponseJson["recipes"]);
    };
    const fetchedCategories = async () => {
      // performs a GET request
      const categoriesResponse = await fetch("https://demo3289634.mockable.io/categories");
      const categoriesResponseJson = await categoriesResponse.json();
      setFetchedCategories(categoriesResponseJson["categories"]);
    };

    if (isEmpty(fetchedRecipes)) {
      fetchedRecipes();
    }
    if (isEmpty(fetchedCategories)) {
      fetchedCategories();
    }


  }, [fetchedRecipes]);

  return isEmpty(fetchedRecipes) ? null : (
    <div className="recipe-app">
      <head>
        <title>PopularRecipes | Food, friends and love</title>
      </head>
      <header>
        <NavigationBar/>
        <meta name="referrer" content="no-referrer"/>
      </header>
      
      <Switch>
        <Route exact path="/"><Home recipes={fetchedRecipes}/></Route>
        <Route exact path="/categories"><AllCategories categories={fetchedCategories}/></Route>
        <Route exact path="/search"><Search/></Route>
        <Route exact path="/aboutus"><AboutUs/></Route>
        <Route exact path="/contactus"><ContactUs/></Route>
        <Route exact path="/category/:categoryId"     
        render = {({ match }) => (
                  <Category categoryId={match.params.categoryId}/>
                  )}
        />
        <Route exact path="/recipe/:recipeId"     
        render = {({ match }) => (
                  <RecipeDetail id={match.params.recipeId}/>
                  )}
        />
      </Switch>
    </div>
  );
}

export default App;
