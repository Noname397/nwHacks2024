const exampleList = 
[
    {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 22,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 9,
        "healthScore": 5,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 150.15,
        "extendedIngredients": [
            {
                "id": 9003,
                "aisle": "Produce",
                "image": "apple.jpg",
                "consistency": "SOLID",
                "name": "apples",
                "nameClean": "apple",
                "original": "3 cups apples (4 large), pared and thinly sliced",
                "originalName": "apples (4 large), pared and thinly sliced",
                "amount": 3,
                "unit": "cups",
                "meta": [
                    "thinly sliced",
                    "(4 large)"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 375,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 9003,
                "aisle": "Produce",
                "image": "apple.jpg",
                "consistency": "SOLID",
                "name": "apples",
                "nameClean": "apple",
                "original": "10 cups apples, peeled, cored and diced",
                "originalName": "apples, peeled, cored and diced",
                "amount": 10,
                "unit": "cups",
                "meta": [
                    "diced",
                    "cored",
                    "peeled"
                ],
                "measures": {
                    "us": {
                        "amount": 10,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 1.25,
                        "unitShort": "kgs",
                        "unitLong": "kgs"
                    }
                }
            },
            {
                "id": 18064,
                "aisle": "Bakery/Bread",
                "image": "white-bread.jpg",
                "consistency": "SOLID",
                "name": "bread",
                "nameClean": "bread",
                "original": "2 cups cubed homemade bread (no crusts)",
                "originalName": "cubed homemade bread (no crusts)",
                "amount": 2,
                "unit": "cups",
                "meta": [
                    "homemade",
                    "cubed",
                    "(no crusts)"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 473.176,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "3/4 stick butter, melted",
                "originalName": "butter, melted",
                "amount": 0.75,
                "unit": "stick",
                "meta": [
                    "melted"
                ],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "stick",
                        "unitLong": "sticks"
                    },
                    "metric": {
                        "amount": 0.75,
                        "unitShort": "stick",
                        "unitLong": "sticks"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "2 tablespoons melted butter",
                "originalName": "melted butter",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [
                    "melted"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "2 tablespoons butter, in small dots",
                "originalName": "butter, in small dots",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2010,
                "aisle": "Spices and Seasonings",
                "image": "cinnamon.jpg",
                "consistency": "SOLID",
                "name": "cinnamon",
                "nameClean": "cinnamon",
                "original": "1/4 teaspoon cinnamon",
                "originalName": "cinnamon",
                "amount": 0.25,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 2010,
                "aisle": "Spices and Seasonings",
                "image": "cinnamon.jpg",
                "consistency": "SOLID",
                "name": "cinnamon",
                "nameClean": "cinnamon",
                "original": "1 1/2 teaspoons cinnamon",
                "originalName": "cinnamon",
                "amount": 1.5,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "juice of lemon",
                "nameClean": "lemon juice",
                "original": "1 lemon, grated rind and juice of",
                "originalName": "lemon, grated rind and juice of",
                "amount": 1,
                "unit": "",
                "meta": [
                    "grated"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 2025,
                "aisle": "Spices and Seasonings",
                "image": "ground-nutmeg.jpg",
                "consistency": "SOLID",
                "name": "nutmeg",
                "nameClean": "nutmeg",
                "original": "1/4 teaspoon nutmeg",
                "originalName": "nutmeg",
                "amount": 0.25,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 2025,
                "aisle": "Spices and Seasonings",
                "image": "ground-nutmeg.jpg",
                "consistency": "SOLID",
                "name": "nutmeg",
                "nameClean": "nutmeg",
                "original": "1/2 teaspoon nutmeg",
                "originalName": "nutmeg",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
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
                "id": 10719335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "granulated sugar",
                "original": "1 cup white sugar",
                "originalName": "white sugar",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "white"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 200,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            }
        ],
        "id": 632481,
        "title": "Apple Brown Betty",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/JNRHGSYB/apple-brown-betty",
        "image": "https://spoonacular.com/recipeImages/632481-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>lacto ovo vegetarian side dish</b>? Apple Brown Betty could be an awesome recipe to try. One portion of this dish contains approximately <b>9g of protein</b>, <b>23g of fat</b>, and a total of <b>657 calories</b>. This recipe serves 6 and costs $1.5 per serving. 9 people have made this recipe and would make it again. This recipe from Foodista requires butter, apples, butter, and butter. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 24%</b>, this dish is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/apple-brown-betty-369603\">Apple Brown Betty</a>, <a href=\"https://spoonacular.com/recipes/apple-brown-betty-185298\">Apple Brown Betty</a>, and <a href=\"https://spoonacular.com/recipes/apple-brown-betty-1041697\">Apple Brown Betty</a>.",
        "cuisines": [],
        "dishTypes": [
            "side dish"
        ],
        "diets": [
            "lacto ovo vegetarian"
        ],
        "occasions": [],
        "instructions": "<ol><li>Put a layer of cubed bread in buttered souffle dish that will hold 1-1/2 quarts. Mix apples, sugar and spices. Cover bread with a layer of apples.</li><li>Dot with butter; add a little lemon juice and rind. Repeat layers, ending in bread cubes, until dish is well-heaped. Cover and bake in a preheated 375-degree oven for 30 minutes. Uncover and bake until apples are tender and crust golden brown, about 30 more minutes. </li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Put a layer of cubed bread in buttered souffle dish that will hold 1-1/2 quarts.",
                        "ingredients": [
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Mix apples, sugar and spices. Cover bread with a layer of apples.Dot with butter; add a little lemon juice and rind. Repeat layers, ending in bread cubes, until dish is well-heaped. Cover and bake in a preheated 375-degree oven for 30 minutes. Uncover and bake until apples are tender and crust golden brown, about 30 more minutes.",
                        "ingredients": [
                            {
                                "id": 10018064,
                                "name": "bread cubes",
                                "localizedName": "bread cubes",
                                "image": "croutons.png"
                            },
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 9003,
                                "name": "apple",
                                "localizedName": "apple",
                                "image": "apple.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 2035,
                                "name": "spices",
                                "localizedName": "spices",
                                "image": "spices.png"
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            },
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 13.220407485961914,
        "spoonacularSourceUrl": "https://spoonacular.com/apple-brown-betty-632481"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 4,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 96,
        "healthScore": 0,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 19.07,
        "extendedIngredients": [
            {
                "id": 4073,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "margarine",
                "original": "1 cup butter or margarine",
                "originalName": "butter or margarine",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 227,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19336,
                "aisle": "Baking",
                "image": "powdered-sugar.jpg",
                "consistency": "SOLID",
                "name": "confectioners sugar",
                "nameClean": "powdered sugar",
                "original": "1 pound confectioners sugar",
                "originalName": "confectioners sugar",
                "amount": 1,
                "unit": "pound",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1214,
                "aisle": "Baking",
                "image": "evaporated-milk.png",
                "consistency": "SOLID",
                "name": "evaporated milk",
                "nameClean": "evaporated milk",
                "original": "1/4 cup evaporated milk",
                "originalName": "evaporated milk",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 63,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1022050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "peppermint extract",
                "nameClean": "peppermint extract",
                "original": "2 teaspoons peppermint extract",
                "originalName": "peppermint extract",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 19903,
                "aisle": "Sweet Snacks",
                "image": "dark-chocolate-pieces.jpg",
                "consistency": "SOLID",
                "name": "semi-sweet chocolate chips",
                "nameClean": "semisweet chocolate",
                "original": "12 ounces semi-sweet chocolate chips",
                "originalName": "semi-sweet chocolate chips",
                "amount": 12,
                "unit": "ounces",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 12,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 340.194,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 4615,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "shortening.jpg",
                "consistency": "SOLID",
                "name": "shortening",
                "nameClean": "shortening",
                "original": "2 tablespoons shortening",
                "originalName": "shortening",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla extract",
                "nameClean": "vanilla extract",
                "original": "1/2 teaspoon vanilla extract",
                "originalName": "vanilla extract",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
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
            }
        ],
        "id": 655683,
        "title": "Peppermint Patties",
        "readyInMinutes": 45,
        "servings": 60,
        "sourceUrl": "http://www.foodista.com/recipe/RPW2W6JB/peppermint-patties",
        "image": "https://spoonacular.com/recipeImages/655683-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>gluten free hor d'oeuvre</b>? Peppermint Patties could be an awesome recipe to try. This recipe makes 60 servings with <b>95 calories</b>, <b>0g of protein</b>, and <b>6g of fat</b> each. For <b>19 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. 96 people found this recipe to be delicious and satisfying. It can be enjoyed any time, but it is especially good for <b>Christmas</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of butter, vanillan extract, peppermint extract, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. Overall, this recipe earns an <b>improvable spoonacular score of 9%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/peppermint-pie-made-with-york-sugar-free-peppermint-patties-69987\">Peppermint Pie Made With York Sugar Free Peppermint Patties</a>, <a href=\"https://spoonacular.com/recipes/peppermint-patties-83152\">Peppermint Patties</a>, and <a href=\"https://spoonacular.com/recipes/peppermint-patties-973498\">Peppermint Patties</a>.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [
            "christmas"
        ],
        "instructions": "<ol><li>In bowl, combine sugar, butter, and extracts. Add milk and mix well. </li><li>Roll into 1\" balls and place on waxed paper lined cookie sheets. Chill for about 20 minutes. Flatten with glass to 1/4\" and chill another 20-30 minutes. </li><li>In microwave melt shortening and chocolate chips on high for about 1 minute. Dip patties into chocolate and place on waxed paper lined sheets to harden.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In bowl, combine sugar, butter, and extracts.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add milk and mix well.",
                        "ingredients": [
                            {
                                "id": 1077,
                                "name": "milk",
                                "localizedName": "milk",
                                "image": "milk.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Roll into 1\" balls and place on waxed paper lined cookie sheets. Chill for about 20 minutes. Flatten with glass to 1/4\" and chill another 20-30 minutes. In microwave melt shortening and chocolate chips on high for about 1 minute. Dip patties into chocolate and place on waxed paper lined sheets to harden.",
                        "ingredients": [
                            {
                                "id": 99278,
                                "name": "chocolate chips",
                                "localizedName": "chocolate chips",
                                "image": "chocolate-chips.jpg"
                            },
                            {
                                "id": 4615,
                                "name": "shortening",
                                "localizedName": "shortening",
                                "image": "shortening.jpg"
                            },
                            {
                                "id": 19081,
                                "name": "chocolate",
                                "localizedName": "chocolate",
                                "image": "milk-chocolate.jpg"
                            },
                            {
                                "id": 10118192,
                                "name": "cookies",
                                "localizedName": "cookies",
                                "image": "shortbread-cookies.jpg"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            },
                            {
                                "id": 0,
                                "name": "dip",
                                "localizedName": "dip",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404727,
                                "name": "baking sheet",
                                "localizedName": "baking sheet",
                                "image": "baking-sheet.jpg"
                            },
                            {
                                "id": 404762,
                                "name": "microwave",
                                "localizedName": "microwave",
                                "image": "microwave.jpg"
                            }
                        ],
                        "length": {
                            "number": 51,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 9.692919731140137,
        "spoonacularSourceUrl": "https://spoonacular.com/peppermint-patties-655683"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 15,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 19,
        "healthScore": 5,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 293.93,
        "extendedIngredients": [
            {
                "id": 1001001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "salted butter",
                "original": "¼ cup salted butter",
                "originalName": "salted butter",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "salted"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 56.75,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10511282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onions",
                "nameClean": "yellow onion",
                "original": "4-6 yellow onions, finely sliced",
                "originalName": "yellow onions, finely sliced",
                "amount": 4,
                "unit": "",
                "meta": [
                    "yellow",
                    "finely sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "¼ Tsp. flour",
                "originalName": "flour",
                "amount": 0.25,
                "unit": "Tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 10214106,
                "aisle": "Alcoholic Beverages",
                "image": "dry-sherry.png",
                "consistency": "LIQUID",
                "name": "sherry",
                "nameClean": "sherry",
                "original": "½ cup sherry",
                "originalName": "sherry",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 120,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 6008,
                "aisle": "Canned and Jarred",
                "image": "beef-broth.png",
                "consistency": "LIQUID",
                "name": "beef broth",
                "nameClean": "beef broth",
                "original": "5 cups beef broth",
                "originalName": "beef broth",
                "amount": 5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 1.2,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 1012049,
                "aisle": "Produce",
                "image": "thyme.jpg",
                "consistency": "SOLID",
                "name": "thyme",
                "nameClean": "fresh thyme",
                "original": "3 sprigs fresh thyme",
                "originalName": "fresh thyme",
                "amount": 3,
                "unit": "sprigs",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "sprigs",
                        "unitLong": "sprigs"
                    },
                    "metric": {
                        "amount": 3,
                        "unitShort": "sprigs",
                        "unitLong": "sprigs"
                    }
                }
            },
            {
                "id": 10511297,
                "aisle": "Produce",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "parsley",
                "nameClean": "fresh parsley",
                "original": "3 sprigs fresh parsley",
                "originalName": "fresh parsley",
                "amount": 3,
                "unit": "sprigs",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "sprigs",
                        "unitLong": "sprigs"
                    },
                    "metric": {
                        "amount": 3,
                        "unitShort": "sprigs",
                        "unitLong": "sprigs"
                    }
                }
            },
            {
                "id": 2004,
                "aisle": "Produce",
                "image": "bay-leaves.jpg",
                "consistency": "SOLID",
                "name": "bay leaf",
                "nameClean": "bay leaves",
                "original": "1 bay leaf",
                "originalName": "bay leaf",
                "amount": 1,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "salt and pepper to taste",
                "originalName": "salt and pepper to taste",
                "amount": 4,
                "unit": "servings",
                "meta": [
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 18033,
                "aisle": "Bakery/Bread",
                "image": "half-baguette.jpg",
                "consistency": "SOLID",
                "name": "crusty baguette",
                "nameClean": "thin baguette",
                "original": "4 slices of a crusty French baguette",
                "originalName": "crusty French baguette",
                "amount": 4,
                "unit": "slices",
                "meta": [
                    "french"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "slice",
                        "unitLong": "slices"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "slice",
                        "unitLong": "slices"
                    }
                }
            },
            {
                "id": 1023,
                "aisle": "Cheese",
                "image": "gruyere.jpg",
                "consistency": "SOLID",
                "name": "gruyere cheese",
                "nameClean": "gruyere",
                "original": "1 cup gruyere cheese, shredded",
                "originalName": "gruyere cheese, shredded",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "shredded"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 132,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            }
        ],
        "id": 639597,
        "title": "Classic French Onion Soup",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "https://www.foodista.com/recipe/YJ4JZ8ZP/classic-french-onion-soup",
        "image": "https://spoonacular.com/recipeImages/639597-556x370.jpg",
        "imageType": "jpg",
        "summary": "Classic French Onion Soup requires about <b>45 minutes</b> from start to finish. One serving contains <b>412 calories</b>, <b>18g of protein</b>, and <b>24g of fat</b>. This recipe serves 4. For <b>$2.94 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. A couple people really liked this main course. 19 people were glad they tried this recipe. This recipe is typical of Mediterranean cuisine. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. This recipe from Foodista requires butter, onions, flour, and salt and pepper. Taking all factors into account, this recipe <b>earns a spoonacular score of 42%</b>, which is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/classic-french-onion-soup-219941\">Classic French Onion Soup</a>, <a href=\"https://spoonacular.com/recipes/classic-french-onion-soup-593898\">Classic French Onion Soup</a>, and <a href=\"https://spoonacular.com/recipes/classic-french-onion-soup-407615\">Classic French Onion Soup</a>.",
        "cuisines": [
            "Mediterranean",
            "French",
            "European"
        ],
        "dishTypes": [
            "soup",
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [],
        "occasions": [
            "fall",
            "winter"
        ],
        "instructions": "Preheat oven to 400\nIn a large Dutch oven, melt butter over medium heat.\nAdd onions to the pot and sprinkle with flour. Reduce heat to medium low and cook for 45 minutes stirring occasionally. If the onions are cooking too quickly, reduce heat.\nWhen the onions are tender and golden in colour, de-glaze the pan with sherry.\nPour beef broth into the pot and bring to a boil over medium heat. Add herbs, salt and pepper to taste.\nReduce heat and simmer for 15 minutes.\nSpray a cookie sheet with cooking spray. Butter slices of French bread and bake in the oven for 5-10 minutes until very dry. Set aside.\nRemove herb stalks and bay leaf.\nLadle soup portions into four oven safe ramekins. Top with crusty French bread and sprinkle with cheese. Place ramekins on a cookie sheet and bake uncovered at 400 for 5-10 minutes until cheese is bubbling. Broil for one minute more to brown the top.\nServe warm.\nServes 4",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat oven to 400",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "In a large Dutch oven, melt butter over medium heat.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404667,
                                "name": "dutch oven",
                                "localizedName": "dutch oven",
                                "image": "dutch-oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add onions to the pot and sprinkle with flour. Reduce heat to medium low and cook for 45 minutes stirring occasionally. If the onions are cooking too quickly, reduce heat.",
                        "ingredients": [
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 45,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "When the onions are tender and golden in colour, de-glaze the pan with sherry.",
                        "ingredients": [
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 10214106,
                                "name": "sherry",
                                "localizedName": "sherry",
                                "image": "dry-sherry.png"
                            },
                            {
                                "id": 0,
                                "name": "glaze",
                                "localizedName": "glaze",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Pour beef broth into the pot and bring to a boil over medium heat.",
                        "ingredients": [
                            {
                                "id": 6008,
                                "name": "beef broth",
                                "localizedName": "beef broth",
                                "image": "beef-broth.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Add herbs, salt and pepper to taste.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1002044,
                                "name": "herbs",
                                "localizedName": "herbs",
                                "image": "mixed-fresh-herbs.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Reduce heat and simmer for 15 minutes.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 15,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "Spray a cookie sheet with cooking spray. Butter slices of French bread and bake in the oven for 5-10 minutes until very dry. Set aside.",
                        "ingredients": [
                            {
                                "id": 4679,
                                "name": "cooking spray",
                                "localizedName": "cooking spray",
                                "image": "cooking-spray.png"
                            },
                            {
                                "id": 18029,
                                "name": "french bread",
                                "localizedName": "french bread",
                                "image": "crusty-bread.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 10118192,
                                "name": "cookies",
                                "localizedName": "cookies",
                                "image": "shortbread-cookies.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404727,
                                "name": "baking sheet",
                                "localizedName": "baking sheet",
                                "image": "baking-sheet.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 9,
                        "step": "Remove herb stalks and bay leaf.",
                        "ingredients": [
                            {
                                "id": 2004,
                                "name": "bay leaves",
                                "localizedName": "bay leaves",
                                "image": "bay-leaves.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 10,
                        "step": "Ladle soup portions into four oven safe ramekins. Top with crusty French bread and sprinkle with cheese.",
                        "ingredients": [
                            {
                                "id": 18029,
                                "name": "french bread",
                                "localizedName": "french bread",
                                "image": "crusty-bread.jpg"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404781,
                                "name": "ramekin",
                                "localizedName": "ramekin",
                                "image": "ramekin.jpg"
                            },
                            {
                                "id": 404630,
                                "name": "ladle",
                                "localizedName": "ladle",
                                "image": "ladle.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 11,
                        "step": "Place ramekins on a cookie sheet and bake uncovered at 400 for 5-10 minutes until cheese is bubbling. Broil for one minute more to brown the top.",
                        "ingredients": [
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 10118192,
                                "name": "cookies",
                                "localizedName": "cookies",
                                "image": "shortbread-cookies.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404727,
                                "name": "baking sheet",
                                "localizedName": "baking sheet",
                                "image": "baking-sheet.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            },
                            {
                                "id": 404781,
                                "name": "ramekin",
                                "localizedName": "ramekin",
                                "image": "ramekin.jpg"
                            }
                        ],
                        "length": {
                            "number": 11,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 12,
                        "step": "Serve warm.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 13,
                        "step": "Serves 4",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 48.14813232421875,
        "spoonacularSourceUrl": "https://spoonacular.com/classic-french-onion-soup-639597"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 9,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 9,
        "healthScore": 34,
        "creditsText": "foodista.com",
        "sourceName": "foodista.com",
        "pricePerServing": 359.54,
        "extendedIngredients": [
            {
                "id": 2069,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "balsamic-vinegar.jpg",
                "consistency": "LIQUID",
                "name": "balsamic vinegar",
                "nameClean": "balsamic vinegar",
                "original": "1 Tbsp Balsamic Vinegar",
                "originalName": "Balsamic Vinegar",
                "amount": 1,
                "unit": "Tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 9050,
                "aisle": "Produce",
                "image": "blueberries.jpg",
                "consistency": "SOLID",
                "name": "pint blueberries",
                "nameClean": "blueberries",
                "original": "1/2 Pint Fresh Blueberries",
                "originalName": "Pint Fresh Blueberries",
                "amount": 0.5,
                "unit": "",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 19334,
                "aisle": "Baking",
                "image": "dark-brown-sugar.png",
                "consistency": "SOLID",
                "name": "brown sugar",
                "nameClean": "golden brown sugar",
                "original": "1/4 cup Brown Sugar",
                "originalName": "Brown Sugar",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 55,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 19334,
                "aisle": "Baking",
                "image": "light-brown-sugar.jpg",
                "consistency": "SOLID",
                "name": "brown sugar",
                "nameClean": "golden brown sugar",
                "original": "1/4 cup Brown Sugar",
                "originalName": "Brown Sugar",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 55,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1014582,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "canola oil",
                "nameClean": "canola oil",
                "original": "1 Tbsp Canola Oil",
                "originalName": "Canola Oil",
                "amount": 1,
                "unit": "Tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 1009159,
                "aisle": "Produce",
                "image": "zest-lime.jpg",
                "consistency": "SOLID",
                "name": "lime zest",
                "nameClean": "lime peel",
                "original": "1 Lime, zested and 1/2 juiced",
                "originalName": "Lime, zested and 1/2 juiced",
                "amount": 1,
                "unit": "",
                "meta": [
                    "juiced"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11297,
                "aisle": "Spices and Seasonings",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "to garnish: parsley",
                "nameClean": "parsley",
                "original": "To Garnish: Parsley",
                "originalName": "To Garnish: Parsley",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 10211821,
                "aisle": "Produce",
                "image": "yellow-bell-pepper.jpg",
                "consistency": "SOLID",
                "name": "bell pepper",
                "nameClean": "bell pepper",
                "original": "Pepper",
                "originalName": "Pepper",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 10211821,
                "aisle": "Produce",
                "image": "bell-pepper-orange.png",
                "consistency": "SOLID",
                "name": "bell pepper",
                "nameClean": "bell pepper",
                "original": "Pepper",
                "originalName": "Pepper",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 10010062,
                "aisle": "Meat",
                "image": "pork-chops.jpg",
                "consistency": "SOLID",
                "name": "pork chops",
                "nameClean": "pork chops",
                "original": "4 Pork Chops",
                "originalName": "Pork Chops",
                "amount": 4,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10011282,
                "aisle": "Produce",
                "image": "red-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "red onion",
                "original": "1 Small Red Onion, finely diced",
                "originalName": "Small Red Onion, finely diced",
                "amount": 1,
                "unit": "",
                "meta": [
                    "diced",
                    "red",
                    "finely"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "Salt",
                "originalName": "Salt",
                "amount": 4,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            }
        ],
        "id": 656846,
        "title": "Pork with Blueberry Sauce",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/RTDNFR4H/pork-with-blueberry-sauce",
        "image": "https://spoonacular.com/recipeImages/656846-556x370.jpg",
        "imageType": "jpg",
        "summary": "Pork with Blueberry Sauce requires around <b>45 minutes</b> from start to finish. For <b>$3.6 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. One serving contains <b>331 calories</b>, <b>30g of protein</b>, and <b>13g of fat</b>. This recipe serves 4. This recipe from Foodista requires to garnish: parsley, lime zest, pork chops, and salt. 9 people have tried and liked this recipe. Not a lot of people really liked this main course. It is a good option if you're following a <b>gluten free and dairy free</b> diet. With a spoonacular <b>score of 85%</b>, this dish is excellent. <a href=\"https://spoonacular.com/recipes/pork-with-blueberry-herb-sauce-411544\">Pork with Blueberry Herb Sauce</a>, <a href=\"https://spoonacular.com/recipes/pork-tenderloin-with-blueberry-barbecue-sauce-1346049\">Pork Tenderloin with Blueberry Barbecue Sauce</a>, and <a href=\"https://spoonacular.com/recipes/rosemary-sage-garlic-pork-tenderloin-with-wild-blueberry-sauce-559085\">Rosemary-Sage & Garlic Pork Tenderloin with Wild Blueberry Sauce</a> are very similar to this recipe.",
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
        "occasions": [],
        "instructions": "<ol><li>Preheat oven to 400 degrees Fahrenheit.</li><li>In a nonreactive bowl, mash the blueberryies with the brown sugar to desired consistency, then set aside.</li><li>Heat saute pan on medium. Season the pork chops with salt and pepper on both sides. Add canola oil to the saute pan. Brown pork on both sides until golden and crispy, about 2-3 min on each side.</li><li>Remove from pan and place on a baking dish to finish cooking in the oven. Depending on thickness of the pork. If its thin keep warm aside until sauce is ready.</li><li>In the same pan the pork was cooking in, add the chopped red onion, saute until translucent. Then add in the mashed blueberry sugar mixture and balsamic vinegar. Cook until the sauce gets thick, about 2-3 minutes.</li><li>Add in the lime zest and juice and season with salt and pepper. If you put the pork in the oven, remove and place on serving plates. Serve sauce on top and garnish with parsley or cilantro. Enjoy!</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat oven to 400 degrees Fahrenheit.In a nonreactive bowl, mash the blueberryies with the brown sugar to desired consistency, then set aside.",
                        "ingredients": [
                            {
                                "id": 19334,
                                "name": "brown sugar",
                                "localizedName": "brown sugar",
                                "image": "dark-brown-sugar.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 400,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Heat saute pan on medium. Season the pork chops with salt and pepper on both sides.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 10010062,
                                "name": "pork chops",
                                "localizedName": "pork chops",
                                "image": "pork-chops.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add canola oil to the saute pan. Brown pork on both sides until golden and crispy, about 2-3 min on each side.",
                        "ingredients": [
                            {
                                "id": 1014582,
                                "name": "canola oil",
                                "localizedName": "canola oil",
                                "image": "vegetable-oil.jpg"
                            },
                            {
                                "id": 10010219,
                                "name": "pork",
                                "localizedName": "pork",
                                "image": "pork-tenderloin-raw.png"
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
                            "number": 3,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Remove from pan and place on a baking dish to finish cooking in the oven. Depending on thickness of the pork. If its thin keep warm aside until sauce is ready.In the same pan the pork was cooking in, add the chopped red onion, saute until translucent. Then add in the mashed blueberry sugar mixture and balsamic vinegar. Cook until the sauce gets thick, about 2-3 minutes.",
                        "ingredients": [
                            {
                                "id": 2069,
                                "name": "balsamic vinegar",
                                "localizedName": "balsamic vinegar",
                                "image": "balsamic-vinegar.jpg"
                            },
                            {
                                "id": 9050,
                                "name": "blueberries",
                                "localizedName": "blueberries",
                                "image": "blueberries.jpg"
                            },
                            {
                                "id": 10011282,
                                "name": "red onion",
                                "localizedName": "red onion",
                                "image": "red-onion.png"
                            },
                            {
                                "id": 0,
                                "name": "sauce",
                                "localizedName": "sauce",
                                "image": ""
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            },
                            {
                                "id": 10010219,
                                "name": "pork",
                                "localizedName": "pork",
                                "image": "pork-tenderloin-raw.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404646,
                                "name": "baking pan",
                                "localizedName": "baking pan",
                                "image": "roasting-pan.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 3,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Add in the lime zest and juice and season with salt and pepper. If you put the pork in the oven, remove and place on serving plates.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1009159,
                                "name": "lime zest",
                                "localizedName": "lime zest",
                                "image": "zest-lime.jpg"
                            },
                            {
                                "id": 1019016,
                                "name": "juice",
                                "localizedName": "juice",
                                "image": "apple-juice.jpg"
                            },
                            {
                                "id": 10010219,
                                "name": "pork",
                                "localizedName": "pork",
                                "image": "pork-tenderloin-raw.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Serve sauce on top and garnish with parsley or cilantro. Enjoy!",
                        "ingredients": [
                            {
                                "id": 11165,
                                "name": "cilantro",
                                "localizedName": "cilantro",
                                "image": "cilantro.png"
                            },
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
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
        "spoonacularScore": 85.70802307128906,
        "spoonacularSourceUrl": "https://spoonacular.com/pork-with-blueberry-sauce-656846"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 18,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 18,
        "healthScore": 2,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 85.61,
        "extendedIngredients": [
            {
                "id": 10018617,
                "aisle": "Baking",
                "image": "graham-crackers.jpg",
                "consistency": "SOLID",
                "name": "graham cracker crumbs",
                "nameClean": "graham cracker crumbs",
                "original": "2 cups graham cracker crumbs",
                "originalName": "graham cracker crumbs",
                "amount": 2,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 168,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "unsalted butter",
                "original": "1/2 cup unsalted butter, melted plus 1/4 cup",
                "originalName": "unsalted butter, melted plus 1/4 cup",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "unsalted",
                    "melted"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 113.5,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 9040,
                "aisle": "Produce",
                "image": "bananas.jpg",
                "consistency": "SOLID",
                "name": "bananas",
                "nameClean": "banana",
                "original": "5 -s medium bananas, sliced into 1/2 inch rounds",
                "originalName": "s medium bananas, sliced into 1/2 inch rounds",
                "amount": 5,
                "unit": "medium",
                "meta": [
                    "sliced into 1/2 inch rounds"
                ],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    },
                    "metric": {
                        "amount": 5,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    }
                }
            },
            {
                "id": 19271,
                "aisle": "Frozen",
                "image": "strawberry-ice-cream.png",
                "consistency": "SOLID",
                "name": "strawberry ice cream",
                "nameClean": "strawberry ice cream",
                "original": "1 1/2 quarts strawberry ice cream, softened",
                "originalName": "strawberry ice cream, softened",
                "amount": 1.5,
                "unit": "quarts",
                "meta": [
                    "softened"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "qts",
                        "unitLong": "quarts"
                    },
                    "metric": {
                        "amount": 1.42,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 10112155,
                "aisle": "Baking",
                "image": "walnuts.jpg",
                "consistency": "SOLID",
                "name": "walnuts",
                "nameClean": "walnut pieces",
                "original": "1 cup chopped walnuts",
                "originalName": "chopped walnuts",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 117,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 99278,
                "aisle": "Baking",
                "image": "chocolate-chips.jpg",
                "consistency": "SOLID",
                "name": "chocolate chips",
                "nameClean": "chocolate chips",
                "original": "1 cup chocolate chips",
                "originalName": "chocolate chips",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 180,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "confectioner's sugar",
                "nameClean": "sugar",
                "original": "1 cup confectioner's sugar",
                "originalName": "confectioner's sugar",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 200,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1214,
                "aisle": "Baking",
                "image": "evaporated-milk.png",
                "consistency": "SOLID",
                "name": "evaporated milk",
                "nameClean": "evaporated milk",
                "original": "1 cup evaporated milk",
                "originalName": "evaporated milk",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 252,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla extract",
                "nameClean": "vanilla extract",
                "original": "1 teaspoon vanilla extract",
                "originalName": "vanilla extract",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 42135,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "whipped-cream.jpg",
                "consistency": "SOLID",
                "name": "whipped topping",
                "nameClean": "whipped topping",
                "original": "8 ounce container whipped topping",
                "originalName": "whipped topping",
                "amount": 8,
                "unit": "ounce",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 8,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 226.796,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            }
        ],
        "id": 634191,
        "title": "Banana Sundae Ice Cream Cake",
        "readyInMinutes": 45,
        "servings": 18,
        "sourceUrl": "https://www.foodista.com/recipe/YSZ7XLVP/banana-split-sundae-ice-cream-cake",
        "image": "https://spoonacular.com/recipeImages/634191-556x370.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many dessert recipes, so give Banana Split Sundae Ice Cream Cake a try. This recipe serves 18. For <b>86 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>6g of protein</b>, <b>23g of fat</b>, and a total of <b>449 calories</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Head to the store and pick up whipped topping, butter, bananas, and a few other things to make it today. 18 people have made this recipe and would make it again. It is perfect for <b>Summer</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 29%</b>, which is rather bad. Try <a href=\"https://spoonacular.com/recipes/banana-split-ice-cream-sundae-265147\">Banana Split Ice Cream Sundae</a>, <a href=\"https://spoonacular.com/recipes/banana-split-ice-cream-cake-528119\">Banana Split Ice Cream Cake</a>, and <a href=\"https://spoonacular.com/recipes/banana-split-ice-cream-cake-205286\">Banana Split Ice Cream Cake</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "dessert"
        ],
        "diets": [],
        "occasions": [
            "summer"
        ],
        "instructions": "In a small bowl, combine the graham cracker crumbs and the melted butter.  Set aside 1/4 cup of the mixture then press the remainder into the bottom of a 9 x 13 pan.\nPlace the bananas in a single layer over the crust.  Spread the softened ice cream on top and smooth.  Sprinkle the nuts on the ice cream, then cover with plastic wrap and freeze until firm, about 2 hours.\nIn a medium saucepan, melt the chocolate chips and the remaining 1/4 cup butter and stir until smooth.  Add the confectioner's sugar and evaporated milk.  Cook, stirring constantly over medium heat until slightly thickened and smooth, about 8 minutes.  Remove the pan from the heat and stir in vanilla.  Cool the mixture about 30 minutes stirring occasionally.  Pour the mixture over the ice cream and freeze until firm, about 1 hour.\nSpread the whipped topping over the chocolate layer and sprinkle with reserved crumbs.  Freeze for at least 4 hours or overnight.\nRemove from freezer 20 minutes before serving.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a small bowl, combine the graham cracker crumbs and the melted butter.  Set aside 1/4 cup of the mixture then press the remainder into the bottom of a 9 x 13 pan.",
                        "ingredients": [
                            {
                                "id": 10018617,
                                "name": "graham cracker crumbs",
                                "localizedName": "graham cracker crumbs",
                                "image": "graham-crackers.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Place the bananas in a single layer over the crust.",
                        "ingredients": [
                            {
                                "id": 9040,
                                "name": "banana",
                                "localizedName": "banana",
                                "image": "bananas.jpg"
                            },
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Spread the softened ice cream on top and smooth.",
                        "ingredients": [
                            {
                                "id": 19095,
                                "name": "ice cream",
                                "localizedName": "ice cream",
                                "image": "vanilla-ice-cream.png"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Sprinkle the nuts on the ice cream, then cover with plastic wrap and freeze until firm, about 2 hours.",
                        "ingredients": [
                            {
                                "id": 19095,
                                "name": "ice cream",
                                "localizedName": "ice cream",
                                "image": "vanilla-ice-cream.png"
                            },
                            {
                                "id": 12135,
                                "name": "nuts",
                                "localizedName": "nuts",
                                "image": "nuts-mixed.jpg"
                            },
                            {
                                "id": 10018364,
                                "name": "wrap",
                                "localizedName": "wrap",
                                "image": "flour-tortilla.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404730,
                                "name": "plastic wrap",
                                "localizedName": "plastic wrap",
                                "image": "plastic-wrap.jpg"
                            }
                        ],
                        "length": {
                            "number": 120,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "In a medium saucepan, melt the chocolate chips and the remaining 1/4 cup butter and stir until smooth.",
                        "ingredients": [
                            {
                                "id": 99278,
                                "name": "chocolate chips",
                                "localizedName": "chocolate chips",
                                "image": "chocolate-chips.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Add the confectioner's sugar and evaporated milk.  Cook, stirring constantly over medium heat until slightly thickened and smooth, about 8 minutes.",
                        "ingredients": [
                            {
                                "id": 1214,
                                "name": "evaporated milk",
                                "localizedName": "evaporated milk",
                                "image": "evaporated-milk.png"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 8,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 7,
                        "step": "Remove the pan from the heat and stir in vanilla.  Cool the mixture about 30 minutes stirring occasionally.",
                        "ingredients": [
                            {
                                "id": 1052050,
                                "name": "vanilla",
                                "localizedName": "vanilla",
                                "image": "vanilla.jpg"
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
                            "number": 30,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "Pour the mixture over the ice cream and freeze until firm, about 1 hour.",
                        "ingredients": [
                            {
                                "id": 19095,
                                "name": "ice cream",
                                "localizedName": "ice cream",
                                "image": "vanilla-ice-cream.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 9,
                        "step": "Spread the whipped topping over the chocolate layer and sprinkle with reserved crumbs.  Freeze for at least 4 hours or overnight.",
                        "ingredients": [
                            {
                                "id": 42135,
                                "name": "whipped topping",
                                "localizedName": "whipped topping",
                                "image": "whipped-cream.jpg"
                            },
                            {
                                "id": 19081,
                                "name": "chocolate",
                                "localizedName": "chocolate",
                                "image": "milk-chocolate.jpg"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 240,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 10,
                        "step": "Remove from freezer 20 minutes before serving.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 20,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 37.07887649536133,
        "spoonacularSourceUrl": "https://spoonacular.com/banana-split-sundae-ice-cream-cake-634191"
    }
]

module.exports = { 
    recipe: exampleList,
 }