import homePageImage from "../assets/veganFood.jpg";
import AuthContext from "../context/auth.context";
import { useContext } from "react";

import { Link } from "react-router-dom";

function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${homePageImage})`,
      }}
    >
      <div className="bg-blend-multiply px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="md:max-w-full max-w-64 mb-4 text-5xl font-extrabold tracking-tight leading-none text-black-800	 md:text-5xl lg:text-5xl">
          The veggie meal buddy
        </h1>
        <p className="md:max-w-full max-w-48 mb-8 text-lg font-normal text-black-800 lg:text-xl  ">
          Simplify your meal planning today
        </p>
        <div className="flex space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
          {isLoggedIn ? (
            <Link
              to={"/all-meals"}
              className="inline-flex justify-center items-center px-5 text-center text-black-800 bg-orange-400 border-2 shadow border-orange-500 rounded py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
            >
              Start now!
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="inline-flex justify-center items-center px-5 text-center text-black-800 bg-orange-400 border-2 shadow border-orange-500 rounded py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
            >
              Start now!
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
