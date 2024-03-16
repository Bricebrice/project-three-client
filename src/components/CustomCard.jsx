import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CustomCard({ item, url, isMealDetailsPage }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();

    setMenuToggle(!menuToggle);
    console.log("Menu clicked");
  };

  return (
    <Link to={`${url}/${item._id}`}>
      <Card
        className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        imgAlt={item.name}
        imgSrc={item.imageUrl}
      >
        <div className="flex justify-between items-center relative">
          <h5 className="sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
          {isMealDetailsPage && <div className="">Hey!</div>}
          <button
            onClick={handleMenuClick}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
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
      </Card>
    </Link>
  );
}

export default CustomCard;
