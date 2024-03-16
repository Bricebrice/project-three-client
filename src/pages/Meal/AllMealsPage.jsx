import { useEffect, useState } from "react";
import CustomCard from "../../components/CustomCard";
import Footer from "../../components/Footer";
import mealService from "../../services/meal.service";

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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-xl mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              All meals
            </h2>
          </div>
          <div className="flex flex-wrap justify-center sm:gap-6">
            {allMeals.map((meal) => (
              <div
                key={meal._id}
                className="p-2 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <CustomCard item={meal} url="/meal" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AllMealsPage;
