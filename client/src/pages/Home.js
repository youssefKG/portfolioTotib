import { useState } from "react";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Experiences from "../components/Experiences";
import Navbar from "../components/Navabar.js";
import Contact from "../components/Contact";
import TM1 from "../assets/images/TM1.png";
const Home = () => {
  const [activeList, setActiveList] = useState("about");
  return (
    <div className="App mt-12 overflow-x-hidden">
      <Navbar activeList={activeList} setActiveList={(l) => setActiveList(l)} />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
};
export default Home;
