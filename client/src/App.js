import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ParticlesContainer from "./components/Particles";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Project from "./pages/Project";
import Home from "./pages/Home";
const App = () => <RouterProvider router={router} />;
var MainRoute = () => {
  return (
    <div className="App overflow-x-hidden ">
      <ParticlesContainer />
      <div className=" relative">
        <Outlet />
      </div>
      <div className="flex gap-4 mb-6 fixed bottom-0 right-24">
        <a href="https://github.com/youssefKG" target="_blank" rel="noreferrer">
          <FaGithub className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        </a>
        <FaFacebook className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        <a
          href="https://www.linkedin.com/in/youssef-taoussi-0081a7264/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        </a>
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/project/:projectId",
        Component: Project,
      },
    ],
  },
]);
export default App;
