import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, useParams } from "react-router-dom";
import VegSpinner from "../components/VegSpinner";
import mealService from "../services/meal.service";

export default function IsCreatorOrIsAdmin({ children }) {
  const { isAdmin, isLoading, user, isLoggedIn } = useContext(AuthContext);
  const { mealId } = useParams();
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    async function findAndSetMeal() {
      const response = await mealService.findById(mealId);
      await setMeal(response.data);
    }

    findAndSetMeal();
  }, []);

  if (isLoading || meal === undefined) {
    return <VegSpinner />;
  }

  if (isLoggedIn) {
    if (isAdmin || (meal && user._id === meal.creator)) {
      return children;
    } else {
      return <Navigate to="/all-meals" />;
    }
  } else {
    return <Navigate to="/all-meals" />;
  }
}
