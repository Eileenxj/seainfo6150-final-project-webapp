import React, { useState } from "react";
import styles from "./Search.module.css";
import SearchResult from "../SearchResults/SearchResults";


const Search = () => {
  const [submittedForm, setSubmittedForm] = useState();
  const [warningInfo, setWarningInfo] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };
const handleChange = (e) => {
  let value = e.target.value;
  if(!(/[^0-9a-zA-Z,]/g.test(value))) {
    setWarningInfo("One or more, comma separated");
  } else {
    setWarningInfo("");
  }
}
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
          <div className={styles.container}>
          <form onSubmit={onSubmit} className={styles.form}>
            <h3 className={styles.title}>Search Recipes Form</h3>
            <label htmlFor="query" className={styles.label}>Recipe or Keyword</label>
            <input type="text" name="query" id="queryId" className={styles.input} required/><br/>

            <label htmlFor="type" className={styles.label}>Meal Type</label>
            <input type="text" name="type" id="typeId" className={styles.input} 
              onblur="if(this.value.replace(/^ +| +$/g,'')=='')alert('Meal Type can not be empty!')"
              required/><br/>

            <label htmlFor="number" className={styles.label}>The Number of Expected Results</label>
            <input type="text" name="number" id="numberId" className={styles.input} 
              onblur="if(this.value.replace(/^ +| +$/g,'')=='')alert('Number can not be empty!')"
              required/><br/>

            <label htmlFor="cuisine" className={styles.label}>cuisine(optional)</label>
            <input type="text" name="cuisine" id="cuisineId" className={styles.input} 
            onChange={handleChange} placeholder={warningInfo}/><br/>

            <label htmlFor="equipment" className={styles.label}>equipment(optional)</label>
            <input type="text" name="equipment" id="equipmentId" className={styles.input}
            onChange={handleChange} placeholder={warningInfo}/><br/>

            <label htmlFor="dietDropdown" className={styles.label}>Diet(optional)</label><br/>
            <select name="dietDropdown" id="dietDropdown" className={styles.dropdown}>
              <option value="empty">(empty)</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Pescetarian">Pescetarian</option>
            </select><br/>

            <label htmlFor="sortDropdown" className={styles.label}>Sort By(optional)</label><br/>
            <select name="sortDropdown" id="sortDropdown" className={styles.dropdown}>
              <option value="empty">(empty)</option>
              <option value="calories">calories</option>
              <option value="popularity">popularity</option>
              <option value="healthiness">healthiness</option>
            </select><br/>

            <label className={styles.label}>Select Intolerances(optional)</label><br/>
            
            <label for="dairy"> 
              <input type="checkbox" id="dairy" name="dairy" value="dairy"/>
              Dairy 
              <span ></span>
            </label><br/>
           
            <label for="egg"> 
              <input type="checkbox" id="egg" name="egg" value="egg"/>
              Egg
              <span></span>
            </label><br/>
            
            <label for="peanut"> 
              <input type="checkbox" id="peanut" name="peanut" value="peanut"/>
              Peanut
              <span ></span>
            </label><br/>

            <input type="submit" value="Submit" className={styles.submit}/>
            </form >
            </div>
        )
      }
    </div>
  )
};

export default Search;
