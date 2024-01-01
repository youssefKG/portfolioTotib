import Navbar from './components/Navabar';
import About from './components/About';
import Projects from './components/Projects';
import TimeLine from './TimeLine';
import ParticlesContainer from './components/Particles';
import Contact from './components/Contact';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Experiences from './components/Experiences';
function App() {
    return (
        <div className="App    overflow-x-hidden">
            <ParticlesContainer />
            <div className=' relative mt-12'>
                <Navbar />
                <About />
                <Experiences />
                <Projects />
                <Contact />
            </div>
            <div className="flex gap-4 mb-6 fixed bottom-0 right-24">
                <FaGithub className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
                <FaFacebook className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
                <FaLinkedin className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
            </div>
        </div>

    );
}

export default App;
