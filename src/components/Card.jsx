import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ item, url }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();

    setMenuToggle(!menuToggle);
    console.log("Menu clicked");
  };

  return (
    <Link to={`${url}/${item._id}`} className="rounded-lg shadow-lg h-46">
      <div className="relative">
        <img src={item.imageUrl} alt="" className="w-full h-32" />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 left-0 right-0 bg-gray-900 opacity-25"></div>
      </div>
      <div className="relative h-16 px-6 py-4 flex items-center justify-between bg-mantis-200">
        <h5 className="font-semibold text-lg inline-block">{item.name}</h5>
        <button onClick={handleMenuClick}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
        </button>
        {menuToggle && (
          <div className="absolute bg-white shadow-md rounded-md p-2 right-0 top-full">
            {/* Can't nest Links!! Bad html practice */}
            <p>Add to today</p>
            <p>Add to week</p>
            <p>Add to favourite</p>
          </div>
        )}
      </div>
    </Link>
  );
}
