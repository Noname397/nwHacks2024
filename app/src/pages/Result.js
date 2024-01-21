import React from "react";
import axios from "axios";
import config from "../config";
import { Navbar } from "../components/Navbar";

let listOfRecipes = []

export const Result = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-black mt-10">Your recipe is here!</h1>
            </div>
            
            <div className="container flex mx-auto justify-center mt-10 gap-5">
                {listOfRecipes.map((recipe, index) => (
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
            </div>
        </div>
    );
};

const redirectToResult = (url) => {
    window.open(url, "_blank");
}

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    number: '3'
  },
  headers: {
    'X-RapidAPI-Key': config.API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};


try {
	const response = await axios.request(options);
	// console.log(response.data);
    listOfRecipes = response.data.recipes;
} catch (error) {
	console.error(error);
}