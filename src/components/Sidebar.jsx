/* eslint-disable react/prop-types */
import Hamburger from "../assets/hamburger.png";
import Homepage from "../assets/homepage.webp";
import Search from "../assets/search.png";
import About from "../assets/about.png";

const Sidebar = ({ toggle, handleToggle }) => {
  return (
    <div>
      {toggle === false ? (
        <div className="h-[95%] w-[7%] fixed left-8 top-8 overflow-y-auto bg-[#131313] rounded-2xl transition-all duration-500">
          <div className="flex flex-col text-3xl justify-center items-center mt-4 p-4 gap-8">
            <div className="sidebar-element">
              <img
                src={Hamburger}
                alt="Hamburger Navigation Icon"
                width={50}
                height={50}
                onClick={handleToggle}
              />
            </div>
            <hr
              className={`bg-gray-200 border-[1.7px] w-20 transition-all duration-500`}
            />
            <div className="sidebar-element">
              <img
                src={Homepage}
                alt="Homepage Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
            </div>
            <div>
              <img
                src={Search}
                alt="Search Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
            </div>
            <div>
              <img
                src={About}
                alt="About Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[95%] w-[20%] fixed left-8 top-8 overflow-y-auto bg-[#131313] rounded-2xl transition-all duration-500">
          <div className="flex flex-col text-3xl mt-4 p-4 gap-8">
            <div
              className="flex justify-center items-center gap-12 sidebar-element"
              onClick={handleToggle}
            >
              <h1 className="text-4xl font-bold">MyApp</h1>
              <img
                src={Hamburger}
                alt="Hamburger Navigation Icon"
                width={50}
                height={50}
              />
            </div>
            <hr
              className={`bg-gray-200 border-[1.7px] w-[15rem] ml-4 transition-all duration-500`}
            />
            <div className="flex justify-start items-center gap-4 ml-4 sidebar-element">
              <img
                src={Homepage}
                alt="Homepage Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
              <h1 className="text-[2rem]">Dashboard</h1>
            </div>

            <div className="flex justify-start items-center gap-4 ml-4 sidebar-element">
              <img
                src={Search}
                alt="Search Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
              <h1 className="text-[2rem]">Search</h1>
            </div>

            <div className="flex justify-start items-center gap-4 ml-4 sidebar-element ">
              <img
                src={About}
                alt="About Icon"
                width={50}
                height={50}
                className={`mb-4`}
              />
              <h1 className="text-[2rem]">About</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
