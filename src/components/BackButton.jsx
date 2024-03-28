import { Link } from "react-router-dom";

function BackButton({ parentUrl }) {
  const backButtonText =
    parentUrl === "/all-ingredients"
      ? "Back to all ingredients"
      : "Back to all meals";

  return (
    <div className="py-4 px-4 mx-auto max-w-2xl lg:py-4 flex items-center text-gray-500 dark:text-gray-400 hover:underline">
      <div className="flex items-center">
        <Link to={parentUrl} className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          <span>{backButtonText}</span>
        </Link>
      </div>
    </div>
  );
}

export default BackButton;
