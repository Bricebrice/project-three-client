import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ item, url }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = (e) => {
    setMenuToggle(!menuToggle);
    // console.log("Menu clicked");
  };

  return (
    <div className="max-w-sm rounded shadow-lg bg-white hover:bg-mantis-300 overflow-visible">
      <div className="relative rounded">
        <Link to={`${url}/${item._id}`}>
          <img
            src={item.imageUrl}
            alt="food food food"
            className="w-full lg:h-64 h-32 rounded-t object-cover"
          />
        </Link>
        {menuToggle && (
          <div className="absolute bg-white shadow-md rounded-md lg:left-28 bottom-0 right-1 ">
            {/* Can't nest Links!! Bad html practice */}
            <p className="p-2 hover:bg-mantis-500 hover:text-white rounded-md">
              Add to today
            </p>
            <p className="p-2 hover:bg-mantis-500 hover:text-white rounded-md">
              Add to week
            </p>
            <p className="p-2 hover:bg-mantis-500 hover:text-white rounded-md">
              Add to favourite
            </p>
          </div>
        )}
      </div>
      <div className="px-6 py-4 flex items-center justify-between h-20">
        <Link to={`${url}/${item._id}`} className="font-bold text-lg">
          {item.name}
        </Link>
        <button
          onClick={handleMenuClick}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-8 h-8 font-extrabold text-gray-800 dark:text-white"
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
      </div>
    </div>
  );
}
