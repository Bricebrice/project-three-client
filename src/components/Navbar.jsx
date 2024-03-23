import { useNavigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import NavLogo from "./NavLogo";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { isLoggedIn, user, logOutUser, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutRedirect = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <>
      <nav className="z-50 fixed w-full flex items-center justify-between flex-wrap py-2 px-4 bg-mantis-400">
        <NavLogo />
        <div className="flex gap-2 md:gap-3 items-center lg:hidden">
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

                <hr />

                <NavLink
                  to={"/profile"}
                  className="text-sm text-white block mx-2 m-2 p-1 rounded hover:bg-mantis-300"
                >
                  Profile
                </NavLink>
                <NavLink
                  to={`/profile/${user._id}`}
                  className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
                >
                  Edit User
                </NavLink>
                {isAdmin && (
                  <NavLink
                    to={"/add-ingredient"}
                    className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
                  >
                    Add Ingredients
                  </NavLink>
                )}
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
            className="flex items-center sm:px-1 md:px-3 py-2 rounded text-black-500 hover:text-black-400"
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
            />
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            navToggle ? "block" : "hidden"
          }`}
        >
          <div
            id="navlink-container"
            className="text-sm lg:flex lg: items-center lg:gap-4"
          >
            {isLoggedIn && (
              <div className="relative hidden lg:block lg:mr-3">
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
                  <span className=" pb-2 text-sm text-white block mx-2 mb-2 p-1">
                    {user.email}
                  </span>

                  <hr />

                  <NavLink
                    to={"/profile"}
                    className="text-sm text-white block mx-2 m-2 p-1 rounded hover:bg-mantis-300"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to={`/profile/${user._id}`}
                    className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
                  >
                    Edit User
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
            <NavLink
              onClick={() => {
                setNavToggle(false);
              }}
              to={"/"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setNavToggle(false);
              }}
              to={"/all-meals"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
            >
              Meals
            </NavLink>
            <NavLink
              onClick={() => {
                setNavToggle(false);
              }}
              to={"/all-ingredients"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
            >
              Ingredients
            </NavLink>
            {!isLoggedIn && (
              <NavLink
                onClick={() => {
                  setNavToggle(false);
                }}
                to={"/login"}
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
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
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      {/* Placeholder to preserve the height since navbar is fixed */}
      <div className="sm:h-12 h-16"></div>
    </>
  );
}

export default Navbar;
