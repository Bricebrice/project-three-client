import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import IngredientTable from "../../components/IngredientTable";
import SearchBar from "../../components/SearchBar";
import VegSpinner from "../../components/Spinner";
import { AuthContext } from "../../context/auth.context";
import ingredientService from "../../services/ingredient.service";
import mealService from "../../services/meal.service";
import Footer from "../../components/Footer";

export default function CreateMealPage() {
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
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [finalRecipe, setFinalRecipe] = useState([]);
  const { user } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getAllIngredients = async () => {
    try {
      const response = await ingredientService.allIngredients();
      setAllIngredients(response.data.ingredients);
      setIsLoading(false);
    } catch (error) {
      //console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllIngredients();
  }, []);

  useEffect(() => {
    let proteins = recipeIngredients
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.proteins * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);
    let fats = recipeIngredients
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.fats * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let carbs = recipeIngredients
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.carbs * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let calories = recipeIngredients
      .map((ingredient) => {
        return (
          Math.round(
            ((ingredient.item.calories * ingredient.quantity) / 100) * 10
          ) / 10
        );
      })
      .reduce((acc, current) => acc + current, 0);

    let ingredients = recipeIngredients.map((ingredient) => {
      return { item: ingredient.item._id, quantity: ingredient.quantity };
    });

    setForm({
      ...form,
      proteins: proteins,
      fats: fats,
      carbs: carbs,
      calories: calories,
      ingredients: ingredients,
      creator: user._id
    });
  }, [recipeIngredients]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileUpload = async (e) => {
    try {
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);
      const response = await mealService.imageUpload(uploadData);
      console.log("response: ", response.data.fileUrl);
      setForm({
        ...form,
        imageUrl: response.data.fileUrl,
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleCreateMealSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mealService.create(form);
      navigate("/all-meals");
    } catch (error) {
      if (error.response) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        return;
      }
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
            Add meal
          </h3>
        </div>

        <form
          className="max-w-md mx-auto sm:max-w-full flex flex-col items-center mb-16 bg-mustard-400 rounded p-7"
          onSubmit={handleCreateMealSubmit}
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
            setRecipeIngredients={setRecipeIngredients}
            recipeIngredients={recipeIngredients}
          />

          <IngredientTable
            recipeIngredients={recipeIngredients}
            finalRecipe={finalRecipe}
            setFinalRecipe={setFinalRecipe}
          />

          <div className="mb-5">
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="calories"
              id="calories"
              hidden
              value={form.calories}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
              type="number"
              name="proteins"
              id="proteins"
              hidden
              value={form.proteins}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
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
            Create Meal
          </button>
        </form>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Footer />
    </>
  );
}
