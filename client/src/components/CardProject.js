import { FiArrowUpRight } from "react-icons/fi";
const CardProject = () => {
    return (
        <div
            className="projectCard flex  flex-col sm:flex-row gap-4 relative   border  border-gray-800 hover:border-gray-700  cursor-pointer  hover:opacity-100 transitionClass bg-[#3c096c]/40 hover:bg-[#3c096c]/60 transition-colors p-6 rounded-2xl sm:max-w-2xl  w-full     duration-100  opacity-70">
            <img
                className="w-30 rounded-lg h-24"
                src={require("../assets/images/Capture d'écran 2023-11-21 232211.png")}
                alt="" />

            <div className=" flex  flex-col gap-4 flex-wrap">
                <div className="flex gap-2 items-center" >
                    <h className="text-gray-200 font-bold text-lg tracking-widest "> Build Task Manager </h>
                    <FiArrowUpRight className="text-white font-bold w-5 h-5 upRightFlesh" />
                </div>
                <p className="text-gray-300 font-medium line-clamp-2  ">
                    TaskMaster is a robust full-stack web application designed to streamline your task management process. Seamlessly integrated with an intuitive user interface, TaskMaster empowers users to effortlessly organize, update, and delete tasks with efficiency and precision.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <p className="p-1 px-3 text-gray-300 font-bold bg-[#5a189a]/70 rounded-lg">React.js</p>
                    <p className="p-1 px-3 text-gray-300 font-bold bg-[#5a189a] rounded-lg">Tailwindcss</p>
                    <p className="p-1 px-3 text-gray-300 font-bold bg-[#5a189a] rounded-lg">Express</p>
                    <p className="p-1 px-3 text-gray-300 font-bold bg-[#5a189a] rounded-lg">MySql</p>
                    <p className="p-1 px-3 text-gray-300 font-bold bg-[#5a189a] rounded-lg">Node.js</p>

                </div>
            </div>
        </div>
    )
}
export default CardProject