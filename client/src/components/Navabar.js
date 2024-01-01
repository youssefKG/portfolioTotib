import { Link, NavLink } from "react-router-dom";
import Wave from "./wave/Wave";
import { GoArrowUpRight } from "react-icons/go";
const Navbar = () => {
    return (
        <header>
            <nav className=" z-50  w-full top-0 border-gray-700 p-4 fixed flex items-center justify-around bg-[#240046]/10">
                <div>
                    <a href="#">
                        <div className="flex gap-2 items-center">

                            <img src={require("../assets/images/cube.jpg")} alt="" className=" object-fill bg-contain w-10 rounded-lg  h-10" />
                            <div className="flex gap-4">
                                <h1 className="text-gray-300 font-bold uppercase">code with totib</h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="hidden sm:flex">
                    <ul className=" flex items-center gap-4  text-gray-500 font-semibold text-[16px]">
                        <li className="text-white  active flex relative cursor-pointer">
                            <a href="#">About</a>
                        </li>
                        <li className="hover:actice">
                            <a href="#experiences">Experices</a>
                        </li>
                        <li className="hover:actice">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="hover:active">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar; 