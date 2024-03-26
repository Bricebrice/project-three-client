import { useContext, useEffect, useState } from "react";
import FavoriteMeals from "../../components/FavoriteMeals";
import FavoriteIngredients from "../../components/FavoriteIngredients";
import ProfileHeader from "../../components/ProfileHeader";
import userService from "../../services/user.service";
import VegSpinner from "../../components/VegSpinner";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/auth.context";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [favMeals, setFavMeals] = useState([]);
  const [favIngredients, setFavIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log(user._id);
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
    <div className="bg-yellow-100 h-dvh">
      <ProfileHeader />
      <FavoriteMeals favMeals={favMeals} />
      <FavoriteIngredients favIngredients={favIngredients} url="/ingredient" />
      <Footer />
    </div>
  );
}
