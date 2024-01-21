import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdRemoveCircleOutline } from "react-icons/io";
const listOfIntolerance = ["dairy", "egg", "gluten","grain", "peanut","seafood","sesame","shellfish","soy","sulfite","tree nut","wheat"];
export const FormSubmission = () => {
    const [listOfDishType,setListOfDishType] = useState(["main course","side dish","dessert","appetizer","salad","bread","breakfast","soup","beverage","sauce","marinate","fingerfood","snack","drink"])
    const [userDishType,setUserDishType] = useState([])
    const [listOfDiets,setListOfDiets] = useState(["gluten free","kenogenic", "vegeterian", "lacto-vegeterian", "ovo-vegetarian", "vegan","pescetarian", "paleo","primal","lowfodmap","whole30"])
    const [userDiet,setUserDiet] = useState([])
    const [userIntolerance,setUserIntolerance] = useState([])
    const [userIngredients,setUserIngrdients] = useState(["chicken", "lettuce", "cheese"]);
    const [userMaxCalories,setUserMaxCalories] = useState(0)
    useEffect(() => {
        console.log(userIntolerance)
    },[userIntolerance])
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
    return (
        <div>
            <Navbar></Navbar>
            <form className="grid grid-cols-5 gap-10 mx-[60px] mt-2 min-h-[100vh]">
                <div className="col-span-3">
                    <h1 className="text-[64px] font-bold text-center">What's in your fridge ?</h1>
                    <div className="w-full rounded-[25px] border-[#5C9125] border-2 flex items-center py-2 px-3 mb-2">
                        <CiSearch size={20} />
                        <input type="text" id="search-form" className="ml-2 focus:outline-none outline-none" />
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
                                            }} className="w-[250px] h-[35px] border-2 border-[#5C9125] rounded-[15px] px-3 focus:outline-none outline-none">
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
                            <ul className="w-3/5 grid grid-cols-3 gap-3">
                                {
                                    listOfIntolerance.map((item,index) => {
                                        return (
                                            <li className={`w-[100px] min-h-[30px] border-2  border-[#5C9125] rounded-[15px] ${
                                               elementInList(item,userIntolerance) ? "bg-[#5C9125] text-white" : "bg-white text-black"
                                            } `}>
                                                <Link className="w-full flex justify-center capitalize" onClick={() => {
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
                            <select className="w-[250px] h-[35px] border-2 border-[#5C9125] rounded-[15px] px-3 focus:outline-none outline-none"
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
                        <div>
                            <h3>Max calories</h3>
                            <div>
                                <input type="range" min={0} max={1000} value={userMaxCalories} step={1} className="w-[470px] h-[5px] bg-[#5C9125]" onChange={(e) => {
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
                <div className="col-span-2 rounded-[45px] border border-black bg-[#E7EFDE] py-3 px-[60px] flex flex-col items-center">
                    <div className="flex justify-center">
                        <h2 className="font-semibold text-[24px] border-b-[2px] border-black w-fit">Your ingredients</h2>
                    </div>
                    <div className="w-4/5" >   
                        <ul className="list-disc">
                            {userIngredients.map((item,index) => {
                                return (
                            <li className="min-h-10 mb-2 mt-2 ">
                                <div className="flex items-center justify-between ">
                                    <span className="capitalize">
                                    {item}
                                    </span>
                                    <Link className="w-10 h-10 rounded-full bg-white grid place-items-center" onClick={() => {
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
                    <div className="flex justify-center">
                        <button className="bg-[#5C9125] text-white min-w-[300px] min-h-[60px] m-auto rounded-[25px]">Get recipe!</button>
                    </div>
                </div>
                <style>

                </style>
            </form>
            
        </div>
    )
}