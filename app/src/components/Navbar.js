import { Link } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { useState } from "react"
import LogoLink from "../assets/logo.png"
export const Navbar = () => {
    const [userName,setUserName] = useState("user")
    return (
        <div className="h-[75px] bg-[#5C9125] w-full flex justify-center items-center" >
           <div className="px-[60px] w-full h-full flex justify-between items-center">
            <div className="h-full">
                <Link to={"/"} className="block w-full h-full">
                <img src={LogoLink}  alt="" className="w-full h-full" />
                </Link>
            </div>
            <div className="flex gap-6 text-white items-center">
                <Link to={"/result"}>Get random recipe</Link>
                {/* <Link>Hi, {userName}</Link>
                <Link className="flex items-center justify-center">  
                <CiUser size={30}></CiUser>
                </Link>    */}
            </div>
           </div>
        </div>
    )
}