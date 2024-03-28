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
      setMeal(response.data);
    }

    findAndSetMeal();
  }, []);

  if (isLoading) {
    return <VegSpinner />;
  }

  if (isLoggedIn) {
    // if (isAdmin || (meal && user._id === meal.creator)) { // Test to debug
    if (isAdmin || user._id === meal.creator) {
      return children;
    } else {
      // console.log("Redirecting to /all-meals");
      // console.log("isAdmin:", isAdmin);
      // console.log("meal:", meal);
      // console.log("user._id:", user._id);
      return <Navigate to="/all-meals" />;
    }
  } else return <Navigate to="/all-meals" />;
}
