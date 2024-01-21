import React, { useEffect,useState } from "react";
import axios from "axios";
import config from "../config";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";

let res = []
let userInfo;
export const Result = () => {
    // const [listOfRecipes, setListOfRecipes] = useState([]);
    const userInfo = useLocation().state;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let response;
    //             if (userInfo) {
    //                 response = await getRequest(userInfo);
    //             } else {
    //                 response = await getRequest(); // random
    //             }
    //             setListOfRecipes(response);
    //             console.log(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, [userInfo]);

    // useEffect(() => {
    //     console.log("1243")
    //     console.log(listOfRecipes)
    // },[listOfRecipes])
    
    //let listOfRecipes = []
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-black mt-10">Your recipe is here!</h1>
            </div>
            
            {<div className="container flex mx-auto justify-center mt-10 gap-5">
                {res.map((recipe, index) => (
                    <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg h-[500px] relative">
                        <img className="w-full object-cover" src={recipe.image} alt={recipe.title} />
                        <div className="px-6 py-4 bg-[#E7EFDE] h-[100%]">
                            <div className="font-bold text-xl mb-2">{recipe.title}</div>
                            <div className="text-black-700 text-base">Number of ingredients: {recipe.extendedIngredients.length}</div>
                            <p className="text-gray-700 text-base">Cook time: {recipe.readyInMinutes} minutes</p>
                        </div>
                        <div className="grid absolute bottom-[20px] place-items-center w-full">
                            <button className="bg-[#5C9125] hover:bg-[#FFFFFF] hover:text-[#5C9125] text-white font-bold py-2 px-4 rounded mt-5" onClick={(url) => redirectToResult(recipe.sourceUrl)}>Get recipe!</button>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
};

const redirectToResult = (url) => {
    window.open(url, "_blank");
}

const getRecipe = (userInfo) => {
    const newInfo = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
        params: {
            // query: "dish",
            // diet: userInfo.diet.join(","),
            // type: userInfo.type.join(","),
            // includeIngredients:userInfo.includeIngredients.join(","),
            // intolerances: userInfo.intolerances.join(","),
            // maxCarbs: parseInt(userInfo.maxCarbs,10),
            query: 'dish',
    cuisine: '',
    excludeCuisine: '',
    diet: userInfo.diet.join(","),
    intolerances: userInfo.intolerances.join(","),
    equipment: '',
    includeIngredients: userInfo.includeIngredients.join(","),
    excludeIngredients: '',
    type: userInfo.type.join(","),
    instructionsRequired: 'true',
    fillIngredients: 'false',
    addRecipeInformation: 'false',
    titleMatch: 'Crock Pot',
    maxReadyTime: '20',
    ignorePantry: 'true',
    sort: 'calories',
    sortDirection: 'asc',
    minCarbs: '10',
    maxCarbs: '100',
    minProtein: '10',
    maxProtein: '100',
    minCalories: '50',
    maxCalories: userInfo.maxCarbs,
    minFat: '10',
    maxFat: '100',
    minAlcohol: '0',
    maxAlcohol: '100',
    minCaffeine: '0',
    maxCaffeine: '100',
    minCopper: '0',
    maxCopper: '100',
    minCalcium: '0',
    maxCalcium: '100',
    minCholine: '0',
    maxCholine: '100',
    minCholesterol: '0',
    maxCholesterol: '100',
    minFluoride: '0',
    maxFluoride: '100',
    minSaturatedFat: '0',
    maxSaturatedFat: '100',
    minVitaminA: '0',
    maxVitaminA: '100',
    minVitaminC: '0',
    maxVitaminC: '100',
    minVitaminD: '0',
    maxVitaminD: '100',
    minVitaminE: '0',
    maxVitaminE: '100',
    minVitaminK: '0',
    maxVitaminK: '100',
    minVitaminB1: '0',
    maxVitaminB1: '100',
    minVitaminB2: '0',
    maxVitaminB2: '100',
    minVitaminB5: '0',
    maxVitaminB5: '100',
    minVitaminB3: '0',
    maxVitaminB3: '100',
    minVitaminB6: '0',
    maxVitaminB6: '100',
    minVitaminB12: '0',
    maxVitaminB12: '100',
    minFiber: '0',
    maxFiber: '100',
    minFolate: '0',
    maxFolate: '100',
    minFolicAcid: '0',
    maxFolicAcid: '100',
    minIodine: '0',
    maxIodine: '100',
    minIron: '0',
    maxIron: '100',
    minMagnesium: '0',
    maxMagnesium: '100',
    minManganese: '0',
    maxManganese: '100',
    minPhosphorus: '0',
    maxPhosphorus: '100',
    minPotassium: '0',
    maxPotassium: '100',
    minSelenium: '0',
    maxSelenium: '100',
    minSodium: '0',
    maxSodium: '100',
    minSugar: '0',
    maxSugar: '100',
    minZinc: '0',
    maxZinc: '100',
    offset: '0',
    number: '10',
    limitLicense: 'false',
    ranking: '2'
        },
        headers: {
            'X-RapidAPI-Key': "ee08f27a3amshe4b7703cfae9005p112d7fjsnde80a7a8bc8b",
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    console.log(newInfo.params)
    return newInfo
}

const randomOptions = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    number: '3'
  },
  headers: {
    'X-RapidAPI-Key': "ee08f27a3amshe4b7703cfae9005p112d7fjsnde80a7a8bc8b",
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};


try {
    let response;
        if (userInfo == null) response =  await axios.request(randomOptions);
        if (userInfo) {
        console.log("adshjsdad")
        response =  await axios.request(getRecipe(userInfo))
        } 
    // console.log(response.data);
    console.log(res)

    res = response.data.recipes;
    
} catch (error) {
    console.error(error);
}
