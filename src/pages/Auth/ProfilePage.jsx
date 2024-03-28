import { useContext, useEffect, useState } from "react";
import FavoriteMeals from "../../components/FavoriteMeals";
import FavoriteIngredients from "../../components/FavoriteIngredients";
import ProfileHeader from "../../components/ProfileHeader";
import userService from "../../services/user.service";
import VegSpinner from "../../components/VegSpinner";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/auth.context";
import logo from "../../assets/logo.png";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [favMeals, setFavMeals] = useState([]);
  const [favIngredients, setFavIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log("fetch data profile: ", user._id);
    const mealResponse = await userService.getFavoriteMeals(user._id);
    setFavMeals(mealResponse.data.favMeals);
    const ingredientResponse = await userService.getFavoriteIngredients(
      user._id
    );
    setFavIngredients(ingredientResponse.data.favIngredients);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <VegSpinner />;
  }

  return (
    <>
      <div className="bg-yellow-100 py-8">
        <ProfileHeader />
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-mantis-100 rounded-md px-6 py-8 lg:max-w-lg">
              <FavoriteMeals favMeals={favMeals} />
            </div>
            <div className="bg-mantis-100 rounded-md px-6 py-8 lg:max-w-lg">
              <FavoriteIngredients
                favIngredients={favIngredients}
                url="/ingredient"
              />
            </div>
          </div>
        </div>
        <div className="bg-mantis-100 lg:w-1/2 w-11/12 rounded-md flex flex-col items-center text-center lg:max-w-lg mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 m-6">
            Calendar coming soon!
          </h3>
          <p className="text-lg mx-3 mb-5">
            We ask for your patience as we are still developing our calendar
            functionality. Stay tuned and in touch as we continue to grow our
            project!
          </p>
          <div className="rounded-md mb-6 flex items-center justify-center">
            <img src={logo} alt="" className="w-20  h-20" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
