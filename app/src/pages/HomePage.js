import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Image from "../assets/cooking-background.jpg"
import fridgeImage from "../assets/fridge.jpeg"
import demoImage from "../assets/select.png"
import recipes from "../data/recipes.js"


let listOfRecipes = recipes.recipe;
console.log(listOfRecipes);

export const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={`h-[50vh] w-full flex items-start justify-center bg-cover bg-no-repeat `} style={{backgroundImage: `url(${Image})`}}>
                    <div className="h-full flex flex-col items-center justify-center">
                    <h1 className="text-black text-xl min-[320px]:text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl font-bold">Get ideas for your cooking</h1>
                    <p className="text-black  mintext-base lg:text-lg font-regular pt-2">Grab your leftovers, we are cooking.</p>
                    <button className="bg-[#5C9125] hover:bg-[#4D7721] text-white font-bold py-2 px-4 rounded mt-5" onClick={redirectTo}>Get started!</button>
                    </div>
            </div>  
            <div className="px-[60px] mt-10 ">
                <h2 className="text-4xl font-bold text-start text-black mb-10">Get curated by AI.</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 place-items-center gap-x-5 gap-y-10">
                    {listOfRecipes.map((recipe, index) => (
                        <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-xl relative">
                            <img className="w-full object-cover" src={recipe.image} alt={recipe.title} />
                            <div className="px-6 py-4 bg-[#E7EFDE] h-[100%]">
                                <h3 className={`font-bold text-lg min-h-[84px]`}>{recipe.title}</h3>
                                <div className="text-black-700 text-base">Number of ingredients: {recipe.extendedIngredients.length}</div>
                                <p className="text-gray-700 text-base">Cook time: {recipe.readyInMinutes} minutes</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto pt-[60px] mb-[60px] px-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className="flex justify-center items-center pb-10 md:pb-0">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-5">Select what you have.</h2>
                            <p className="text-black text-base sm:text-2xl font-regular pt-2 w-2/3 text-center">Select the ingredients you have in your fridge and we will give you a recipe, from side dished to main course. No need to worry about groceries.</p>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full object-cover" src={fridgeImage} alt="Fridge Image" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-5">Customized to your needs.</h2>
                            <p className="text-black text-base sm:text-2xl font-regular pt-2 w-2/3 text-center">Tell us any of your dietary restrictions. We make sure recipes are tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full object-cover" src={demoImage} alt="Fridge Image" />
                    </div>
                </div>
            </div>

            <div className="w-full h-[300px] bg-[#5C9125] flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center text-white">See our product in action.</h2>
                <button className="bg-[#FFFFFF] hover:bg-[#4D7721] hover:text-white text-black font-bold py-2 px-4 rounded mt-5" onClick={redirectTo}>Explore now.</button>
            </div>
            <Footer></Footer>
        </div>
    )
}

const redirectTo = () => {
    window.location.href = "/submit-form";
}