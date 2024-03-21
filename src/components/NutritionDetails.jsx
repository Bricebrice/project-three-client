function NutritionDetails({ details }) {
  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
        {details.name}
      </h2>
      <img
        src={details.imageUrl}
        alt={details.name}
        className="w-full h-auto mb-4"
      />
      <h3 className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        Nutritional Information:
      </h3>
      <p className="mb-2">Calories: {details.calories}</p>
      <p className="mb-2">Proteins: {details.proteins}</p>
      <p className="mb-2">Fats: {details.fats}</p>
      <p className="mb-2">Carbs: {details.carbs}</p>
    </div>
  );
}

export default NutritionDetails;
