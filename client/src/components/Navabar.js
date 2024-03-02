const Navbar = ({ setActiveList, activeList }) => {
  return (
    <header>
      <nav className=" z-50  w-full top-0 border-gray-700 p-4 fixed flex items-center justify-around bg-[#240059]">
        <div>
          <a href="#">
            <div className="flex gap-2 items-center">
              <img
                src={require("../assets/images/cube.jpg")}
                alt=""
                className=" object-fill bg-contain w-10 rounded-lg  h-10"
              />
              <div className="flex gap-4">
                <h1 className="text-gray-300 font-bold uppercase">
                  code with totib
                </h1>
              </div>
            </div>
          </a>
        </div>
        <div className="hidden sm:flex">
          <ul className=" flex items-center gap-4  text-gray-500 font-semibold text-[16px]">
            <li
              className={`${activeList === "about" && "active text-white"} relative cursor-pointer`}
            >
              <a onClick={() => setActiveList("about")} href="#">
                About
              </a>
            </li>
            <li
              className={`${activeList === "experiences" && "active text-white"} relative`}
            >
              <a
                onClick={() => setActiveList("experiences")}
                href="#experiences"
              >
                Experices
              </a>
            </li>
            <li
              className={`${activeList === "projects" && "active text-white"} relative`}
            >
              <a onClick={() => setActiveList("projects")} href="#projects">
                Projects
              </a>
            </li>
            <li
              className={`${activeList === "contact" && "active text-white"} relative`}
            >
              <a onClick={() => setActiveList("contact")} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

