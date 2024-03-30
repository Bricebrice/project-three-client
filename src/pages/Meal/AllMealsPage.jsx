import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import mealService from "../../services/meal.service";
import Card from "../../components/Card";
import VegSpinner from "../../components/VegSpinner";
import SearchComponent from "../../components/SearchComponent";

function AllMealsPage() {
  const [allMeals, setAllMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllMeals = async () => {
    try {
      const response = await mealService.allMeals();
      console.log("Response meals fetch: ", response.data.meals);
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
      <>
        <VegSpinner />
      </>
    );
  }

  return (
    <>
      <div className="bg-mustard-100">
        <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h2 className="mb-8 sm:mb-5 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 text-center">
            Meals
          </h2>
          <SearchComponent setQuery={setQuery} type={"meals"} />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
            {allMeals
              .filter((meal) => {
                if (query === "") {
                  return meal;
                } else if (
                  meal.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return meal;
                } else return;
              })
              .map((meal) => {
                return <Card key={meal._id} item={meal} url="/meal" />;
              })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AllMealsPage;
