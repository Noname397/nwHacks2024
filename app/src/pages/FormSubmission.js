import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdRemoveCircleOutline } from "react-icons/io";
const listOfIntolerance = ["dairy", "egg", "gluten","grain", "peanut","seafood","sesame","shellfish","soy","sulfite","tree nut","wheat"];
export const FormSubmission = () => {
    const ingredientsArray = require('../config');
    const [appearSearchResult,setAppearSearchResult] = useState()
    const [listOfDishType,setListOfDishType] = useState(["main course","side dish","dessert","appetizer","salad","bread","breakfast","soup","beverage","sauce","marinate","fingerfood","snack","drink"])
    const [userDishType,setUserDishType] = useState([])
    const [listOfDiets,setListOfDiets] = useState(["gluten free","kenogenic", "vegeterian", "lacto-vegeterian", "ovo-vegetarian", "vegan","pescetarian", "paleo","primal","lowfodmap","whole30"])
    const [userDiet,setUserDiet] = useState([])
    const [userIntolerance,setUserIntolerance] = useState([])
    const [userIngredients,setUserIngrdients] = useState([]);
    const [userMaxCalories,setUserMaxCalories] = useState(0)
    const [recommendation,setRecommendation] = useState([])
    const removeItemFromList = (element,list,setList) => {
        const newList = list.filter(item => item !== element);
        setList(newList)
    }
    const addItemToList = (element,list,setList) => {
        const newList = [...list, element];
        setList(newList)
    }
    const elementInList = (item,list) => {
        return list.find((element) => element === item)
    }
    const handleUserInput = (text) => {
        if (typeof text === 'string'){
            if (text.length > 0){
                let result = ingredientsArray.filter((item) => {
                    return item.startsWith(text) && !(elementInList(item,userIngredients))
                })
                result = result.slice(0,10)
                setRecommendation(result)
            }
            else {
                setRecommendation([])
            }
        }
    }
    const [object, setObject] = useState({
        diet: userDiet,
        type: userDishType,
        includeIngredients: userIngredients,
        intolerances: userIntolerance,
        maxCarbs: userMaxCalories,
      });
      
      useEffect(() => {
        setObject((prev) => {
          return {
            ...prev,
            diet: userDiet,
            type: userDishType,
            includeIngredients: userIngredients,
            intolerances: userIntolerance,
            maxCarbs: userMaxCalories,
          };
        });
      }, [userDiet, userDishType, userIngredients, userIntolerance, userMaxCalories]);
      

    useEffect(() => {
        console.log(object)
    },[object])

    const handleRecipe = () => {
        
        console.log(object)
    }
    return (
        <div>
            <Navbar></Navbar>
            <form className="grid grid-cols-1 md:grid-cols-5 gap-10 px-10 min-[500px]:px-[60px] mt-10 min-h-[100vh]">
                <div className="col-span-1 md:col-span-3">
                    <h1 className="text-[64px] font-bold text-center">What's in your fridge ?</h1>
                    <div className="w-full rounded-[25px] border-[#5C9125] border-2 flex items-center py-2 px-3 mb-2 relative focus:border-b-0" 
                        >
                        <CiSearch size={20} />
                        <input type="text" id="search-form" 
                       
                        className="ml-2 focus:outline-none outline-none w-full autofill:!bg-white" onChange={(e) => {
                            handleUserInput(e.target.value)
                        }}
                         />
                        {(
                            // appearSearchResult &&
                             recommendation.length > 0) && <ul className="absolute top-[50px] left-[-1px] w-full bg-white z-[1] rounded-[25px] border-[#5C9125] border-2 p-3 ">
                        {recommendation.map((item,index) => {
                            return (
                                <li className="w-full">
                                    <Link onClick={() => {
                                        addItemToList(item,userIngredients,setUserIngrdients)
                                        removeItemFromList(item,recommendation,setRecommendation)
                                    }} className="block w-full hover:bg-slate-400">
                                     {item}
                                    </Link>
                                   
                                </li>
                            )
                        })}
                        </ul>}
                    </div>
                    <label htmlFor="search-form" className="ml-10">Eg: Chicken, Beef, Tomato, Flour, etc.</label>
                    <div className="w-full h-[5px] bg-[#5C9125] mt-3.5"></div>
                    <div>
                        <h2 className="mt-7 text-[24px] font-semibold">Additional information (optional)</h2>
                        <div className="mt-[11px] mb-[9px]">
                            <div className="flex items-center">
                                <h3 className="text-[22px] font-medium mr-2">Dish type</h3>
                            </div>
                            <select name="" id="" 
                            onChange={(e) => {
                                                addItemToList(e.target.value,userDishType,setUserDishType)
                                                removeItemFromList(e.target.value,listOfDishType,setListOfDishType)
                                                e.target.value = ""
                                            }} className="w-[150px] sm:w-[200px] lg:w-[250px] h-[35px] border-2 border-[#5C9125] rounded-[15px] px-3 focus:outline-none outline-none">
                                <option value="">Select</option>
                                {
                                    listOfDishType.map((item,index) => {
                                        return (
                                            <option value={item} className="capitalize"> {item}</option>
                                        )
                                    })
                                }
                            </select>
                            <ul className="mt-2 flex overflow-hidden gap-2">
                                    {userDishType.map((item,index) => {
                                        return (
                                            <li className=" bg-slate-400 px-3 py-2 rounded-[5px] flex w-[140px] justify-between items-center capitalize" >
                                                <span>
                                                    {item}
                                                </span>
                                                <Link onClick={() => {
                                                    addItemToList(item,listOfDishType,setListOfDishType)
                                                    removeItemFromList(item,userDishType,setUserDishType)
                                                }} >
                                                    <IoMdRemoveCircleOutline />
                                                </Link> 
                                                </li>
                                        )
                                    })}
                            </ul>
                        </div>
                        <div>   
                            <h3>Intolerance</h3>
                            <ul className="w-full md:w-3/4 lg:w-3/5 grid grid-cols-2 min-[640px]:grid-cols-3 gap-4 lg:gap-6">
                                {
                                    listOfIntolerance.map((item,index) => {
                                        return (
                                            <li className={`min-h-[30px] border-2  border-[#5C9125] rounded-[15px] ${
                                               elementInList(item,userIntolerance) ? "bg-[#5C9125] text-white" : "bg-white text-black"
                                            } `}>
                                                <Link className="w-full flex justify-center capitalize my-1 text-base" onClick={() => {
                                                    if (!elementInList(item,userIntolerance)) addItemToList(item,userIntolerance,setUserIntolerance)
                                                    else removeItemFromList(item,userIntolerance,setUserIntolerance)
                                                }} >{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="w-3/5">
                            <h3>Diet</h3>
                            <select className="w-[150px] sm:w-[200px] lg:w-[250px] h-[35px] border-2 border-[#5C9125] rounded-[15px] px-3 focus:outline-none outline-none"
                            onChange={(e) => {
                                removeItemFromList(e.target.value,listOfDiets,setListOfDiets)
                                addItemToList(e.target.value,userDiet,setUserDiet)
                                e.target.value = ""
                            } }
                            >
                                <option name="" id="">Select</option>
                               {
                                listOfDiets.map((item,index) => {
                                    return (
                                        <option name="" id="" className="capitalize" >{item}</option>
                                    )
                                })
                               }
                            </select>
                            <ul className="mt-2 flex gap-4" >
                                {userDiet.map((item,index) => {
                                    return (
                                        <li className=" bg-slate-400 px-3 py-2 rounded-[5px] flex w-[140px] justify-between items-center capitalize" >
                                            <span>
                                                {item}
                                            </span>
                                            <Link onClick={() => {
                                                    addItemToList(item,listOfDiets,setListOfDiets)
                                                    removeItemFromList(item,userDiet,setUserDiet)
                                                }} >
                                                    <IoMdRemoveCircleOutline />
                                                </Link> 
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="w-full">
                            <h3>Max calories</h3>
                            <div className="w-full">
                                <input type="range" min={0} max={1000} value={userMaxCalories} step={1} className="w-full h-[5px] bg-[#5C9125]" onChange={(e) => {
                                    setUserMaxCalories(e.target.value)
                                } } style={{
                                    WebkitAppearance: "none"
                                }}/>
                            </div>
                            <div className="pt-2">
                                <p>
                                    {userMaxCalories + " calories"}
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col-span-1 md:col-span-2 rounded-[45px] border border-black bg-[#E7EFDE] py-3 px-6  lg:px-10 flex flex-col items-center">
                    <div className="flex justify-center">
                        <h2 className="font-semibold text-base lg:text-2xl border-b-[2px] border-black w-fit">Your ingredients</h2>
                    </div>
                    <div className="w-full pl-6" >   
                        <ul className="list-disc">
                            {userIngredients.map((item,index) => {
                                return (
                            <li className="min-h-10 mb-2 mt-2 ">
                                <div className="flex items-center justify-between ">
                                    <span className="capitalize">
                                    {item}
                                    </span>
                                    <Link className="w-8 h-8 rounded-full bg-white grid place-items-center" onClick={() => {
                                        removeItemFromList(item,userIngredients,setUserIngrdients)
                                    }} >
                                        <span>-</span>
                                    </Link>
                                </div>
                            </li>                            
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex justify-center mt-4 w-full">
                        <Link to={{
                            pathname: "/result",
                        }} state={object} className="bg-[#5C9125] text-white w-full min-[300px]:w-[200px] min-h-[60px] m-auto rounded-[25px] grid place-content-center"> 
                            <span>Get recipe!</span>
                        </Link>
                    </div>
                </div>
                <style>

                </style>
            </form>
            
        </div>
    )
}