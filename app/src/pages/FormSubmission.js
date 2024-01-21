import { Navbar } from "../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const listOfDishType = ["breakfast", "lunch", "dinner"];
const listOfIngredients = ["chicken", "lettuce", "cheese"];
const listOfIntolerance = ["dairy", "egg", "peanut"];
const listOfDiets = ["vegetarian", "vegan", "pescetarian"];

export const FormSubmission = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form className="grid grid-cols-5 gap-10 mx-[60px] mt-2 min-h-[85vh]">
                <div className="col-span-3">
                    <h1 className="text-[64px] font-bold text-center">What's in your fridge ?</h1>
                    <div className="w-full border rounded-[25px] border-[#5C9125] flex items-center py-2 px-3 mb-2">
                        <CiSearch size={20} />
                        <input type="text" id="search-form" className="ml-2 focus:outline-none outline-none" />
                    </div>
                    <label htmlFor="search-form" className="ml-10">Eg: Chicken, Beef, Tomato, Flour, etc.</label>
                    <div className="w-full h-[5px] bg-[#5C9125] mt-2">
                    <div>
                        <h2>Additional information</h2>
                        <div>
                            <h3>Dish type</h3>
                            <select name="" id="" className="">
                                {
                                    listOfDishType.map((item,index) => {
                                        return (
                                            <option value={item}> {item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>   
                            <h3>Intolerance</h3>
                            <ul className="flex">
                                {
                                    listOfIntolerance.map((item,index) => {
                                        return (
                                            <li className="min-w-[140px] min-h-[30px] border rounded-[15px] border-[#5C9125]">
                                                <Link className="w-full flex justify-center capitalize">{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Diet</h3>
                            <ul className="flex">
                                {
                                    listOfDiets.map((item,index) => {
                                        return (
                                            <li className="min-w-[140px] min-h-[30px] border rounded-[15px] border-[#5C9125]">
                                                <Link className="w-full flex justify-center capitalize">{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Max calories</h3>
                            <input type="text" className="w-[100px] border" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-2 rounded-[45px] border border-black bg-[#E7EFDE] py-3 px-[60px]">
                    <div className="flex justify-center">
                        <h2 className="font-semibold text-[24px] border-b-[2px] border-black w-fit">Your ingredients</h2>
                    </div>
                    <div className="w-full" >   
                        <ul className="list-disc">
                            {listOfIngredients.map((item,index) => {
                                return (
                            <li className="min-h-10 mb-2 mt-2 ">
                                <div className="flex items-center justify-between ">
                                    <span className="capitalize">
                                    {item}
                                    </span>
                                    <button className="w-10 h-10 rounded-full bg-white" >
                                        -
                                    </button>
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
            </form>
        </div>
    )
}