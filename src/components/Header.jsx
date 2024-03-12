import homePageImage from "../assets/veganFood.jpg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${homePageImage})` }}
    >
      <div className="bg-blend-multiply px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="md:max-w-full max-w-64 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-800	 md:text-5xl lg:text-6xl">
          The veggie meal buddy
        </h1>
        <p className="md:max-w-full max-w-48 mb-8 text-lg font-normal text-black-800 lg:text-xl  ">
          Simplify your meal planning today
        </p>
        <div className="flex  space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
          <Link
            to={"/login"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black-800 rounded-lg bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Start now!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
