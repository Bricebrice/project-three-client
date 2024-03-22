import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

import NutritionDetails from "../../components/NutritionDetails";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import HeartIcon from "../../components/HeartIcon";

import mealService from "../../services/meal.service";
import ingredientService from "../../services/ingredient.service";
import userService from "../../services/user.service";

import { AuthContext } from "../../context/auth.context";

function IngredientDetailsPage() {
  const [foundIngredient, setFoundIngredient] = useState(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [mealsByIngredient, setMealsByIngredient] = useState([]);

  const navigate = useNavigate();

  const { isLoggedIn, user } = useContext(AuthContext);

  const { ingredientId } = useParams();

  // Fetch ingredient
  useEffect(() => {
    const fetchIngredient = async () => {
      setIsLoading(true);
      try {
        const response = await ingredientService.findById(ingredientId);
        setFoundIngredient(response.data);
        // Retrieve isLiked state from localStorage
        const likedStatus =
          isLoggedIn &&
          localStorage.getItem("likedIngredient:" + ingredientId) === "true";
        // console.log("isLiked from localStorage:", likedStatus);
        setIsLiked(likedStatus);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchIngredient();
  }, [ingredientId, isLoggedIn]);

  // Fetch meal based on ingredient
  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      try {
        if (foundIngredient) {
          const response = await mealService.findByIngredient(ingredientId);
          console.log("response.data ", response.data);
          setMealsByIngredient(response.data.meals);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMealsByIngredient();
  }, [ingredientId, foundIngredient]);

  // Handle menu click
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };

  // Handle heart click
  const handleHeartClick = async () => {
    setIsLiked(!isLiked);
    if (isLoggedIn && foundIngredient) {
      try {
        if (isLiked) {
          // Remove from favorites if already liked
          await userService.removeIngredientFromFavorites(
            user._id,
            ingredientId
          );
          console.log("Ingredient removed from favorites");
        } else {
          // Add to favorites if not liked
          await userService.addIngredientToFavorites(user._id, ingredientId);
          console.log("Ingredient added to favorites");
        }
        localStorage.setItem("likedIngredient:" + ingredientId, !isLiked);
      } catch (error) {
        console.error("Error adding ingredient to favorites:", error);
      }
    } else {
      navigate("/login");
    }
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const isAuthor =
    isLoggedIn &&
    user &&
    foundIngredient &&
    foundIngredient.creator === user._id;
  // console.log(`isAuthor: ${isAuthor}`);

  return (
    <>
      <BackButton parentUrl="/all-ingredients" />
      <section className="bg-white dark:bg-gray-900 pb-8 px-4 mx-auto max-w-2xl lg:pb-8">
        {!foundIngredient && <h3>This ingredient doesn't exist!</h3>}
        {foundIngredient && (
          <>
            <div className="border rounded-lg overflow-hidden shadow-lg relative">
              <NutritionDetails
                name={foundIngredient.name}
                imageUrl={foundIngredient.imageUrl}
                calories={foundIngredient.calories}
                proteins={foundIngredient.proteins}
                fats={foundIngredient.fats}
                carbs={foundIngredient.carbs}
                isLiked={isLiked}
                onClick={handleHeartClick}
              />

              <hr />

              <div className="p-6">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Used in:
                </h3>
                <ul>
                  {mealsByIngredient &&
                    mealsByIngredient.map((meal) => (
                      <ul key={meal._id} className="list-disc pl-8">
                        <li className="hover:underline hover:text-blue-500">
                          <Link to={`/meal/${meal._id}`}>{meal.name}</Link>
                        </li>
                      </ul>
                    ))}
                </ul>
              </div>

              <hr />

              <div className="px-6 py-4 flex items-center justify-between h-20">
                <div className="flex items-center space-x-4">
                  <HeartIcon onClick={handleHeartClick} isLiked={isLiked} />
                </div>

                {menuToggle && (
                  <div className="absolute max-w-xs bg-white shadow-md rounded-md bottom-20 right-0">
                    <Link
                      to={`/edit/${ingredientId}`}
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
                      to={`/delete/${ingredientId}`}
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

export default IngredientDetailsPage;
