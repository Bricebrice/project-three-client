import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import mealService from "../../services/meal.service";
import Card from "../../components/Card";

function AllMealsPage() {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMeals = async () => {
    setIsLoading(true);

    try {
      const response = await mealService.allMeals();
      console.log("Response meals: ", response.data.meals);
      setAllMeals(response.data.meals);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMeals();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="mb-16 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          All Meals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allMeals.map((meal) => {
            return (
              <Card
                key={meal._id}
                item={meal}
                url="/meal"
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AllMealsPage;
