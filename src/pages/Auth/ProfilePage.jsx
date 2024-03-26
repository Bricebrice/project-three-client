import { useContext, useEffect, useState } from "react";
import FavoriteMeals from "../../components/FavoriteMeals";
import FavoriteIngredients from "../../components/FavoriteIngredients";
import ProfileHeader from "../../components/ProfileHeader";
import userService from "../../services/user.service";
import VegSpinner from "../../components/VegSpinner";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/auth.context";
import logo from "../../assets/logo.png"

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
    <div className="">
      <div className="bg-yellow-100 py-10">
        <ProfileHeader />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-1 w-full items-center lg:justify-center lg:items-baseline pb-24">
          <div className="bg-mantis-100 lg:w-1/2 rounded-md mx-2 py-3 w-11/12 lg:max-w-lg">
            <FavoriteMeals favMeals={favMeals} />
            <FavoriteIngredients
              favIngredients={favIngredients}
              url="/ingredient"
            />
          </div>
          <div className="bg-mantis-100 lg:w-1/2 w-11/12 rounded-md flex flex-col items-center text-center lg:max-w-lg">
            <h1 className="text-3xl mx-3 my-2">Coming soon!</h1>
            <p className="text-lg mx-3 mb-5">
              We ask for your patience as we are still develping our calendar
              functionality. Stay tuned and in touch as we continue to grow our
              project!
            </p>
            <div className="bg-white rounded-md w-48 h-48 flex items-center justify-center mb-5">
              <img src={logo} alt="" className="w-32 h-32"/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
