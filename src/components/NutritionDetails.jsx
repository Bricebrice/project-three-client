function NutritionDetails({ name, imageUrl, calories, proteins, fats, carbs }) {
  return (
    <>
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-80 object-cover" />
        <svg
          className="absolute top-0 right-0 w-8 h-8 hover:fill-red-600 text-gray-800 dark:text-white m-4"
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
            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
          />
        </svg>
      </div>
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          {name}
        </h2>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Nutritional Information:
        </h3>
        <ul className="list-disc pl-8">
          <li>Calories: {calories}</li>
          <li>Proteins: {proteins}g</li>
          <li>Fats: {fats}g</li>
          <li>Carbs: {carbs}g</li>
        </ul>
      </div>
    </>
  );
}

export default NutritionDetails;
