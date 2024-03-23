import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VegSpinner from "../../components/Spinner";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import IngredientTable from "../../components/IngredientTable";
import mealService from "../../services/meal.service";
import ingredientService from "../../services/ingredient.service";
import RemoveBar from "../../components/RemoveBar";

export default function EditMealPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const { mealId } = useParams();
  const [form, setForm] = useState({
    name: "",
    description: "",
    cookingInstructions: "",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
    imageUrl: "",
    ingredients: [],
  });
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);

  const fetchData = async (id) => {
    try {
      const ingredientResponse = await ingredientService.allIngredients();
      console.log(ingredientResponse.data.ingredients);
      setAllIngredients(ingredientResponse.data.ingredients);
      const response = await mealService.findById(id);
      //console.log(response.data);
      const {
        name,
        description,
        cookingInstructions,
        calories,
        proteins,
        fats,
        carbs,
        imageUrl,
        ingredients,
      } = response.data;

      const foundMeal = {
        name,
        description,
        cookingInstructions,
        calories,
        proteins,
        fats,
        carbs,
        imageUrl,
        ingredients,
      };
      console.log(foundMeal);
      setForm(foundMeal);
      setRecipe(foundMeal.ingredients)
      console.log("recipe", recipe);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData(mealId);
  }, [mealId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    let proteins = recipe
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.proteins * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);
    let fats = recipe
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.fats * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let carbs = recipe
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.carbs * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let calories = recipe
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.calories * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let ingredients = recipe.map((ingredient) => {
      return { item: ingredient.item._id, quantity: ingredient.quantity };
    });

    setForm({
      ...form,
      proteins: proteins,
      fats: fats,
      carbs: carbs,
      calories: calories,
      ingredients: ingredients,
    });
  }, [recipe]);

  const handleFileUpload = async (e) => {
    try {
      //console.log("The file to be uploaded is: ", e.target.files[0]);
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);
      const response = await mealService.imageUpload(uploadData);
      setForm({
        ...form,
        imageUrl: response.data.fileUrl,
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mealService.edit(mealId, form);
      navigate(`/meal/${mealId}`);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  if (isLoading) {
    return (
      <>
        <VegSpinner />
      </>
    );
  }

  return (
    <>
      <div className="bg-mustard-100 flex flex-col h-full items-center">
        <div className="max-w-screen-xl8">
          <h3 className="m-8 sm:m-16 text-2xl sm:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Edit meal
          </h3>
        </div>

        <form
          className="md:max-w-lg mx-auto sm:max-w-full flex flex-col items-center mb-16 bg-mustard-400 rounded p-7"
          onSubmit={handleEditSubmit}
        >
          <div className="w-full mb-5">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">
              Name:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium"
            >
              Description:
            </label>
            <textarea
              rows="2"
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="description"
              type="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="cookingInstructions"
              className="block mb-2 text-sm font-medium"
            >
              Cooking Instructions:
            </label>
            <textarea
              rows="4"
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="cookingInstructions"
              type="cookingInstructions"
              name="cookingInstructions"
              value={form.cookingInstructions}
              onChange={handleChange}
            />
          </div>

          <SearchBar
            allIngredients={allIngredients}
            setRecipeIngredients={setRecipe}
            recipeIngredients={recipe}
          />

          <IngredientTable recipeIngredients={recipe} setRecipeIngredients={setRecipe} />

          <RemoveBar recipe={recipe} setRecipe={setRecipe} /> 

          <div className="flex items-center">
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="calories"
              id="calories"
              hidden
              value={form.calories}
              onChange={handleChange}
            />
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="proteins"
              id="proteins"
              hidden
              value={form.proteins}
              onChange={handleChange}
            />
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="fats"
              id="fats"
              hidden
              value={form.fats}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="carbs"
              id="carbs"
              hidden
              value={form.carbs}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 flex-col items-center justify-center w-full">
            <input
              className="mb-5 mx-auto hover:cursor-pointer"
              type="file"
              onChange={handleFileUpload}
            />

            {form.imageUrl === "" ? (
              <div className="w-24 h-24 mx-auto rounded-full bg-mantis-400"></div>
            ) : (
              <img
                src={form.imageUrl}
                className="w-24 h-24 mx-auto rounded-full"
                alt="food-image"
              />
            )}
          </div>

          <button
            className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
            type="submit"
          >
            Edit Meal
          </button>
        </form>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Footer />
    </>
  );
}
