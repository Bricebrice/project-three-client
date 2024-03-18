import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CustomCard from "../../components/CustomCard";
import Footer from "../../components/Footer";
import ingredientService from "../../services/ingredient.service";

export default function AllIngredientsPage() {
  const [allIngredients, setAllIngredients] = useState([]);

  const getAllIngredients = async () => {
    try {
      const response = await ingredientService.allIngredients();
      console.log(response.data.ingredients);
      setAllIngredients(response.data.ingredients);
      console.log(allIngredients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllIngredients();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          All Ingredients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allIngredients.map((ingredient) => {
            return (
              <CustomCard
                key={ingredient._id}
                item={ingredient}
                url="/ingredient"
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
