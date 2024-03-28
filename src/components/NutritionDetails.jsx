import { useState, useEffect } from "react";

import HeartIcon from "./HeartIcon";
import ProgressCircle from "./ProgressCircle";

function NutritionDetails({
  name,
  imageUrl,
  calories,
  proteins,
  fats,
  carbs,
  isLiked,
  onClick,
}) {
  const [proteinPercentage, setProteinPercentage] = useState(0);
  const [fatPercentage, setFatPercentage] = useState(0);
  const [carbPercentage, setCarbPercentage] = useState(0);

  useEffect(() => {
    const totalCalories = proteins + fats + carbs;
    // console.log("total calories: ", totalCalories);

    const proteinPercent = (proteins / totalCalories) * 100;
    // console.log(proteinPercent);
    const fatPercent = (fats / totalCalories) * 100;
    const carbPercent = (carbs / totalCalories) * 100;

    setProteinPercentage(proteinPercent);
    setFatPercentage(fatPercent);
    setCarbPercentage(carbPercent);
  }, [proteins, fats, carbs, calories]);

  return (
    <>
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-80 object-cover" />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <HeartIcon onClick={onClick} isLiked={isLiked} />
        </div>
      </div>
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          {name}
        </h2>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Nutritional Information:
        </h3>
        <ul className="list-disc pl-8">
          <li>Calories: {calories}kcal</li>
          {/* <li>Proteins: {proteins}g</li>
          <li>Fats: {fats}g</li>
          <li>Carbs: {carbs}g</li> */}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-6">
        <ProgressCircle
          percentage={proteinPercentage}
          title="Proteins"
          grams={proteins}
        />
        <ProgressCircle percentage={fatPercentage} title="Fats" grams={fats} />
        <ProgressCircle
          percentage={carbPercentage}
          title="Carbs"
          grams={carbs}
        />
      </div>
    </>
  );
}

export default NutritionDetails;
