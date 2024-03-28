import { useNavigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import NavLogo from "./NavLogo";
import ProfilePicMenu from "./ProfilePicMenu";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { isLoggedIn, logOutUser, isAdmin, user } = useContext(AuthContext);

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
          {/* small screen profile pic */}
          {isLoggedIn && (
            <div className="xs:block sm:block md:block lg:hidden">
              <ProfilePicMenu
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                user={user}
                logOutRedirect={logOutRedirect}
              />
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
            {/*large screen profile pic menue*/}
            {isLoggedIn && (
              <div className="hidden lg:block">
                <ProfilePicMenu
                  menuToggle={menuToggle}
                  setMenuToggle={setMenuToggle}
                  user={user}
                  logOutRedirect={logOutRedirect}
                />
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
            {isLoggedIn && (
              <NavLink
                onClick={() => {
                  setNavToggle(false);
                }}
                to={"/add-meal"}
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-center py-0.5 px-1"
              >
                Add a Meal
              </NavLink>
            )}
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
