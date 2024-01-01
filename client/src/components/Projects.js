import CardProject from "./CardProject"
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {

    return (
        <section id="projects" className="m-6  relative  mt-24 items-center    ">

            <h className=" font-extrabold text-[#e0aaff] text-2xl tracking-wider  border-b-[3px]  border-b-purple-500 p-2  ">Recent Projects :</h>


            <div className="  flex  items-center  flex-col justify-center  flex-1  h-full  gap-6    w-full  sm:px-10   mt-6 ">
                <CardProject />
                <CardProject />
                <CardProject />
                <button className=" text-xl mt-4 font-bold text-gray-400 hover:opacity-80 transition-opacity flex gap-2  items-center">
                    <h>
                        View All Projects
                    </h>
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    )
}

export default Projects