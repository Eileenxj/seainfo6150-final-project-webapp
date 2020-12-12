import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";
const recipes = [
  {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 14,
      "spoonacularScore": 95.0,
      "healthScore": 81.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 620.78,
      "extendedIngredients": [
          {
              "id": 1059195,
              "aisle": "Canned and Jarred",
              "image": "black-olives.jpg",
              "consistency": "solid",
              "name": "black olives",
              "original": "50g pitted black olives, halved",
              "originalString": "50g pitted black olives, halved",
              "originalName": "pitted black olives, halved",
              "amount": 50.0,
              "unit": "g",
              "meta": [
                  "black",
                  "pitted",
                  "halved"
              ],
              "metaInformation": [
                  "black",
                  "pitted",
                  "halved"
              ],
              "measures": {
                  "us": {
                      "amount": 1.764,
                      "unitShort": "oz",
                      "unitLong": "ounces"
                  },
                  "metric": {
                      "amount": 50.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          },
          {
              "id": 15015,
              "aisle": "Seafood",
              "image": "cod-fillet.jpg",
              "consistency": "solid",
              "name": "cod fillets",
              "original": "500 g cod fillets, fresh or frozen",
              "originalString": "500 g cod fillets, fresh or frozen",
              "originalName": "cod fillets, fresh or frozen",
              "amount": 500.0,
              "unit": "g",
              "meta": [
                  "fresh"
              ],
              "metaInformation": [
                  "fresh"
              ],
              "measures": {
                  "us": {
                      "amount": 1.102,
                      "unitShort": "lb",
                      "unitLong": "pounds"
                  },
                  "metric": {
                      "amount": 500.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          },
          {
              "id": 11297,
              "aisle": "Produce;Spices and Seasonings",
              "image": "parsley.jpg",
              "consistency": "solid",
              "name": "fresh parsley",
              "original": "4 Tbs fresh parsley, chopped",
              "originalString": "4 Tbs fresh parsley, chopped",
              "originalName": "fresh parsley, chopped",
              "amount": 4.0,
              "unit": "Tbs",
              "meta": [
                  "fresh",
                  "chopped"
              ],
              "metaInformation": [
                  "fresh",
                  "chopped"
              ],
              "measures": {
                  "us": {
                      "amount": 4.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tbs"
                  },
                  "metric": {
                      "amount": 4.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tbs"
                  }
              }
          },
          {
              "id": 11297,
              "aisle": "Produce;Spices and Seasonings",
              "image": "parsley.jpg",
              "consistency": "solid",
              "name": "fresh parsley leaves",
              "original": "Fresh parsley leaves, chopped",
              "originalString": "Fresh parsley leaves, chopped",
              "originalName": "Fresh parsley , chopped",
              "amount": 1.0,
              "unit": "leaves",
              "meta": [
                  "fresh",
                  "chopped"
              ],
              "metaInformation": [
                  "fresh",
                  "chopped"
              ],
              "measures": {
                  "us": {
                      "amount": 1.0,
                      "unitShort": "leaf",
                      "unitLong": "leave"
                  },
                  "metric": {
                      "amount": 1.0,
                      "unitShort": "leaf",
                      "unitLong": "leave"
                  }
              }
          },
          {
              "id": 9152,
              "aisle": "Produce",
              "image": "lemon-juice.jpg",
              "consistency": "liquid",
              "name": "lemon juice",
              "original": "1 Tbs lemon juice",
              "originalString": "1 Tbs lemon juice",
              "originalName": "lemon juice",
              "amount": 1.0,
              "unit": "Tbs",
              "meta": [],
              "metaInformation": [],
              "measures": {
                  "us": {
                      "amount": 1.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tb"
                  },
                  "metric": {
                      "amount": 1.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tb"
                  }
              }
          },
          {
              "id": 4053,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "olive-oil.jpg",
              "consistency": "liquid",
              "name": "olive oil",
              "original": "1 Tbs olive oil",
              "originalString": "1 Tbs olive oil",
              "originalName": "olive oil",
              "amount": 1.0,
              "unit": "Tbs",
              "meta": [],
              "metaInformation": [],
              "measures": {
                  "us": {
                      "amount": 1.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tb"
                  },
                  "metric": {
                      "amount": 1.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tb"
                  }
              }
          },
          {
              "id": 4053,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "olive-oil.jpg",
              "consistency": "liquid",
              "name": "olive oil",
              "original": "2 Tbs olive oil",
              "originalString": "2 Tbs olive oil",
              "originalName": "olive oil",
              "amount": 2.0,
              "unit": "Tbs",
              "meta": [],
              "metaInformation": [],
              "measures": {
                  "us": {
                      "amount": 2.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tbs"
                  },
                  "metric": {
                      "amount": 2.0,
                      "unitShort": "Tbs",
                      "unitLong": "Tbs"
                  }
              }
          },
          {
              "id": 10411529,
              "aisle": "Produce",
              "image": "plum-tomatoes.png",
              "consistency": "solid",
              "name": "plum tomatoes",
              "original": "240g whole plum tomatoes, canned",
              "originalString": "240g whole plum tomatoes, canned",
              "originalName": "whole plum tomatoes, canned",
              "amount": 240.0,
              "unit": "g",
              "meta": [
                  "whole",
                  "canned"
              ],
              "metaInformation": [
                  "whole",
                  "canned"
              ],
              "measures": {
                  "us": {
                      "amount": 8.466,
                      "unitShort": "oz",
                      "unitLong": "ounces"
                  },
                  "metric": {
                      "amount": 240.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          },
          {
              "id": 11362,
              "aisle": null,
              "image": null,
              "consistency": null,
              "name": "potatoes",
              "original": "300 g potatoes",
              "originalString": "300 g potatoes",
              "originalName": "potatoes",
              "amount": 300.0,
              "unit": "g",
              "meta": [],
              "metaInformation": [],
              "measures": {
                  "us": {
                      "amount": 10.582,
                      "unitShort": "oz",
                      "unitLong": "ounces"
                  },
                  "metric": {
                      "amount": 300.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          },
          {
              "id": 11821,
              "aisle": "Produce",
              "image": "red-pepper.jpg",
              "consistency": "solid",
              "name": "red bell pepper",
              "original": "100g fresh red pepper, trimmed, cut into small strips",
              "originalString": "100g fresh red pepper, trimmed, cut into small strips",
              "originalName": "fresh red pepper, trimmed, cut into small strips",
              "amount": 100.0,
              "unit": "g",
              "meta": [
                  "fresh",
                  "red",
                  "trimmed",
                  "cut into small strips"
              ],
              "metaInformation": [
                  "fresh",
                  "red",
                  "trimmed",
                  "cut into small strips"
              ],
              "measures": {
                  "us": {
                      "amount": 3.527,
                      "unitShort": "oz",
                      "unitLong": "ounces"
                  },
                  "metric": {
                      "amount": 100.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          },
          {
              "id": 2047,
              "aisle": "Spices and Seasonings",
              "image": "salt.jpg",
              "consistency": "solid",
              "name": "salt",
              "original": "½ tsp salt",
              "originalString": "½ tsp salt",
              "originalName": "salt",
              "amount": 0.5,
              "unit": "tsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                  "us": {
                      "amount": 0.5,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                  },
                  "metric": {
                      "amount": 0.5,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                  }
              }
          },
          {
              "id": 7916,
              "aisle": "Meat",
              "image": "smoked-sausage.jpg",
              "consistency": "solid",
              "name": "smoked sausage",
              "original": "100g chorizo or a semi-smoked sausage, cubed",
              "originalString": "100g chorizo or a semi-smoked sausage, cubed",
              "originalName": "chorizo or a semi-smoked sausage, cubed",
              "amount": 100.0,
              "unit": "g",
              "meta": [
                  "cubed"
              ],
              "metaInformation": [
                  "cubed"
              ],
              "measures": {
                  "us": {
                      "amount": 3.527,
                      "unitShort": "oz",
                      "unitLong": "ounces"
                  },
                  "metric": {
                      "amount": 100.0,
                      "unitShort": "g",
                      "unitLong": "grams"
                  }
              }
          }
      ],
      "id": 639851,
      "title": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "http://www.foodista.com/recipe/GNSQNH5W/cod-with-tomatoes-olives-and-chorizo",
      "image": "https://spoonacular.com/recipeImages/639851-556x370.jpg",
      "imageType": "jpg",
      "summary": "Need a <b>gluten free, dairy free, fodmap friendly, and whole 30 main course</b>? Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes could be a super recipe to try. For <b>$6.21 per serving</b>, this recipe <b>covers 47%</b> of your daily requirements of vitamins and minerals. This recipe makes 2 servings with <b>768 calories</b>, <b>56g of protein</b>, and <b>47g of fat</b> each. <b>Thanksgiving</b> will be even more special with this recipe. This recipe from Foodista has 14 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Head to the store and pick up salt, cod fillets, plum tomatoes, and a few other things to make it today. To use up the salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-turnovers-recipe-48175\">Apple Turnovers Recipe</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-668002\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>, <a href=\"https://spoonacular.com/recipes/olive-oil-mashed-potatoes-121569\">Olive Oil Mashed Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/mashed-potatoes-with-olive-oil-and-herbs-312137\">Mashed Potatoes with Olive Oil and Herbs</a> for similar recipes.",
      "cuisines": [],
      "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
      ],
      "diets": [
          "gluten free",
          "dairy free"
      ],
      "occasions": [
          "thanksgiving",
          "christmas"
      ],
      "instructions": "<ol><li>If frozen, thaw completely the cod fillets, and dry them with paper towels. season with salt and set aside.</li><li>Peel and quarter the potatoes, and cook in lightly salted water until tender.</li><li>Meanwhile, fry the pepper in olive oil for 3-4 minutes.</li><li>Add cubed sausage, saut for another 2-3 minutes.</li><li>Add the whole plum tomatoes,  halve them with a flat end of a wooden spoon.</li><li>Stir in olives and parsley, cook the sauce gently for 2 minutes. Set aside.</li><li>Drain the potatoes and season with parsley, olive oil and lemon juice. Use a hand masher to mix and mash. Leave in a warm place.</li><li>Place the cod fillets into a hot oiled non-stick pan and cook over a high heat for 5 minutes on each side or until golden brown.</li><li>Serve with mashed potatoes and sauce.</li></ol>",
      "analyzedInstructions": [
          {
              "name": "",
              "steps": [
                  {
                      "number": 1,
                      "step": "If frozen, thaw completely the cod fillets, and dry them with paper towels. season with salt and set aside.Peel and quarter the potatoes, and cook in lightly salted water until tender.Meanwhile, fry the pepper in olive oil for 3-4 minutes.",
                      "ingredients": [
                          {
                              "id": 15015,
                              "name": "cod fillets",
                              "localizedName": "cod fillets",
                              "image": "cod-fillet.jpg"
                          },
                          {
                              "id": 4053,
                              "name": "olive oil",
                              "localizedName": "olive oil",
                              "image": "olive-oil.jpg"
                          },
                          {
                              "id": 11352,
                              "name": "potato",
                              "localizedName": "potato",
                              "image": "potatoes-yukon-gold.png"
                          },
                          {
                              "id": 1002030,
                              "name": "pepper",
                              "localizedName": "pepper",
                              "image": "pepper.jpg"
                          },
                          {
                              "id": 14412,
                              "name": "water",
                              "localizedName": "water",
                              "image": "water.png"
                          },
                          {
                              "id": 2047,
                              "name": "salt",
                              "localizedName": "salt",
                              "image": "salt.jpg"
                          }
                      ],
                      "equipment": [
                          {
                              "id": 405895,
                              "name": "paper towels",
                              "localizedName": "paper towels",
                              "image": "paper-towels.jpg"
                          }
                      ],
                      "length": {
                          "number": 4,
                          "unit": "minutes"
                      }
                  },
                  {
                      "number": 2,
                      "step": "Add cubed sausage, saut for another 2-3 minutes.",
                      "ingredients": [
                          {
                              "id": 1017063,
                              "name": "sausage",
                              "localizedName": "sausage",
                              "image": "raw-pork-sausage.png"
                          }
                      ],
                      "equipment": [],
                      "length": {
                          "number": 3,
                          "unit": "minutes"
                      }
                  },
                  {
                      "number": 3,
                      "step": "Add the whole plum tomatoes,  halve them with a flat end of a wooden spoon.Stir in olives and parsley, cook the sauce gently for 2 minutes. Set aside.",
                      "ingredients": [
                          {
                              "id": 10411529,
                              "name": "plum tomato",
                              "localizedName": "plum tomato",
                              "image": "plum-tomatoes.png"
                          },
                          {
                              "id": 11297,
                              "name": "parsley",
                              "localizedName": "parsley",
                              "image": "parsley.jpg"
                          },
                          {
                              "id": 9195,
                              "name": "olives",
                              "localizedName": "olives",
                              "image": "olives-mixed.jpg"
                          },
                          {
                              "id": 0,
                              "name": "sauce",
                              "localizedName": "sauce",
                              "image": ""
                          }
                      ],
                      "equipment": [
                          {
                              "id": 404732,
                              "name": "wooden spoon",
                              "localizedName": "wooden spoon",
                              "image": "wooden-spoon.jpg"
                          }
                      ],
                      "length": {
                          "number": 2,
                          "unit": "minutes"
                      }
                  },
                  {
                      "number": 4,
                      "step": "Drain the potatoes and season with parsley, olive oil and lemon juice. Use a hand masher to mix and mash. Leave in a warm place.",
                      "ingredients": [
                          {
                              "id": 9152,
                              "name": "lemon juice",
                              "localizedName": "lemon juice",
                              "image": "lemon-juice.jpg"
                          },
                          {
                              "id": 4053,
                              "name": "olive oil",
                              "localizedName": "olive oil",
                              "image": "olive-oil.jpg"
                          },
                          {
                              "id": 11352,
                              "name": "potato",
                              "localizedName": "potato",
                              "image": "potatoes-yukon-gold.png"
                          },
                          {
                              "id": 11297,
                              "name": "parsley",
                              "localizedName": "parsley",
                              "image": "parsley.jpg"
                          }
                      ],
                      "equipment": []
                  },
                  {
                      "number": 5,
                      "step": "Place the cod fillets into a hot oiled non-stick pan and cook over a high heat for 5 minutes on each side or until golden brown.",
                      "ingredients": [
                          {
                              "id": 15015,
                              "name": "cod fillets",
                              "localizedName": "cod fillets",
                              "image": "cod-fillet.jpg"
                          }
                      ],
                      "equipment": [
                          {
                              "id": 404645,
                              "name": "frying pan",
                              "localizedName": "frying pan",
                              "image": "pan.png"
                          }
                      ],
                      "length": {
                          "number": 5,
                          "unit": "minutes"
                      }
                  },
                  {
                      "number": 6,
                      "step": "Serve with mashed potatoes and sauce.",
                      "ingredients": [
                          {
                              "id": 11352,
                              "name": "potato",
                              "localizedName": "potato",
                              "image": "potatoes-yukon-gold.png"
                          },
                          {
                              "id": 0,
                              "name": "sauce",
                              "localizedName": "sauce",
                              "image": ""
                          }
                      ],
                      "equipment": []
                  }
              ]
          }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/cod-with-tomato-olive-chorizo-sauce-and-mashed-potatoes-639851"
  }
]

it("renders the home component correctly", () => {
  const { container } = render(<Home recipes={recipes}/>);
  expect(container).toMatchSnapshot();
});
