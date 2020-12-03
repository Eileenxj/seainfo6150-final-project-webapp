import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar.jsx"
import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";
import RecipeDetail from "./RecipeDetails/RecipeDetail.jsx"
import Error from "./Error/Error.jsx";
import { isEmpty } from "lodash";

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
      setFetchedRecipes(Object.values(recipesResponseJson));
    };
    const fetchedCategories = async () => {
      // performs a GET request
      const categoriesResponse = await fetch("https://demo3289634.mockable.io/categories");
      const categoriesResponseJson = await categoriesResponse.json();
      setFetchedCategories(Object.values(categoriesResponseJson));
    };

    if (isEmpty(fetchedRecipes)) {
      fetchedRecipes();
    }
    if (isEmpty(fetchedCategories)) {
      fetchedCategories();
    }


  }, [fetchedRecipes, fetchedCategories]);

  return isEmpty(fetchedRecipes) ? null : (
    <div className="recipe-app">
      <head>
        <title>PopularRecipes | Food, friends and love</title>
      </head>
      <header>
        <NavigationBar/>
      </header>
      <Switch>
        <Route path="/"><Home recipes={fetchedRecipes} categories={fetchedCategories}/></Route>
        <Route
          path="/category/:categoryid"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Category
              categoryId={match.params.categoryId}
            />
          )}
        />
        <Route
          path="/recipe/:id"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <RecipeDetail
              id={match.params.id}
            />
          )}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
