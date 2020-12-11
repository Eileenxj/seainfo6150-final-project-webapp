import React, { useState } from "react";
// import styles from "./CSSModule.module.css";
import SearchResult from "../SearchResults/SearchResults";


const Search = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          // <div>Your form entry was {submittedForm.get("query")} and {submittedForm.get("type")}</div>
          <SearchResult query={submittedForm.get("query")} type={submittedForm.get("type")} number={submittedForm.get("number")}
          cuisine={submittedForm.get("cuisine")} equipment={submittedForm.get("equipment")} diet={submittedForm.get("diet")}
          sort={submittedForm.get("sort")} intolerances={submittedForm.get("intolerances")}
          />
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="query">Recipe or Keyword</label>
            <input type="text" name="query" id="queryId" required/><br/>

            <label htmlFor="type">Meal Type</label>
            <input type="text" name="type" id="typeId" required/><br/>

            <label htmlFor="number">The Number of Expected Results</label>
            <input type="text" name="number" id="numberId" required/><br/>

            <label htmlFor="cuisine">cuisine(s)</label>
            <input type="text" name="cuisine" id="cuisineId"/><br/>

            <label htmlFor="equipment">equipment</label>
            <input type="text" name="equipment" id="equipmentId"/><br/>

            <label htmlFor="dietDropdown">Diet</label>
            <select name="dietDropdown" id="dietDropdown">
              <option value="Gluten Free">Gluten Free</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Pescetarian">Pescetarian</option>
            </select><br/>

            <label htmlFor="sortDropdown">Sort By</label>
            <select name="sortDropdown" id="sortDropdown">
              <option value="calories">calories</option>
              <option value="popularity">popularity</option>
              <option value="healthiness">healthiness</option>
            </select><br/>

            <h3>Select Intolerances</h3>
            <input type="checkbox" id="dairy" name="dairy" value="dairy"/>
            <label for="dairy"> Dairy</label><br/>
            <input type="checkbox" id="egg" name="egg" value="egg"/>
            <label for="egg"> Egg</label><br/>
            <input type="checkbox" id="peanut" name="peanut" value="peanut"/>
            <label for="peanut"> Peanut</label><br/>
            <input type="submit" value="Submit"/>
            </form >
        )
      }
    </div>
  )
};

export default Search;
