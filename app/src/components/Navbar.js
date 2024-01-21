import { Link } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { useState } from "react"
export const Navbar = () => {
    const [userName,setUserName] = useState("user")
    return (
        <div className="h-[75px] bg-[#5C9125] w-full flex justify-center items-center" >
           <div className="w-3/4 h-full flex justify-between items-center">
            <div className="bg-white w-[50px] h-[50px]">
            </div>
            <div className="flex gap-6 text-white items-center">
                <Link to={"/result"}>Get random recipe</Link>
                <Link>Hi, {userName}</Link>
                <Link className="flex items-center justify-center">  
                <CiUser size={30}></CiUser>
                </Link>   
            </div>
           </div>
        </div>
    )
}