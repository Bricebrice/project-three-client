function NutritionDetails({ name, imageUrl, calories, proteins, fats, carbs }) {
  return (
    <>
      <img src={imageUrl} alt={name} className="w-full h-80 object-cover" />
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
