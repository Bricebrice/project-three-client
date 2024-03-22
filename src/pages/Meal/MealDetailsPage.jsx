import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

import NutritionDetails from "../../components/NutritionDetails";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import HeartIcon from "../../components/HeartIcon";
import CalendarIcon from "../../components/CalendarIcon";
import VegSpinner from "../../components/Spinner";

import mealService from "../../services/meal.service";
import ingredientService from "../../services/ingredient.service";
import userService from "../../services/user.service";

import { AuthContext } from "../../context/auth.context";

function MealDetailsPage() {
  const [foundMeal, setFoundMeal] = useState(null);
  const [foundIngredients, setFoundIngredients] = useState(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  const { isLoggedIn, user } = useContext(AuthContext);

  const { mealId } = useParams();

  // Fetch meal
  useEffect(() => {
    const fetchMeal = async () => {
      setIsLoading(true);
      try {
        const response = await mealService.findById(mealId);
        // console.log("response.data ", response.data);
        setFoundMeal(response.data);
        // Retrieve isLiked state from localStorage
        const likedStatus =
          isLoggedIn && localStorage.getItem("likedMeal:" + mealId) === "true";
        // console.log("isLiked from localStorage:", likedStatus);
        setIsLiked(likedStatus);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchMeal();
  }, [mealId, isLoggedIn]);

  // Fetch ingredients
  useEffect(() => {
    const fetchIngredients = async () => {
      if (foundMeal) {
        const ingredientsData = [];
        for (const ingredient of foundMeal.ingredients) {
          try {
            const response = await ingredientService.findById(ingredient.item);
            ingredientsData.push(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        setFoundIngredients(ingredientsData);
      }
    };
    fetchIngredients();
  }, [foundMeal]);

  // Handle menu click
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };

  // Handle heart click
  const handleHeartClick = async () => {
    setIsLiked(!isLiked);
    if (isLoggedIn && foundMeal) {
      try {
        if (isLiked) {
          // Remove from favorites if already liked
          await userService.removeMealFromFavorites(user._id, mealId);
          console.log("Meal removed from favorites");
        } else {
          // Add to favorites if not liked
          await userService.addMealToFavorites(user._id, mealId);
          console.log("Meal added to favorites ", mealId);
        }
        localStorage.setItem("likedMeal:" + mealId, !isLiked);
      } catch (error) {
        console.error("Error adding meal to favorites:", error);
      }
    } else {
      navigate("/login");
    }
  };

  if (isLoading) {
    return (
      <>
        <VegSpinner />
      </>
    );
  }

  const isAuthor =
    isLoggedIn && user && foundMeal && foundMeal.creator === user._id;
  // console.log(`isAuthor: ${isAuthor}`);

  return (
    <>
      <BackButton parentUrl="/all-meals" />
      <section className="bg-white dark:bg-gray-900 pb-8 px-4 mx-auto max-w-2xl lg:pb-8">
        {!foundMeal && <h3>This meal doesn't exist!</h3>}
        {foundMeal && (
          <>
            <div className="border rounded-lg overflow-hidden shadow-lg relative">
              <NutritionDetails
                name={foundMeal.name}
                imageUrl={foundMeal.imageUrl}
                calories={foundMeal.calories}
                proteins={foundMeal.proteins}
                fats={foundMeal.fats}
                carbs={foundMeal.carbs}
                isLiked={isLiked}
                onClick={handleHeartClick}
              />

              <hr />

              <div className="p-6">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Ingredients
                </h3>
                <ul>
                  {foundIngredients &&
                    foundIngredients.map((ingredient, _id) => (
                      <ul key={_id} className="list-disc pl-8">
                        <li className="hover:underline hover:text-blue-500">
                          <Link to={`/ingredient/${ingredient._id}`}>
                            {ingredient.name},
                            <span> {foundMeal.ingredients[_id].quantity}g</span>
                          </Link>
                        </li>
                      </ul>
                    ))}
                </ul>
              </div>

              <hr />

              <div className="p-6">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Cooking instructions
                </h3>
                <p>{foundMeal.cookingInstructions}</p>
              </div>

              <hr />

              <div className="px-6 py-4 flex items-center justify-between h-20">
                <div className="flex items-center space-x-4">
                  <Link to="/">
                    <CalendarIcon />
                  </Link>
                  <HeartIcon onClick={handleHeartClick} isLiked={isLiked} />
                </div>

                {menuToggle && (
                  <div className="absolute max-w-xs bg-white shadow-md rounded-md bottom-20 right-0">
                    <Link
                      to={`/edit/${mealId}`}
                      className="p-2 hover:bg-mantis-500 hover:text-white rounded-md flex items-center"
                    >
                      <svg
                        className="mr-1 -ml-1 w-5 h-5 text-primary-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Edit
                    </Link>
                    <Link
                      to={`/delete/${mealId}`}
                      className="p-2 hover:bg-mantis-500 hover:text-white rounded-md flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-1.5 -ml-1 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Delete
                    </Link>
                  </div>
                )}

                {isLoggedIn && isAuthor && (
                  <button
                    onClick={handleMenuClick}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                  >
                    <svg
                      className="w-8 h-8 font-extrabold text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M12 6h.01M12 12h.01M12 18h.01"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default MealDetailsPage;
