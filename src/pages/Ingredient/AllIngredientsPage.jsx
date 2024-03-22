import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ingredientService from "../../services/ingredient.service";

export default function AllIngredientsPage() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllIngredients = async () => {
    try {
      const response = await ingredientService.allIngredients();
      //console.log(response.data.ingredients);
      setAllIngredients(response.data.ingredients);
      setIsLoading(false);
      //console.log(allIngredients);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllIngredients();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-mustard-100">
      <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="mb-16 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          Ingredients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allIngredients.map((ingredient) => {
            return (
              <Card key={ingredient._id} item={ingredient} url="/ingredient" />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
