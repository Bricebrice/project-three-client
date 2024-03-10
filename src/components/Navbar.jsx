import { useNavigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import logo from "../../src/assets/logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutRedirect = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-mantis-400">
      <div className="flex items-center justify-between text-white mr-6">
        <NavLink className="flex items-center gap-1" to={"/"}>
          <img src={logo} alt="logo" className="h-12 w-auto" />
          <span className="text-2xl">VeganEase Planner</span>
        </NavLink>
      </div>
      <div className="flex gap-3 items-center lg:hidden">
        {/* Profile Picture with menu option pops up when user is logged in */}
        {isLoggedIn && (
          <div className="relative">
            <img
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
              src={user.profilePic}
              className="w-8 h-8 rounded-full block hover:ring-4 hover:ring-mantis-600 "
            />
            <div
              className={`bg-mantis-600 ${
                menuToggle ? "absolute" : "hidden"
              } -left-36 top-10 rounded-md w-44`}
            >
              <span className="text-sm text-white block m-2 p-1 text-nowrap">
                {user.firstName + " " + user.lastName}
              </span>
              <span className="text-sm text-white block mx-2 mb-2 p-1">
                {user.email}
              </span>

              <NavLink
                to={"/profile"}
                className="text-sm text-white block mx-2 mb-2 p-1 rounded hover:bg-mantis-300"
              >
                Profile
              </NavLink>
              <NavLink
                to={"/profile/settings"}
                className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
              >
                Settings
              </NavLink>
              <button
                onClick={logOutRedirect}
                className="text-sm text-white bg-orange-500 mx-1 mb-2 py-1 px-14 rounded text-nowrap"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
        {/* Hamburger when closed and X when open*/}
        <button
          onClick={() => setNavToggle(!navToggle)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <HiMenu
            className={`text-white fill-current h-8 w-8 ${
              navToggle ? "hidden" : "block"
            }`}
            style={{ color: "white" }}
          />
          <HiOutlineX
            className={`text-white fill-current h-8 w-8 ${
              navToggle ? "block" : "hidden"
            }`}
            style={{ color: "white" }}
          ></HiOutlineX>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          navToggle ? "block" : "hidden"
        }`}
      >
        <div id="navlink-container" className="text-sm lg:flex">
          <NavLink
            onClick={() => {
              setNavToggle(false);
            }}
            to={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-center"
          >
            Home
          </NavLink>
          {!isLoggedIn && (
            <NavLink
              onClick={() => {
                setNavToggle(false);
              }}
              to={"/login"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-center"
            >
              Log In
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              onClick={() => {
                setNavToggle(false);
              }}
              to={"/signup"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-center"
            >
              Sign Up
            </NavLink>
          )}
          {isLoggedIn && <button onClick={logOutRedirect}>Sign Out</button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
